import Image from "next/image"

import { site } from "@/constants/site"
import { getYearsLabel } from "@/utils/getYearsOfExperience"

export default function AboutMe() {
  const years = getYearsLabel()

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
          <p className="weak-text">Software Engineer</p>
        </div>
      </div>

      <div className="grid gap-4">
        <p className="text-(--text-secondary)">
          I’m a software engineer with over {years} years of experience, turning
          ideas into digital products built to last.
        </p>
        <p className="text-(--text-secondary)">
          I care about the things most people overlook: the decisions behind the
          interface, the precision behind the code, and the details that turn
          something functional into something exceptional. I build with purpose,
          refine with intention, and believe the best work speaks for itself.
        </p>
      </div>
    </header>
  )
}
