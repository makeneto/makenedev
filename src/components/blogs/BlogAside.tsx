export default function BlogAside() {
  return (
    <aside className="blog-aside">
      <h3>Categories</h3>

      <ul>
        <li>All</li>
        <li>Development</li>
        <li>AI</li>
        <li>Health</li>
      </ul>

      <div className="mt-10 bg-[#1515159d] p-3 text-zinc-400 border border-dashed border-zinc-800">
        <p className="text-xs leading-4.5">
          Select a category to filter posts and explore specific topics.
        </p>
      </div>
    </aside>
  )
}
