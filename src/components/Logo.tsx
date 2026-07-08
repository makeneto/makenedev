import { useTheme } from "next-themes"
import { NavLink } from "react-router-dom"

interface LogoProps {
  variant: "nav" | "footer"
}

export default function Logo({ variant }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const isLightTheme = resolvedTheme === "light"

  return (
    <NavLink
      to="/"
      prefetch="intent"
      aria-label="Makenedev's Logo"
      className="logo"
    >
      <img
        src={
          isLightTheme
            ? "/assets/makenedev-light-logo.png"
            : "/assets/makenedev-dark-logo.png"
        }
        alt="Makenedev's Logo"
        className={variant === "nav" ? "w-8 sm:w-10" : "w-12 m-auto sm:m-0"}
      />
    </NavLink>
  )
}
