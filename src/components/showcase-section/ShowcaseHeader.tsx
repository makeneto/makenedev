interface ShowcaseHeaderProps {
  title: string
  viewAllHref?: string
}

const ShowcaseHeader = ({ title, viewAllHref }: ShowcaseHeaderProps) => {
  return (
    <header className="showcase-header">
      <h2 className="showcase-heading">{title}</h2>

      {viewAllHref && (
        <a href={viewAllHref} className="viewAll">
          View all
        </a>
      )}
    </header>
  )
}

export default ShowcaseHeader
