import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import BlogList from "./BlogList"

interface BlogSectionProps {
  title: string
}

export default function BlogSection({ title }: BlogSectionProps) {
  return (
    <section className="showcase-section">
      <ShowcaseHeader title={title} />
      <BlogList />
    </section>
  )
}
