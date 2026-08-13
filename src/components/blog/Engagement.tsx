import { Share2, ThumbsDown, ThumbsUp } from "lucide-react"
import { useMediaQuery } from "react-responsive"

import { Button } from "../ui/button"
import useEngagement from "@/hooks/useEngagement"
import ReusableTooltip from "../ui/ReusableTooltip"
import useSharePost from "@/hooks/useSharePost"
import { BlogArticle } from "@/services/wisp"

interface EngagementProps {
  post: BlogArticle
  basePath: "blog" | "work"
}

export function Engagement({ post, basePath }: EngagementProps) {
  const { title, slug } = post
  const { metrics, reaction, busy } = useEngagement({ slug })
  const isMobile = useMediaQuery({ maxWidth: 640 })

  const { handleNativeShare } = useSharePost({
    title,
    slug,
    basePath,
  })

  return (
    <section
      className="sticky bottom-10 md:bottom-5 engagement-wrap"
      aria-label="Article reactions and metrics"
    >
      <div className="engagement">
        <div className="engagement-reactions" aria-label="Reações">
          <ReusableTooltip content="Like">
            <Button
              size={isMobile ? "default" : "sm"}
              className={`reaction-button ${metrics?.liked ? "is-selected" : ""}`}
              onClick={() => reaction("like")}
              disabled={busy}
              aria-pressed={metrics?.liked ?? false}
              aria-label="Like article"
            >
              <ThumbsUp aria-hidden="true" strokeWidth={2.2} />
              {metrics && metrics.likes > 0 && <p>{metrics.likes}</p>}
            </Button>
          </ReusableTooltip>

          <ReusableTooltip content="Dislike">
            <Button
              size={isMobile ? "default" : "sm"}
              className={`reaction-button ${metrics?.disliked ? "is-selected is-dislike" : ""}`}
              onClick={() => reaction("dislike")}
              disabled={busy}
              aria-pressed={metrics?.disliked ?? false}
              aria-label="I didn't like the article"
            >
              <ThumbsDown aria-hidden="true" strokeWidth={2.2} />
              {metrics && metrics.dislikes > 0 && <p>{metrics.dislikes}</p>}
            </Button>
          </ReusableTooltip>

          <ReusableTooltip content="Share">
            <Button
              size={isMobile ? "default" : "sm"}
              type="button"
              onClick={handleNativeShare}
              aria-label="Share"
              className="share-button"
            >
              <Share2 />
            </Button>
          </ReusableTooltip>
        </div>
      </div>
    </section>
  )
}
