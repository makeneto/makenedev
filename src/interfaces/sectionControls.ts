export interface SectionControlsProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
  viewAll?: string
}
