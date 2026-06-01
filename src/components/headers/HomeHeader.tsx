import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

export default function HomeHeader() {
  const isMobile = useMediaQuery({ maxWidth: 649 })

  return (
    <header className="homeHeader">
      <section className="homeHeader__heroContent">
        <h1>Hey, </h1>
        <img src="/assets/hero-img.webp" alt="Makene Neto" />
        <h1>there!</h1>
      </section>

      <Link to="/contact" prefetch="intent" className="homeHeader__openToWork">
        <div>
          <span className="homeHeader__openToWork--dot">
            <span className="homeHeader__openToWork--dot--inner"></span>
          </span>

          <p>Available {!isMobile && "for new opportunities"} </p>
        </div>
      </Link>

      <article className="homeHeader__intro">
        <h2>
          I am
          <br />
          Makene
        </h2>

        <h3>
          Software <br /> Engineer
        </h3>
      </article>
    </header>
  )
}
