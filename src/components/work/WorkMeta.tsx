import React from "react"
import Image from "next/image"
import Link from "next/link"

import { site } from "@/constants/site"

export function WorkMeta() {
  return (
    <React.Fragment>
      <div>
        <p>Contributors</p>

        <Link href="/about" className="flex items-center gap-2">
          <Image
            src={`${site.github}.png`}
            alt="Makene's profile"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>{site.dev}</p>
        </Link>
      </div>
    </React.Fragment>
  )
}
