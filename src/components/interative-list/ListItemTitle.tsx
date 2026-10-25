import Link from "next/link"

type ListItemTitleProps = {
  title: string
  href?: string
  description?: string | null
  underlineOnHover?: boolean
}

const LINK_BASE = "grid sm:flex items-center justify-between text-[0.92rem]"
const LINK_UNDERLINE =
  "w-fit hover:underline underline-offset-3 transition active:translate-y-px"

export function ListItemTitle({
  title,
  href,
  description,
  underlineOnHover = false
}: ListItemTitleProps) {
  if (!href) {
    return <h3 className="flex-1 text-base">{title}</h3>
  }

  const linkClassName = underlineOnHover
    ? `${LINK_BASE} ${LINK_UNDERLINE}`
    : LINK_BASE

  return (
    <h3 className="flex-1 text-base">
      <Link href={href} className={linkClassName}>
        {title}
        {description && (
          <span className="weak-text text-sm">{description}</span>
        )}
      </Link>
    </h3>
  )
}
