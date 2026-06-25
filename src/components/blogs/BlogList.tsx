import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"

export default function BlogList() {
  return (
    <ul className="blog-list">
      <Link to="/blogs">
        <div>
          <p>Jul 2026</p>
          <h1>Building in Public, and the Fear of Being Seen</h1>
        </div>

        <ExternalLink />
      </Link>

      <Link to="/blogs">
        <div>
          <p>Apr 2026</p>
          <h1>AI Agents Won’t Replace You. But They Will Expose You.</h1>
        </div>

        <ExternalLink />
      </Link>

      <Link to="/blogs">
        <div>
          <p>Jan 2026</p>
          <h1>AI Agents Won’t Replace You. But They Will Expose You.</h1>
        </div>

        <ExternalLink />
      </Link>
    </ul>
  )
}
