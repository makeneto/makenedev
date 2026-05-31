interface ShowcaseHeaderProps {
  title: string
}

const ShowcaseHeader = ({ title }: ShowcaseHeaderProps) => {
  return (
    <header className="showcase-header">
      <h2 className="showcase-heading">{title}</h2>
    </header>
  )
}

export default ShowcaseHeader
