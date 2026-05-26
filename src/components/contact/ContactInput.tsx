import { Input } from "../ui/input"

interface Props extends React.ComponentProps<typeof Input> {
  label: string
  icon?: React.ReactNode
  invalid?: boolean
}

export function ContactInput({
  label,
  icon,
  invalid,
  className = "",
  ...props
}: Props) {
  const borderClass = invalid
    ? "border-red-900 focus-visible:border-red-900"
    : "border-zinc-700 focus-visible:border-white"

  return (
    <div className="contact-form__field">
      <label className="contact-form__label">
        {icon}
        {label}
      </label>

      <Input
        {...props}
        aria-invalid={invalid}
        className={`
          pt-5
          pb-5.5
          px-5
          rounded-full
          border-2
          bg-transparent
          text-white
          placeholder:text-zinc-500
          focus-visible:ring-0
          ${borderClass}
          ${className}
        `}
      />
    </div>
  )
}
