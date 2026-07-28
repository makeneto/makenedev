interface DefaultHeaderProps {
  title: string
  description?: string
  component?: React.ReactNode
  isShowcase?: boolean
}

export default function DefaultHeader({
  title,
  description,
  component,
  isShowcase = false,
}: DefaultHeaderProps) {
  return (
    <header
      className={`"headerPage--default ${!isShowcase ? "mb-28 sm:mb-40" : "mb-14 sm:mb-20"}`}
    >
      <h1 className="headerPage--default__title">{title}</h1>
      {description && <p className="description--normal">{description}</p>}
      {component && <div>{component}</div>}
    </header>
  )
}
