import { RiTranslate2 } from "@remixicon/react"
import { navLinks } from "../data/links"
import Logo from "./Logo"
import NavRoutes from "./NavRoutes"
import SocialLinks from "./SocialLinks"

export default function Navbar() {
  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex items-center gap-3 sm:gap-5">
        <Logo variant="nav" />
        <div className="w-px h-7 bg-zinc-700" />
        <NavRoutes links={navLinks} />
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <SocialLinks />
        <div className="w-px h-4 sm:h-5 bg-zinc-700" />
        <RiTranslate2 className="nav--link nav-icon"/>
      </div>
    </nav>
  )
}
