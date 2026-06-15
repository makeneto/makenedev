import { NavLink } from "react-router-dom"

interface LogoProps {
  variant: "nav" | "footer"
}

export default function Logo({ variant }: LogoProps) {
  return (
    <NavLink to="/" prefetch="intent">
      <img
        src="/assets/makenedev-logo.png"
        alt="Makenedev's Logo"
        className={
          variant === "nav"
            ? "w-8 sm:w-10"
            : "w-12 m-auto sm:m-0"
        }
      />
    </NavLink>
  )
}
