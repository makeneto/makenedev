"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export default function Signature() {
  const { resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  )

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
