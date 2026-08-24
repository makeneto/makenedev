import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { LayoutGrid, Menu } from "lucide-react"

export function SelectFormat() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue={["grid"]}>
      <ToggleGroupItem value="grid" aria-label="Toggle grid">
        <LayoutGrid />
      </ToggleGroupItem>
      <ToggleGroupItem value="line" aria-label="Toggle line">
        <Menu />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
