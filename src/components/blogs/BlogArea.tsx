import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import LastBlog from "./LastBlog"
import VerticalBlogList from "./VerticalBlogList"

interface BlogAreaProps {
  isHome?: boolean
}

export default function BlogArea({ isHome }: BlogAreaProps) {
  return (
    <section>
      <ShowcaseHeader title="Writing" linkSection={isHome ? "/blog" : ""} />

      <div className="grid sm:grid-cols-[10%_auto] md:grid-cols-[50%_auto] lg:grid-cols-[60%_auto] xl:grid-cols-[55%_auto] gap-8 xl:gap-10">
        <LastBlog vertical />
        <VerticalBlogList />
      </div>
    </section>
  )
}
