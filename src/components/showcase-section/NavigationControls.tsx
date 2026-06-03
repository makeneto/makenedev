import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const isFirstPage = page === 0
  const isLastPage = page >= totalPages - 1

  return (
    <div className="flex items-center justify-between mt-11 sm:mt-15">
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        disabled={isFirstPage}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-white disabled:opacity-0"
      >
        <ChevronLeft size={18} />
        <span className="text-sm">Previous</span>
      </button>

      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        disabled={isLastPage}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-white disabled:opacity-0"
      >
        <span className="text-sm">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
