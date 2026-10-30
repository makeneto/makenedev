import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group flex items-center gap-1 select-none"
    >
      <span className="mb-1.5 text-3xl font-bold text-taupe-700 dark:text-white">
        m
      </span>
      <div className="h-7.5 transition-all border-r-4 border-taupe-400 dark:border-neutral-600 group-hover:border-taupe-500 dark:group-hover:border-neutral-400" />
    </Link>
  )
}
