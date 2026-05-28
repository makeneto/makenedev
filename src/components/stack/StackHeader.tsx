interface ShowcaseHeaderProps {
  title: string
}

export default function StackHeader({ title }: ShowcaseHeaderProps) {
  return (
    <header className="stack-header">
      <h2 className="stack-heading">{title}</h2>
    </header>
  )
}
