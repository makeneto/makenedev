export interface SectionControlsProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
  label: string
  viewAll?: string
}
