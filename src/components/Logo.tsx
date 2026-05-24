import { NavLink } from "react-router-dom"

export default function Logo() {
  return (
    <NavLink to="/" prefetch="intent">
      <img
        src="/assets/makenedev-logo.png"
        alt="Makenedev's Logo"
        className="w-12"
      />
    </NavLink>
  )
}
