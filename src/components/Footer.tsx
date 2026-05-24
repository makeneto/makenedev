import FooterLinks from "./footer/FooterLinks"
import Gratitude from "./footer/Gratitude"
import Signature from "./Signature"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="mb-20 flex items-center justify-between">
        <Gratitude />
        <Signature />
      </section>

      <FooterLinks />
    </footer>
  )
}
