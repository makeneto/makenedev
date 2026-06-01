export default function AboutDescription() {
  function yearsAsProgrammer(startDate = "2021-07-25"): number {
    const start = new Date(startDate)
    const now = new Date()

    return (
      now.getFullYear() -
      start.getFullYear() -
      (now < new Date(now.getFullYear(), start.getMonth(), start.getDate())
        ? 1
        : 0)
    )
  }

  return (
    <section className="grid gap-20">
      <div className="description--normal default-header--about">
        <p>
          I'm Angolan, driven by curiosity and a passion for understanding how
          things work beneath the surface. For {yearsAsProgrammer()}+ years,
          I've been building software end-to-end, from scalable backends to
          thoughtful user experiences. Beyond engineering, I study, read, train
          and stay curious about the world.{" "}
          <span>
            Growth, both professional and personal, is what drives me.
          </span>
        </p>
      </div>
    </section>
  )
}
