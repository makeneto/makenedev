"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Signature() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLightTheme = resolvedTheme === "light"

  return (
    <Image
      src={
        isLightTheme
          ? "/assets/makenedev-light-signature.webp"
          : "/assets/makenedev-dark-signature.webp"
      }
      alt="Makenedev's signature"
      className="m-auto h-auto w-20 sm:m-0 sm:w-32"
      width={100}
      height={40}
    />
  )
}
