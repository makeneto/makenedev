import { cn } from "@/lib/utils"

interface HeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({
  title,
  description,
  className
}: HeaderProps) {
  return (
    <header className={cn("grid gap-2 mb-20", className)}>
      <h1
        className="m-0 whitespace-nowrap text-[1.6rem] lowercase italic leading-none tracking-[-0.01em] text-(--text-primary)"
        style={{ fontFamily: '"Instrument Serif", serif' }}
      >
        {title}.
      </h1>
      {description && <p className="weak-text text-[0.96rem]">{description}</p>}
    </header>
  )
}
