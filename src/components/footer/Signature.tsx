import { useTheme } from "next-themes"

export default function Signature() {
  const { resolvedTheme } = useTheme()
  const isLightTheme = resolvedTheme === "light"

  return (
    <img
      src={
        isLightTheme
          ? "/assets/makenedev-light-signature.png"
          : "/assets/makenedev-dark-signature.png"
      }
      alt="Makenedev's signature"
      className="w-20 h-auto m-auto sm:w-32 sm:m-0"
    />
  )
}
