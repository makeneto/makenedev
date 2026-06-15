import FooterLinks from "./FooterLinks"
import Gratitude from "./Gratitude"
import Signature from "./Signature"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="mb-15 sm:mb-20 grid gap-10 justify-center sm:flex sm:items-center sm:justify-between sm:gap-0">
        <Gratitude />
        <Signature />
      </section>

      <FooterLinks />
    </footer>
  )
}
