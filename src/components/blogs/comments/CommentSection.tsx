"use client"

import { useCallback, useEffect, useState } from "react"
import { wisp } from "@/services/wisp"
import { CommentForm } from "./CommentForm"
import { CommentThread } from "./CommentThread"

import {
  buildCommentTree,
  CommentsConfig,
  WispComment,
} from "@/interfaces/comments"
import ShowcaseHeader from "@/components/showcase-section/ShowcaseHeader"

export function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<WispComment[]>([])
  const [config, setConfig] = useState<CommentsConfig | null>(null)
  const [loading, setLoading] = useState(true)

  const loadComments = useCallback(async () => {
    const data = await wisp.getComments({ slug, page: 1, limit: "all" })
    setComments(data.comments)
    setConfig(data.config)
    setLoading(false)
  }, [slug])

  useEffect(() => {
    loadComments()
  }, [loadComments])

  if (!loading && !config?.enabled) return null

  const tree = buildCommentTree(comments)

  return (
    <section className="comments" id="comentarios">
      <ShowcaseHeader title="Add Comment" />

      <CommentForm slug={slug} config={config} onPosted={loadComments} />

      <div className="comments__list">
        {loading ? (
          <p className="comments__empty">Loading comments...</p>
        ) : tree.length === 0 ? (
          <p className="comments__empty">
            There are no comments yet. Be the first to share your opinion.
          </p>
        ) : (
          tree.map((comment) => (
            <CommentThread key={comment.id} comment={comment} config={config} />
          ))
        )}
      </div>
    </section>
  )
}
