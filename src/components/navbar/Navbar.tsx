import { navLinks } from "@/data/links"
import Logo from "../Logo"
import ThemeToggle from "../ui/ThemeToggle"
import NavRoutes from "./NavRoutes"
import SocialLinks from "./SocialLinks"

export default function Navbar() {
  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex items-center gap-4 sm:gap-5">
        <Logo variant="nav" />
        <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />
        <NavRoutes links={navLinks} />
      </div>

      <div className="flex items-center">
        <SocialLinks />

        <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />
        <ThemeToggle />
      </div>
    </nav>
  )
}
