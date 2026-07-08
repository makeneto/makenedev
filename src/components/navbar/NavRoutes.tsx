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
    <section className="flex items-center gap-3 sm:gap-5">
      {links.map((link) => (
        <NavLink
          key={link.link}
          to={link.link}
          prefetch="intent"
          translate={
            link.label === "Stack" || link.label === "Home" ? "no" : "yes"
          }
          className={({ isActive }) =>
            isActive ? "nav--activeLink" : "nav--link"
          }
          aria-label={`Visit ${link.label} page`}
        >
          {link.label}
        </NavLink>
      ))}
    </section>
  )
}
