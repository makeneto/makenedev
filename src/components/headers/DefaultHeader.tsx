interface DefaultHeaderProps {
  title: string
  description?: string
  component?: React.ReactNode
}

export default function DefaultHeader({
  title,
  description,
  component,
}: DefaultHeaderProps) {
  return (
    <header className="default-header">
      <h1 className="default-header__title">{title}</h1>
      {description && (
        <p className="description--normal">{description}</p>
      )}
      {component && <div>{component}</div>}
    </header>
  )
}
