import { navLinks } from "@/data/links"
import Logo from "../logo"
import ThemeToggle from "@/components/ui/theme-toggle"
import NavRoutes from "./nav-routes"
import SocialLinks from "./social-links"

export default function Navbar() {
  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex items-center gap-4 sm:gap-5">
        <Logo />
        <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />
        <NavRoutes links={navLinks} />
      </div>

      <div className="flex items-center">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </nav>
  )
}
