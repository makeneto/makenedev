import FooterLinks from "./FooterLinks"
import Signature from "./Signature"

export default function Footer() {
  return (
    <footer className="pb-4 mt-32">
      <section className="mb-8 sm:mb-10 grid gap-10 justify-center sm:flex sm:items-center sm:justify-between sm:gap-0">
        <p className="text-[1.4rem] lowercase italic leading-none tracking-[-0.01em] text-(--text-primary)"
        style={{ fontFamily: '"Instrument Serif", serif' }}>
          Glade to share my work!
        </p>
        <Signature />
      </section>

      <FooterLinks />
    </footer>
  )
}
