import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { LayoutGrid, List } from "lucide-react"

export function SelectFormat() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="grid">
      <ToggleGroupItem value="grid" aria-label="Toggle grid">
        <LayoutGrid />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="Toggle list">
        <List />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
