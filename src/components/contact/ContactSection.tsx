import { ContactForm } from "./ContactForm"
import { ContactSectionEmail } from "./ContactSectionEmail"
import { ContactSectionHeader } from "./ContactSectionHeader"

export function ContactSection() {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__left">
          <ContactSectionHeader />
          <ContactSectionEmail />
        </div>

        <div className="contact__right">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
