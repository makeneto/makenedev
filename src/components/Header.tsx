export default function Header() {
    return (
        <header className="header">
            <section className="header__heroContent">
                <h1>Hey, </h1>
                <img src="/assets/hero-me.png" alt="Hero image" />
                <h1>there!</h1>
            </section>

            <article className="header__openToWork">
                <div>
                    <span className="header__openToWork--dot">
                        <span className="header__openToWork--dot--inner"></span>
                    </span>

                    <p>Available for new opportunities</p>
                </div>
            </article>

            <article className="header__intro">
                <h2>
                    I am
                    <br />
                    Makene
                </h2>

                <h3>Full-stack <br /> developer</h3>
            </article>
        </header>
    )
}
