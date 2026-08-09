"use client"

import React, { useState, type FormEvent } from "react"
import { wisp } from "@/services/wisp"
import { CommentsConfig } from "@/interfaces/comments"
import { ContactTextarea } from "@/components/contact/ContactTextarea"
import { AtSign, Loader2, Mail, Send, User } from "lucide-react"
import { ContactInput } from "@/components/contact/ContactInput"
import { Button } from "@/components/ui/button"

interface CommentFormProps {
  slug: string
  config: CommentsConfig | null
  parentId?: string
  autoFocus?: boolean
  onPosted: () => void
  onCancel?: () => void
}

export function CommentForm({
  slug,
  config,
  parentId,
  autoFocus,
  onPosted,
  onCancel,
}: CommentFormProps) {
  const [author, setAuthor] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [content, setContent] = useState("")
  const [allowEmailUsage, setAllowEmailUsage] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pendingVerification, setPendingVerification] = useState(false)

  if (!config) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!author.trim() || !email.trim() || !content.trim()) {
      setError("Preenche o nome, o email e o comentário.")
      return
    }

    setSubmitting(true)
    try {
      await wisp.createComment({
        slug,
        author: author.trim(),
        email: email.trim(),
        content: content.trim(),
        url: url.trim() || undefined,
        allowEmailUsage,
        parentId,
      })
      setPendingVerification(true)
      setAuthor("")
      setEmail("")
      setUrl("")
      setContent("")
      onPosted()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar o comentário.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (pendingVerification) {
    return (
      <div className="comments__notice">
        <p>
          Confirma o teu email para o comentário aparecer. Se não vires nada na
          caixa de entrada, confere o spam.
        </p>
        {onCancel && (
          <button type="button" className="comments__link" onClick={onCancel}>
            Fechar
          </button>
        )}
      </div>
    )
  }

  return (
    <form className="comments__form" onSubmit={handleSubmit}>
      <div className="comments__row">
        <ContactInput
          label="Full name"
          icon={<User size={15} />}
          placeholder="Enter full name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          autoFocus={autoFocus}
        />

        <ContactInput
          label="Email address"
          icon={<AtSign size={15} />}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {config.allowUrls && (
        <input
          className="comments__input"
          type="url"
          placeholder="Site (opcional)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      )}

      <ContactTextarea
        label="Message"
        icon={<Mail size={15} />}
        placeholder={
          parentId ? "Escreve a tua resposta..." : "Partilha o que pensas..."
        }
        rows={parentId ? 3 : 4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {config.signUpMessage && (
        <label className="comments__checkbox">
          <input
            type="checkbox"
            checked={allowEmailUsage}
            onChange={(e) => setAllowEmailUsage(e.target.checked)}
          />
          <span>{config.signUpMessage}</span>
        </label>
      )}

      {error && <p className="comments__error">{error}</p>}

      <Button disabled={submitting} className="submit-btn">
        {submitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          <React.Fragment>
            Send message
            <Send className="submit-icon" />
          </React.Fragment>
        )}
      </Button>
    </form>
  )
}
