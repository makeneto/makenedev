import { BlogPost, coverImage } from "@/services/wisp"
import Image from "next/image"

export default function ToolCard({ post }: { post: BlogPost }) {
  const { image, title, description } = post

  return (
    <li className="setup-card">
      <Image src={coverImage(image)} alt={title} width={100} height={100} />

      <div className="setup-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}
