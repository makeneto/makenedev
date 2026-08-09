"use client"

import { formatDate } from "@/utils/formatDate"
import { CommentNode, CommentsConfig } from "@/interfaces/comments"
import Link from "next/link"

interface CommentThreadProps {
  comment: CommentNode
  config: CommentsConfig | null
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

export function CommentThread({ comment, config }: CommentThreadProps) {
  return (
    <div className="comment">
      <div className="comment__avatar">{initials(comment.author)}</div>

      <div className="comment__body">
        <div className="comment__meta">
          {config?.allowUrls && comment.url ? (
            <Link
              href={comment.url}
              target="_blank"
              rel="noreferrer"
              className="comment__author"
            >
              {comment.author}
            </Link>
          ) : (
            <span className="comment__author">{comment.author}</span>
          )}
          <span className="comment__date">{formatDate(comment.createdAt)}</span>
        </div>

        <p className="">{comment.content}</p>
      </div>
    </div>
  )
}
