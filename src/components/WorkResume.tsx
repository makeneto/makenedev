import { Link } from "react-router-dom"
import ResumeFrame from "./ResumeFrame"

export default function WorkResume() {
  return (
    <ResumeFrame>
      <p className="description--medium">
        Whether it’s building interfaces, experimenting with ideas, or crafting
        smooth user experiences, I’m always focused on creating things that feel
        intentional and genuinely enjoyable to use. I like blending creativity
        with engineering to turn concepts into something real and memorable.
      </p>

      <p className="description--medium">
        If you’d like to collaborate, build something together, or simply
        connect, feel free to{" "}
        <Link to="/contact" className="hover:text-white underline">
          get in touch
        </Link>
        . I’m always open to ambitious ideas, creative people, and projects that
        push beyond the ordinary.
      </p>
    </ResumeFrame>
  )
}
