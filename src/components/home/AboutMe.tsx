import Image from "next/image"

import { site } from "@/constants/site"

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
          <p className="weak-text">Software Engineer</p>
        </div>
      </div>

      <div className="grid gap-4">
        <p className="description--medium">
          Not every path needs a title. Some progress happens in silence through
          iteration.
        </p>
        <p className="description--medium">
          Not every path needs a title. Some progress happens in .
        </p>
      </div>
    </header>
  )
}
