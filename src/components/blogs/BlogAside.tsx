interface BlogAsideProps {
  categories: string[]
  activeCategory: string
  onSelectCategory: (category: string) => void
}

export default function BlogAside({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogAsideProps) {
  return (
    <aside className="blog-aside">
      <h3>Categories</h3>

      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => onSelectCategory(category)}
            role="button"
            tabIndex={0}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="mt-10 text-zinc-400">
        <p className="text-xs leading-4.5">
          Select a category to filter posts and explore specific topics.
        </p>
      </div>
    </aside>
  )
}
