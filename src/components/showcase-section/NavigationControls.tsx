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
          aria-label="Previous"
          onClick={onPrev}
          className="p-0"
        >
          <ChevronLeft size={18} />
          <span className="text-sm">Previous</span>
        </Button>
      ) : (
        <div />
      )}

      {!isLastPage ? (
        <Button
          variant="link"
          aria-label="Next"
          onClick={onNext}
          className="p-0"
        >
          <span className="text-sm">Next</span>
          <ChevronRight size={18} />
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}
