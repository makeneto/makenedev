import { NavLink } from "react-router-dom"

interface LinkProps {
  label: string
  link: string
}

interface NavRoutesProps {
  links: LinkProps[]
}

export default function NavRoutes({ links }: NavRoutesProps) {
  return (
    <section className="flex items-center gap-5">
      {links.map((link) => (
        <NavLink
          key={link.link}
          to={link.link}
          prefetch="intent"
          className={({ isActive }) =>
            isActive ? "nav--activeLink" : "nav--link"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </section>
  )
}
