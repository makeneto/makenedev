"use client"

import ShowcaseHeader from "./ShowcaseHeader"
import ShowcaseGrid from "./ShowcaseGrid"
import SectionControls from "../ui/SectionControls"
import { useShowcasePagination } from "@/hooks/useShowcasePagination"
import { ShowcaseContentProps } from "@/interfaces/showcase"
import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { ViewAllLink } from "./ViewAllLink"

export default function ShowcaseContent({
  posts,
  title,
  viewAll,
  isHomePage,
  isShowcase,
  children,
}: ShowcaseContentProps) {
  const {
    sectionRef,
    page,
    totalPages,
    visiblePosts,
    handleNext,
    handlePrev,
    showControls,
  } = useShowcasePagination({
    posts,
    isHomePage,
  })

  return (
    <section ref={sectionRef}>
      <ShowcaseHeader
        title={title}
        count={isHomePage ? 0 : posts.length}
        linkSection={viewAll}
        isShowcase={isShowcase}
      >
        {children}
      </ShowcaseHeader>

      <ShowcaseGrid posts={visiblePosts} />

      {isHomePage && <ViewAllLink to="/work" className="justify-self-center mt-12" />}

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
