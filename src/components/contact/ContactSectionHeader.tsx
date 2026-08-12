export function ContactSectionHeader({ description }: { description: string }) {
  return (
    <header>
      <h2 className="contact__title">
        Let’s Get in
        <br />
        <i>Touch.</i>
      </h2>

      <p className="contact__description">{description}</p>
    </header>
  )
}
