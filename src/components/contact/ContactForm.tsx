import { useContactForm } from "../../hooks/useContactForm"
import { ContactFormActions } from "./ContactFormActions"
import { ContactFormFields } from "./ContactFormFields"
import { ContactFormMessage } from "./ContactFormMessage"
import { ContactFormServices } from "./ContactFormServices"

export function ContactForm() {
  const { form, loading, isValid, errors, updateField, handleSubmit } =
    useContactForm()

  return (
    <div className="contact-form">
      <section>
        <ContactFormFields
          form={form}
          errors={errors}
          updateField={updateField}
        />
        <ContactFormServices
          services={form.services}
          onChange={(value) => updateField("services", value)}
        />
        <ContactFormMessage
          value={form.message}
          error={errors.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </section>

      <ContactFormActions
        loading={loading}
        disabled={!isValid}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
