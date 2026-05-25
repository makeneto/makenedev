import { profile } from "../../data/profile"

export default function ProfileHeader() {
  const { name, title } = profile

  return (
    <section className="profile__header">
      <h1 className="profile__header--name">{name}</h1>
      <p className="profile__header--title">{title}</p>
    </section>
  )
}
