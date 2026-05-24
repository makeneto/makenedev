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
        <p className="default-header__description">{description}</p>
      )}
      {component && <div>{component}</div>}
    </header>
  )
}
