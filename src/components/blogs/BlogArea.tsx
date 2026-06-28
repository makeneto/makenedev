import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import BlogAside from "./BlogAside"
import BlogList from "./BlogList"

interface BlogAreaProps {
  title: string
}

export default function BlogArea({ title }: BlogAreaProps) {
  return (
    <main className="showcase-section">
      <ShowcaseHeader title={title} />

      <section className="blog-body">
        <BlogList />
        <BlogAside />
      </section>
    </main>
  )
}
