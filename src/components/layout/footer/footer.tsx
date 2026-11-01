import { usePathname } from "next/navigation"
import FooterLinks from "./footer-links"
import Signature from "./signature"

export default function Footer() {
  const pathname = usePathname()

  const linkPage = pathname !== "/links"

  return (
    <footer className="pb-4 mt-32">
      <Signature />
      {linkPage && <FooterLinks />}
    </footer>
  )
}
