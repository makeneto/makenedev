import { Textarea } from "../ui/textarea"

interface Props extends React.ComponentProps<typeof Textarea> {
  label: string
  icon?: React.ReactNode
  invalid?: boolean
}

export function ContactTextarea({
  label,
  icon,
  invalid,
  className = "",
  ...props
}: Props) {
  return (
    <div className="contact-form__field">
      <label className="contact-form__label">
        {icon}
        {label}
      </label>

      <Textarea
        {...props}
        aria-invalid={invalid}
        className={`min-h-42 max-h-60 pt-5 pb-5.5 px-5 rounded-3xl border-2 bg-transparent text-white placeholder:text-zinc-500 focus-visible:ring-0 ${
          invalid
            ? "border-red-500 focus-visible:border-red-500"
            : "border-zinc-700 focus-visible:border-white"
        } ${className}`}
      />
    </div>
  )
}
