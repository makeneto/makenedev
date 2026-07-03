import type React from "react"

export default function ResumeFrame({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <section className="mt-35 sm:mt-40 grid gap-8">
      <div className="w-[50%] justify-self-end border-b border-[--border-primary]" />
      <div className="grid gap-4">{children}</div>
      <div className="w-[50%] border-b border-[--border-primary]" />
    </section>
  )
}
