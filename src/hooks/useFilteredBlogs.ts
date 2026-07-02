import { useMemo, useState } from "react"
import { blogs } from "../data/blogs"

export default function useFilteredBlogs() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))],
    [],
  )

  const filteredBlogs = useMemo(() => {
    const posts = blogs.slice(1)
    return activeCategory === "All"
      ? posts
      : posts.filter((blog) => blog.category === activeCategory)
  }, [activeCategory])

  return {categories, filteredBlogs, activeCategory, setActiveCategory}
}
