import { NextResponse } from "next/server"
import { sql } from "drizzle-orm"
import { db } from "@/lib/engagementDb"

export const runtime = "nodejs"

function safeSlug(value: string) {
  return (
    value.length > 0 &&
    value.length <= 200 &&
    /^[a-z0-9][a-z0-9-]*$/i.test(value)
  )
}

function safeDeviceId(value: unknown) {
  return (
    typeof value === "string" &&
    value.length >= 16 &&
    value.length <= 128 &&
    /^[a-zA-Z0-9._-]+$/.test(value)
  )
}

async function ensureMetrics(slug: string) {
  await db.execute(
    sql`INSERT INTO blog_post_metrics (post_slug) VALUES (${slug}) ON CONFLICT (post_slug) DO NOTHING`,
  )
}

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params
  if (!safeSlug(slug))
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 })
  const deviceId = new URL(request.url).searchParams.get("deviceId")
  await ensureMetrics(slug)
  const result = await db.execute(
    sql`SELECT view_count, like_count, dislike_count, EXISTS (SELECT 1 FROM blog_post_devices d WHERE d.post_slug = ${slug} AND d.device_id = ${deviceId ?? ""} AND d.liked = TRUE) AS liked, EXISTS (SELECT 1 FROM blog_post_devices d WHERE d.post_slug = ${slug} AND d.device_id = ${deviceId ?? ""} AND d.disliked = TRUE) AS disliked FROM blog_post_metrics WHERE post_slug = ${slug}`,
  )
  const row = result.rows[0] as {
    view_count: number
    like_count: number
    dislike_count: number
    liked: boolean
    disliked: boolean
  }
  return NextResponse.json({
    views: Number(row.view_count),
    likes: Number(row.like_count),
    dislikes: Number(row.dislike_count),
    liked: Boolean(row.liked),
    disliked: Boolean(row.disliked),
  })
}

export async function POST(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params

  if (!safeSlug(slug))
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 })

  const body = (await request.json().catch(() => null)) as {
    action?: string
    deviceId?: string
  } | null

  if (!body || !safeDeviceId(body.deviceId))
    return NextResponse.json({ error: "Invalid device" }, { status: 400 })

  if (
    body.action !== "view" &&
    body.action !== "like" &&
    body.action !== "dislike"
  )
    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  const deviceId = body.deviceId
  const action = body.action
  await ensureMetrics(slug)

  if (action === "view") {
    const inserted = await db.execute(
      sql`INSERT INTO blog_post_devices (post_slug, device_id, viewed_at) VALUES (${slug}, ${deviceId}, NOW()) ON CONFLICT (post_slug, device_id) DO UPDATE SET viewed_at = COALESCE(blog_post_devices.viewed_at, NOW()), updated_at = NOW() WHERE blog_post_devices.viewed_at IS NULL RETURNING post_slug`,
    )

    if (inserted.rows.length)
      await db.execute(
        sql`UPDATE blog_post_metrics SET view_count = view_count + 1, updated_at = NOW() WHERE post_slug = ${slug}`,
      )
  } else if (action === "like") {
    const previous = await db.execute(
      sql`SELECT liked, disliked FROM blog_post_devices WHERE post_slug = ${slug} AND device_id = ${deviceId}`,
    )

    const old = previous.rows[0] as
      | { liked?: boolean; disliked?: boolean }
      | undefined

    const toggled = await db.execute(
      sql`INSERT INTO blog_post_devices (post_slug, device_id, liked, disliked, updated_at) VALUES (${slug}, ${deviceId}, TRUE, FALSE, NOW()) ON CONFLICT (post_slug, device_id) DO UPDATE SET liked = NOT blog_post_devices.liked, disliked = FALSE, updated_at = NOW() RETURNING liked`,
    )

    const liked = Boolean((toggled.rows[0] as { liked: boolean }).liked)
    await db.execute(
      sql`UPDATE blog_post_metrics SET like_count = GREATEST(0, like_count + ${liked ? 1 : -1}), dislike_count = GREATEST(0, dislike_count + ${old?.disliked ? -1 : 0}), updated_at = NOW() WHERE post_slug = ${slug}`,
    )
  } else {
    const previous = await db.execute(
      sql`SELECT liked, disliked FROM blog_post_devices WHERE post_slug = ${slug} AND device_id = ${deviceId}`,
    )

    const old = previous.rows[0] as
      | { liked?: boolean; disliked?: boolean }
      | undefined

    const toggled = await db.execute(
      sql`INSERT INTO blog_post_devices (post_slug, device_id, liked, disliked, updated_at) VALUES (${slug}, ${deviceId}, FALSE, TRUE, NOW()) ON CONFLICT (post_slug, device_id) DO UPDATE SET disliked = NOT blog_post_devices.disliked, liked = FALSE, updated_at = NOW() RETURNING disliked`,
    )

    const disliked = Boolean(
      (toggled.rows[0] as { disliked: boolean }).disliked,
    )

    await db.execute(
      sql`UPDATE blog_post_metrics SET dislike_count = GREATEST(0, dislike_count + ${disliked ? 1 : -1}), like_count = GREATEST(0, like_count + ${old?.liked ? -1 : 0}), updated_at = NOW() WHERE post_slug = ${slug}`,
    )
  }

  const result = await db.execute(
    sql`
      SELECT view_count, like_count, dislike_count, EXISTS (SELECT 1 FROM blog_post_devices d WHERE d.post_slug = ${slug} AND d.device_id = ${deviceId} AND d.liked = TRUE) AS liked, EXISTS (SELECT 1 FROM blog_post_devices d WHERE d.post_slug = ${slug} AND d.device_id = ${deviceId} AND d.disliked = TRUE) AS disliked FROM blog_post_metrics WHERE post_slug = ${slug}
      `,
  )

  const row = result.rows[0] as {
    view_count: number
    like_count: number
    dislike_count: number
    liked: boolean
    disliked: boolean
  }

  return NextResponse.json({
    views: Number(row.view_count),
    likes: Number(row.like_count),
    dislikes: Number(row.dislike_count),
    liked: Boolean(row.liked),
    disliked: Boolean(row.disliked),
  })
}
