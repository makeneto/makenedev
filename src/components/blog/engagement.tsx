import { Share2, ThumbsDown, ThumbsUp } from "lucide-react"

import { Button } from "../ui/button"
import useEngagement from "@/hooks/use-engagement"
import ReusableTooltip from "../ui/reusable-tooltip"
import useSharePost from "@/hooks/use-share-post"
import { BlogArticle } from "@/services/wisp"

interface EngagementProps {
  post: BlogArticle
  basePath: "blog" | "work"
}

export function Engagement({ post, basePath }: EngagementProps) {
  const { title, slug } = post
  const { metrics, reaction, busy } = useEngagement({ slug })

  const { handleNativeShare } = useSharePost({
    title,
    slug,
    basePath
  })

  return (
    <section
      className="engagement-wrap"
      aria-label="Article reactions and metrics"
    >
      <div className="engagement">
        <div className="engagement-reactions" aria-label="Reações">
          <div className="weak-text text-sm">
            {metrics && metrics.views > 0 && <p>{metrics.views} Views</p>}
          </div>

          <div className="h-fit flex gap-2">
            <ReusableTooltip content="Like">
              <Button
                size="xs"
                className={`reaction-button ${metrics?.liked ? "is-selected" : ""}`}
                onClick={() => reaction("like")}
                disabled={busy}
                aria-pressed={metrics?.liked ?? false}
                aria-label="Like article"
              >
                <ThumbsUp
                  aria-hidden="true"
                  strokeWidth={3}
                  className="size-3.5"
                />
                {metrics && metrics.likes > 0 && <p>{metrics.likes}</p>}
              </Button>
            </ReusableTooltip>
            <ReusableTooltip content="Dislike">
              <Button
                size="xs"
                className={`reaction-button ${metrics?.disliked ? "is-selected is-dislike" : ""}`}
                onClick={() => reaction("dislike")}
                disabled={busy}
                aria-pressed={metrics?.disliked ?? false}
                aria-label="I didn't like the article"
              >
                <ThumbsDown
                  aria-hidden="true"
                  strokeWidth={2.2}
                  className="size-3.5"
                />
                {metrics && metrics.dislikes > 0 && <p>{metrics.dislikes}</p>}
              </Button>
            </ReusableTooltip>
            <ReusableTooltip content="Share">
              <Button
                size="xs"
                type="button"
                onClick={handleNativeShare}
                aria-label="Share"
                className="share-button"
              >
                <Share2 className="size-3.5" />
              </Button>
            </ReusableTooltip>
          </div>
        </div>
      </div>
    </section>
  )
}
