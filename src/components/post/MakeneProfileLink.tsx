import Link from "next/link"
import Image from "next/image"

import { Button } from "../ui/button"
import { site } from "@/constants/site"

export default function MakeneProfileLink() {
  return (
    <Link href="/about" className="flex items-center gap-2">
      <Button variant="link" className="btn--link p-0">
        <Image
          src={`${site.github}.png`}
          alt="Makene's profile"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p>{site.dev}</p>
      </Button>
    </Link>
  )
}
