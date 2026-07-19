export default function LoadingPage() {
  const currentYear = new Date().getFullYear()

  return (
    <body className="loadingPage">
      <div className="loadingPage__content">
        <h1>Makene</h1>

        <section className="loadingPage__footer">
          <p>
            <span>© 2021</span> - {currentYear}
          </p>
        </section>
      </div>
    </body>
  )
}
