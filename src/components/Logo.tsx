"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

interface LogoProps {
  variant: "nav" | "footer"
}

export default function Logo({ variant }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const isLightTheme = resolvedTheme === "light"

  return (
    <Link href="/" aria-label="Makenedev's Logo" className="logo">
      <img
        src={
          isLightTheme
            ? "/assets/makenedev-light-logo.png"
            : "/assets/makenedev-dark-logo.png"
        }
        alt="Makenedev's Logo"
        className={variant === "nav" ? "w-8 sm:w-10" : "w-12 m-auto sm:m-0"}
      />
    </Link>
  )
}
