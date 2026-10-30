import { ControlsProps } from "@/interfaces/post"
import { PostControlsLink } from "./post-controls-link"

export function PostControls({
  previous,
  next,
  basePath
}: ControlsProps) {
  if (!previous && !next) return null

  return (
    <nav className="mt-15 flex items-center justify-between gap-6">
      <PostControlsLink
        item={previous}
        basePath={basePath}
        direction="previous"
      />

      <PostControlsLink
        item={next}
        basePath={basePath}
        direction="next"
      />
    </nav>
  )
}
