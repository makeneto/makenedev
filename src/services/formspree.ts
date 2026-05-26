import type { ContactFormData } from "../constants/contact"

const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY

export async function sendContactForm(data: ContactFormData) {
  const payload = {
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    jobPosition: data.jobPosition,
    services: data.services.join(", "),
    message: data.message,
    _subject: `New contact request from ${data.fullName}`,
  }

  const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(
      errorBody?.error || errorBody?.message || "Failed to send contact form",
    )
  }

  return response.json()
}
