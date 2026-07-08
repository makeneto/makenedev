import { useMediaQuery } from "react-responsive"

import { ContactSectionHeader } from "./ContactSectionHeader"
import CtaButtons from "./CtaButtons"

export default function Cta({ className }: { className?: string }) {
  const isPhone = useMediaQuery({ maxWidth: 640 })

  return (
    <section className={`${className} contact`}>
      <div className="contact__content">
        <div className="contact__left">
          <ContactSectionHeader description="Have a project in mind? Let's discuss how I can help you bring your ideas to life." />

          <CtaButtons />
        </div>

        {!isPhone && (
          <img
            src="/assets/cta-image.webp"
            alt="Avatar"
            className="w-55 mx-auto"
          />
        )}
      </div>
    </section>
  )
}
