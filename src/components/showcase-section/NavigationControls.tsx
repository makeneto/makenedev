import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

interface NavigationControlsProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  page,
  totalPages,
  onPrev,
  onNext,
}) => {
  const isFirstPage = page === 1
  const isLastPage = page >= totalPages

  return (
    <div className="flex items-center justify-between mt-11 sm:mt-15">
      {!isFirstPage ? (
        <Button
          variant="link"
          size="sm"
          className="font-medium weak-text weak-hover"
          aria-label="Previous"
          onClick={onPrev}
        >
          Previous
          <ChevronLeft />
        </Button>
      ) : (
        <div />
      )}

      {!isLastPage ? (
        <Button
          variant="link"
          size="sm"
          aria-label="Next"
          onClick={onNext}
          className="font-medium weak-text weak-hover"
        >
          Next
          <ChevronRight />
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}
