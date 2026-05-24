export default function HomeHeader() {
    return (
        <header className="homeHeader">
            <section className="homeHeader__heroContent">
                <h1>Hey, </h1>
                <img src="/assets/hero-me.png" alt="Hero image" />
                <h1>there!</h1>
            </section>

            <article className="homeHeader__openToWork">
                <div>
                    <span className="homeHeader__openToWork--dot">
                        <span className="homeHeader__openToWork--dot--inner"></span>
                    </span>

                    <p>Available for new opportunities</p>
                </div>
            </article>

            <article className="homeHeader__intro">
                <h2>
                    I am
                    <br />
                    Makene
                </h2>

                <h3>Software <br /> Engineer</h3>
            </article>
        </header>
    )
}
