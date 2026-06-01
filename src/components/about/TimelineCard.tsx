type TimelineCardProps = {
  title: string
  subtitle: string
  description: string
  tags?: string[]
  track: string
}

export default function TimelineCard({
  title,
  subtitle,
  description,
  tags,
  track,
}: TimelineCardProps) {
  return (
    <div className="timeline-card">
      <div className="timeline-card__dot" />
      <span className="timeline-card__title" data-track={track}>
        {title}
      </span>
      <h4 className="timeline-card__subtitle">{subtitle}</h4>
      <p className="timeline-card__description">{description}</p>

      {tags && (
        <div className="timeline-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="timeline-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
