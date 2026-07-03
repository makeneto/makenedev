import Logo from "../Logo"

export default function Gratitude() {
  return (
    <div className="grid justify-center gap-4 sm:justify-start">
      <Logo variant="footer" />

      <p className="footer__gratitude text-center sm:text-left">
        Glade to share my work!
      </p>
    </div>
  )
}
