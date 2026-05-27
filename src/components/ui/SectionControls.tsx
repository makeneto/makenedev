import { ChevronLeft, ChevronRight } from "lucide-react"

interface SectionControlsProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
  label: string
}

const SectionControls: React.FC<SectionControlsProps> = ({
  page,
  totalPages,
  onPrev,
  onNext,
  label,
}) => {
  const isFirstPage = page === 0
  const isLastPage = page >= totalPages - 1

  return (
    <div className="flex items-center justify-between gap-4 mt-20">
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        disabled={isFirstPage}
        className="flex items-center gap-2 text-zinc-400 hover:text-white disabled:opacity-0"
      >
        <ChevronLeft size={18} />
        <span className="text-sm">Previous</span>
      </button>

      <div className="text-sm text-zinc-400">
        <span className="text-white font-bold">{label}</span> Projects
      </div>

      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        disabled={isLastPage}
        className="flex items-center gap-2 text-zinc-400 hover:text-white disabled:opacity-0"
      >
        <span className="text-sm">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  )
}

export default SectionControls
