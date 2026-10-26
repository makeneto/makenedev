import Image from "next/image"

import { site } from "@/constants/site"
import { roles } from "@/data/roles"
import RotatingRoles from "../../ui/rotating/rotating-roles"
import AboutDescription from "./about-description"

export default function AboutMe() {
  return (
    <header className="grid gap-6 mb-8">
      <div className="flex items-center gap-4">
        <Image
          src={`${site.github}.png`}
          alt={`${site.dev} profile photo`}
          width={64}
          height={64}
          className="size-16 rounded-full object-cover"
          priority
        />
        <div>
          <h1 className="text-xl font-semibold">{site.dev}</h1>
          <RotatingRoles roles={roles} className="weak-text" />
        </div>
      </div>

      <AboutDescription />
    </header>
  )
}
