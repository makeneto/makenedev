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
  const isFirstPage = page === 1
  const isLastPage = page >= totalPages

  return (
    <div className="flex items-center justify-between mt-11 sm:mt-15">
      {!isFirstPage ? (
        <button
          type="button"
          aria-label="Previous"
          onClick={onPrev}
          className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronLeft size={18} />
          <span className="text-sm">Previous</span>
        </button>
      ) : (
        <div />
      )}

      {!isLastPage ? (
        <button
          type="button"
          aria-label="Next"
          onClick={onNext}
          className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400"
        >
          <span className="text-sm">Next</span>
          <ChevronRight size={18} />
        </button>
      ) : (
        <div />
      )}
    </div>
  )
}
