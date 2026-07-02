import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import BlogAside from "./BlogAside"
import BlogList from "./BlogList"
import useFilteredBlogs from "../../hooks/useFilteredBlogs"

interface BlogAreaProps {
  title: string
}

export default function BlogArea({ title }: BlogAreaProps) {
  const { categories, filteredBlogs, activeCategory, setActiveCategory } =
    useFilteredBlogs()

  return (
    <main className="showcase-section">
      <ShowcaseHeader title={title} />

      <section className="blog-body">
        <BlogList
          blogs={filteredBlogs}
          showLastBlog={activeCategory === "All"}
        />
        <BlogAside
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </section>
    </main>
  )
}
