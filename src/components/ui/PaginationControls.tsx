import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"

type PaginationControlsProps = {
  page: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
}

export default function PaginationControls({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationControlsProps) {
  return (
    <div className="mt-11 flex items-center justify-between sm:mt-15">
      {page > 1 ? (
        <Button
          variant="link"
          aria-label="Previous"
          onClick={onPrevious}
          className="btn--link p-0"
        >
          <ChevronLeft size={18} />
          <span className="text-sm">Previous</span>
        </Button>
      ) : (
        <div />
      )}

      {page < totalPages ? (
        <Button
          variant="link"
          aria-label="Next"
          onClick={onNext}
          className="btn--link p-0"
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
