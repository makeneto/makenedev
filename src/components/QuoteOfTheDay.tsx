import { formattedDate } from "../utils/formattedDate"

export default function QuoteOfTheDay() {
    return (
        <section className="quoteOfTheDay">
            <div className="quoteOfTheDay__header">
                <p>Quote of the Day</p>

                <p>{formattedDate}</p>
            </div>

            <div className="quoteOfTheDay__content">
                <h1>
                    “<span>Silence is a source of great strength.</span>”
                </h1>

                <small>— Lao Tzu</small>
            </div>
        </section>
    )
}
