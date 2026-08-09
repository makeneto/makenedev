import { useTheme } from "next-themes"
import Image from "next/image"

export default function Signature() {
  const { resolvedTheme } = useTheme()
  const isLightTheme = resolvedTheme === "light"

  return (
    <Image
      src={
        isLightTheme
          ? "/assets/makenedev-light-signature.webp"
          : "/assets/makenedev-dark-signature.webp"
      }
      alt="Makenedev's signature"
      className="w-20 h-auto m-auto sm:w-32 sm:m-0"
      width={100}
      height={40}
    />
  )
}
