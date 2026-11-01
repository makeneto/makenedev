"use client"

import Image from "next/image"

import { site } from "@/constants/site"
import { roles } from "@/data/roles"
import RotatingRoles from "../../ui/rotating/rotating-roles"
import AboutDescription from "./about-description"
import { usePathname } from "next/navigation"
import SocialLinks from "./social-links"

export default function AboutMe() {
  const pathname = usePathname()

  const linkPage = pathname !== "/links"

  return (
    <header
      className={`grid mb-8 ${!linkPage ? "mt-20 sm:mt-32 gap-20" : "gap-6"}`}
    >
      <div
        className={`flex ${!linkPage ? "flex-col items-center gap-4" : "items-center gap-4"} `}
      >
        <Image
          src={`${site.github}.png`}
          alt={`${site.dev} profile photo`}
          width={!linkPage ? 100 : 64}
          height={!linkPage ? 100 : 64}
          className={`${!linkPage ? "size-25" : "size-16"} rounded-full object-cover`}
          priority
        />
        <div>
          <h1
            className={`text-xl font-semibold ${!linkPage ? "text-center" : undefined}`}
          >
            {site.dev}
          </h1>
          <RotatingRoles
            roles={roles}
            className={`weak-text ${!linkPage ? "text-center" : undefined}`}
          />
        </div>

        {!linkPage && <SocialLinks />}
      </div>

      <AboutDescription />
    </header>
  )
}
