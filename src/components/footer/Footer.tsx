import FooterLinks from "./footer-links"
import Signature from "./signature"

export default function Footer() {
  return (
    <footer className="pb-4 mt-32">
      <Signature />
      <FooterLinks />
    </footer>
  )
}
