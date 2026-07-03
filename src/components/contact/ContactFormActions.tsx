import { Loader2, Send } from "lucide-react"

import { Button } from "../ui/button"
import React from "react"

interface Props {
  loading: boolean
  disabled: boolean
  onSubmit: () => void
}

export function ContactFormActions({ loading, disabled, onSubmit }: Props) {
  return (
    <Button
      disabled={disabled || loading}
      onClick={onSubmit}
      className="submit-btn"
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <React.Fragment>
          Send message
          <Send className="submit-icon" />
        </React.Fragment>
      )}
    </Button>
  )
}
