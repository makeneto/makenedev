import { works } from "@/data/works"
import { notFound } from "next/navigation"

import WorkHeader from "@/components/work/WorkHeader"
import Image from "next/image"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  const project = works.find((work) => work.slug === slug)

  if (!project) {
    notFound()
  }

  const { title, created_at, description, imageUrl, stacks } = project

  return (
    <main>
      <WorkHeader
        title={title}
        created_at={created_at}
        description={description}
      />
      <Image
        src={imageUrl}
        alt={title}
        width={1600}
        height={900}
        className="w-full h-auto rounded-xl mb-16"
      />

      <section className="grid gap-6">
        <p className="description--normal">
          Save a link or upload a file, and Purl classifies it automatically —
          web page, PDF, YouTube video, or audio. Each content type goes through
          its own ingestion pipeline: Readability for web articles, page
          extraction for PDFs, transcript fetching for YouTube, and Whisper
          transcription for audio. Chunks are embedded via OpenAI and stored in
          Postgres with pgvector, ready for semantic search.
        </p>

        <p className="description--normal">
          Purl is a full-stack, production-ready personal knowledge base built
          to solve a common problem: saving content you care about and never
          being able to find or use it again. Instead of bookmarks, Purl ingests
          what you save — extracting text, generating vector embeddings, and
          making it all queryable through an AI chat interface powered by
          Anthropic Claude.
        </p>

        <p className="description--normal">
          Beyond the core product, Purl ships with a full operational layer:
          Stripe subscriptions with Free and Pro tiers, Better Auth for
          authentication, Supabase Realtime for cross-device sync,
          Upstash-backed rate limiting, Sentry error tracking, a PWA manifest
          with a Serwist service worker for installability, and a CI/CD pipeline
          on GitHub Actions.
        </p>
      </section>

      <section className="mt-16 grid gap-6">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-x-1.5">
          {stacks.map((stack, index) => (
            <li key={stack} className="description--normal">
              {stack}
              {index < stacks.length - 1 ? "," : "."}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
