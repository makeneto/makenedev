"use client"

import { Star } from "lucide-react"

import { Button } from "../ui/button"
import ReusableTooltip from "../ui/reusable-tooltip"
import useEngagement from "@/hooks/use-engagement"

type RecommendButtonProps = {
  slug: string
}

export function RecommendButton({ slug }: RecommendButtonProps) {
  const { metrics, reaction, busy } = useEngagement({ slug })

  const isRecommended = metrics?.liked ?? false
  const recommendations = metrics?.likes ?? 0

  return (
    <section>
      <ReusableTooltip content="Recommend">
        <Button
          type="button"
          variant={isRecommended ? "success" : "outline"}
          onClick={() => reaction("like")}
          disabled={busy}
          aria-pressed={isRecommended}
          aria-label="Recommend professional"
        >
          <Star aria-hidden="true" strokeWidth={2.2} />
          {recommendations > 0 && <span>{recommendations}</span>}
        </Button>
      </ReusableTooltip>
    </section>
  )
}
