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
      className="
        mt-8
        py-5
        w-full
        rounded-full
        bg-white
        text-black
        hover:bg-zinc-200
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <React.Fragment>
          Submit Form
          <Send size={10} />
        </React.Fragment>
      )}
    </Button>
  )
}
