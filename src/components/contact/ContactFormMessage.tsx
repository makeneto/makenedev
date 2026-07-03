import { Mail } from "lucide-react"
import type { ChangeEvent } from "react"

import { ContactTextarea } from "./ContactTextarea"

interface Props {
  value: string
  error?: boolean
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function ContactFormMessage({ value, error, onChange }: Props) {
  return (
    <div>
      <ContactTextarea
        label="Message"
        icon={<Mail size={15} />}
        placeholder="Enter your main text here..."
        maxLength={500}
        value={value}
        invalid={error}
        onChange={onChange}
      />
    </div>
  )
}
