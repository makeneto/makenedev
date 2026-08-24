"use client"

import ShowcaseHeader from "./ShowcaseHeader"
import ShowcaseGrid from "./ShowcaseGrid"
import SectionControls from "../ui/SectionControls"
import { useShowcasePagination } from "@/hooks/useShowcasePagination"
import { ShowcaseContentProps } from "@/interfaces/showcase"
<<<<<<< HEAD
import { ViewAllLink } from "./ViewAllLink"
import { useMemo, useState } from "react"

const isUrlTag = (tag: string) => /^(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?(?:[/?#].*)?$/i.test(tag.trim())
const tagLabel = (tag: unknown) => typeof tag === "string" ? tag : typeof tag === "object" && tag !== null && "name" in tag ? String(tag.name) : ""
=======
>>>>>>> parent of 628a4d9 (initial commit)

export default function ShowcaseContent({
  posts,
  title,
  viewAll,
  isHomePage,
  isShowcase,
}: ShowcaseContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const categories = useMemo(() => Array.from(new Set(posts.flatMap((post) => {
    const tags = Array.isArray((post as { tags?: unknown[] }).tags) ? (post as { tags: unknown[] }).tags : []
    return tags.map(tagLabel).filter((tag) => tag && !isUrlTag(tag))
  }))).sort(), [posts])
  const filteredPosts = selectedCategory === "all" ? posts : posts.filter((post) => {
    const tags = Array.isArray((post as { tags?: unknown[] }).tags) ? (post as { tags: unknown[] }).tags : []
    return tags.map(tagLabel).includes(selectedCategory)
  })

  const {
    sectionRef,
    page,
    totalPages,
    visiblePosts,
    handleNext,
    handlePrev,
    showControls,
  } = useShowcasePagination({
    posts: filteredPosts,
    isHomePage,
  })

  return (
    <section ref={sectionRef}>
      <ShowcaseHeader
        title={title}
        count={isHomePage ? 0 : posts.length}
        linkSection={viewAll}
        isShowcase={isShowcase}
<<<<<<< HEAD
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      >
        {children}
      </ShowcaseHeader>
=======
      />
>>>>>>> parent of 628a4d9 (initial commit)

      <ShowcaseGrid posts={visiblePosts} viewMode={viewMode} />

      {showControls && !viewAll && (
        <SectionControls
          page={page}
          totalPages={totalPages}
          viewAll={viewAll}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
