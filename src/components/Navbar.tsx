import { navLinks } from "../data/links"
import Logo from "./Logo"
import NavRoutes from "./NavRoutes"
import SocialLinks from "./SocialLinks"

export default function Navbar() {
  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Logo />
        <div className="w-px h-7 bg-zinc-700" />
        <NavRoutes links={navLinks} />
      </div>

      <SocialLinks />
    </nav>
  )
}
