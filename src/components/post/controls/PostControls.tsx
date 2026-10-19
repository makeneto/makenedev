import { ControlsProps } from "@/interfaces/post"
import { PostControlsLink } from "./PostControlsLink"

export function PostControls({
  variant,
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
        variant={variant}
      />

      <PostControlsLink
        item={next}
        basePath={basePath}
        direction="next"
        variant={variant}
      />
    </nav>
  )
}
