import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant: "nav" | "footer"
}

export default function Logo({ variant }: LogoProps) {
  const sizeClass = variant === "nav" ? "w-8 sm:w-10" : "w-12 m-auto sm:m-0"

  return (
    <Link href="/" aria-label="Makenedev's Logo" className="logo">
      <Image
        src="/assets/makenedev-dark-logo.png"
        alt="Makenedev's Logo"
        width={160}
        height={40}
        className={`${sizeClass} hidden dark:block`}
        priority
      />
      <Image
        src="/assets/makenedev-light-logo.png"
        alt="Makenedev's Logo"
        width={160}
        height={40}
        className={`${sizeClass} block dark:hidden`}
        priority
      />
    </Link>
  )
}
