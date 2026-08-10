import { NextResponse } from "next/server"
import { fetchContributionsFromGitHub } from "@/features/github/api"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const data = await fetchContributionsFromGitHub()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error loading GitHub contributions:", error)
    return NextResponse.json(
      { total: 0, weeks: [], year: new Date().getUTCFullYear() },
      { status: 200 },
    )
  }
}
