import { ContactForm } from "./ContactForm"
import { ContactSectionEmail } from "./ContactSectionEmail"
import { ContactSectionHeader } from "./ContactSectionHeader"

export default function ContactSection({ className }: { className?: string }) {
  return (
    <section className={`${className} contact`}>
      <div className="contact__content">
        <div className="contact__left">
          <ContactSectionHeader description="I build scalable, high-performance digital solutions with clean, maintainable architecture and a strong focus on efficiency and measurable impact." />
          <ContactSectionEmail />
        </div>

        <div className="contact__right">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
