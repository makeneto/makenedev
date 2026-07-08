import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

export default function HomeHeader() {
  const isMobile = useMediaQuery({ maxWidth: 884 })

  return (
    <header className="homeHeader">
      <section className="homeHeader__heroContent">
        <h1 translate="no">Hey, </h1>
        <img src="/assets/hero-avatar.webp" alt="Makene Neto" />
        <h1 translate="no">there!</h1>
      </section>

      <div className="homeHeader__openToWork">
        <div>
          <span className="homeHeader__openToWork--dot">
            <span className="homeHeader__openToWork--dot--inner"></span>
          </span>

          <Link to="/contact" prefetch="intent">
            Available {!isMobile && "for new opportunities"}
          </Link>
        </div>
      </div>

      <article className="homeHeader__intro">
        <h2>
          I am
          <br />
          <span translate="no">Makene</span>
        </h2>

        <h3>
          Software <br /> Engineer
        </h3>
      </article>
    </header>
  )
}
