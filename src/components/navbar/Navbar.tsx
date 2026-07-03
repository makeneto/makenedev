import { navLinks } from "../../data/links"
import Logo from "../Logo"
import SocialLinks from "../SocialLinks"
import NavRoutes from "./NavRoutes"
import ThemeToggle from "../ThemeToggle"
import { useMediaQuery } from "react-responsive"

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex items-center gap-3 sm:gap-5">
        <Logo variant="nav" />
        <div className="w-px h-7 bg-zinc-200 dark:bg-zinc-800" />
        <NavRoutes links={navLinks} />
      </div>

      <div className="flex items-center sm:gap-4">
        <SocialLinks />

        {!isMobile && (
          <>
            <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800" />
            <ThemeToggle />
          </>
        )}
      </div>
    </nav>
  )
}
