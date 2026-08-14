import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import { RiArrowRightSLine } from "@remixicon/react"
import { CalendarDays, Code2, ExternalLink } from "lucide-react"

import { BlogArticle } from "@/services/wisp"
import { Button } from "../ui/button"
import { site } from "@/constants/site"
import { formatLongDate } from "@/utils/formatDate"

interface PostHeaderProps {
  post: BlogArticle
  variant: "blog" | "work"
}

export default function PostHeader({ post, variant }: PostHeaderProps) {
  const isMobile = useMediaQuery({ maxWidth: 884 })

  const { publishedAt, createdAt, slug } = post
  const date = publishedAt || createdAt

  return (
    <header className="grid gap-5 sm:gap-5">
      <div className="text-sm gap-2 flex items-center justify-between">
        {isMobile ? (
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
        ) : (
          <span className="flex items-center gap-1">
            <Link href="/blog">
              {variant === "blog" ? "Blog" : variant === "work" ? "Work" : ""}
            </Link>{" "}
            <RiArrowRightSLine size={16} />{" "}
            <h1 className="line weak-text">{post.title}</h1>
          </span>
        )}

        <span className="weak-text flex items-center gap-2">
          <CalendarDays size={14} /> {date ? formatLongDate(date) : "No data"}
        </span>
      </div>

      <div className="post-intro">
        <h1>{post.title}</h1>

        {variant === "work" && (
          <div className="flex items-center justify-between">
            <Button variant="ghost">
              <Link href="#" className="flex items-center gap-2 weak-hover">
                <ExternalLink size={16} strokeWidth={1.8} />
                Live Demo
              </Link>
            </Button>

            <Button variant="ghost">
              <Link
                href={`${site.github}/${slug}`}
                className="flex items-center gap-2 weak-text weak-hover"
              >
                <Code2 size={16} strokeWidth={1.8} />
                Source Code
              </Link>
            </Button>
          </div>
        )}

        <p
          className={`sm:text-[1.04rem] xl:text-[1.2rem] ${variant === "blog" ? "mt-[1.6rem]" : "mt-9"}`}
        >
          {post.description}
        </p>
      </div>
    </header>
  )
}
