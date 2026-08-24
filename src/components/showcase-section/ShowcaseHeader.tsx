import { Activity } from "react"
import { LayoutGrid, List } from "lucide-react"
import { ViewAllLink } from "./ViewAllLink"
import { ShowcaseHeaderProps } from "@/interfaces/showcase"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

const ShowcaseHeader = ({
  title,
  linkSection = "",
  textLink = "View all",
  isShowcase,
  count,
<<<<<<< HEAD
  children,
  categories = [],
  selectedCategory = "all",
  onCategoryChange,
  viewMode = "grid",
  onViewModeChange,
=======
>>>>>>> parent of 628a4d9 (initial commit)
}: ShowcaseHeaderProps) => {
  return (
    <header className={`showcase-header ${isShowcase && "pt-14"} pb-4`}>
      <h2 className="showcase-heading">{title}</h2>

<<<<<<< HEAD
      <div className="showcase-header--controls">
        {categories.length > 0 && onCategoryChange && (
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger aria-label="Filter works by category" className="showcase-filter">
              <SelectValue placeholder="All works" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All works</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <ToggleGroup
          type="single"
          value={viewMode}
          onValueChange={(value) => value && onViewModeChange?.(value as "grid" | "list")}
          aria-label="Choose project view"
          variant="outline"
          size="sm"
        >
          <ToggleGroupItem value="grid" aria-label="Grid view"><LayoutGrid /></ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view"><List /></ToggleGroupItem>
        </ToggleGroup>
        {children}
        <Activity mode={linkSection ? "visible" : "hidden"}>
          <ViewAllLink to={linkSection} textLink={textLink} />
        </Activity>
        <Activity mode={count ? "visible" : "hidden"}>
          <p className="showcase-header--counter">{count} items</p>
        </Activity>
      </div>
=======
      <Activity mode={linkSection ? "visible" : "hidden"}>
        <ViewAllLink to={linkSection} textLink={textLink} />
      </Activity>

      <Activity mode={count ? "visible" : "hidden"}>
        <p className="showcase-header--counter">{count} items</p>
      </Activity>
>>>>>>> parent of 628a4d9 (initial commit)
    </header>
  )
}

export default ShowcaseHeader
