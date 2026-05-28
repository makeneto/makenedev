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
          I'm Angolan, and I grew up trying to figure out how things work on the
          inside. That never changed. These days I do the same with code: take
          it apart, understand it, build it back better. I've been building
          software end-to-end for {yearsAsProgrammer()}+ years. Scalable backends, interfaces that
          actually make sense to the people using them, and that uncomfortable
          space between design and engineering where most people don't want to
          be. Yeah, that one.
        </p>

        <p>
          Outside of work, I study, read, train and I pay attention to what's
          shifting in the world. Not because I have to, but because I genuinely
          believe a well-rounded person makes a better engineer. Engineering is
          what I do.{" "}
          <span>
            Becoming better as a professional, as a human being is what I'm
            after.
          </span>
        </p>
      </div>
    </section>
  )
}
