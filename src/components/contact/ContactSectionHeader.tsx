export function ContactSectionHeader({ description }: { description: string }) {
  return (
    <header>
      <span className="contact__subtitle">Contact me</span>

      <h2 className="contact__title">
        Let’s Get In
        <br />
        <i>Touch.</i>
      </h2>

      <p className="contact__description">{description}</p>
    </header>
  )
}
