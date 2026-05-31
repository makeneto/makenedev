import FooterLinks from "./footer/FooterLinks"
import Gratitude from "./footer/Gratitude"
import Signature from "./Signature"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="mb-20 grid gap-8 justify-center sm:flex sm:items-center sm:justify-between">
        <Gratitude />
        <Signature />
      </section>

      <FooterLinks />
    </footer>
  )
}
