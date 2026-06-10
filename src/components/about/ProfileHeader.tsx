import { BadgeCheck } from "lucide-react"
import { profile } from "../../data/profile"

export default function ProfileHeader() {
  const { name, title } = profile

  return (
    <section className="profile__header">
      <div className="flex items-center gap-1.5">
        <h1 className="profile__header--name">{name}</h1>
        <BadgeCheck size={17} className="fill-blue-500 text-black" />
      </div>
      <p className="profile__header--title">{title}</p>
    </section>
  )
}
