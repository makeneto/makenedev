import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

import { BlogPost } from "@/services/wisp";
import { formatLongDate } from "@/utils/formatDate";

export default function BlogRow({ post }: { post: BlogPost }) {
  const { slug, title, publishedAt, createdAt } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group verticalBlogs__item"
      aria-label={`Read more about ${title}`}
    >
      <FileText
        className="verticalBlogs__item--fileTextIcon h-12 w-12"
        strokeWidth={1}
      />

      <article>
        <div>
          <h2 className="line-clamp-2">{title}</h2>
          <p>{formatLongDate(publishedAt || createdAt)}</p>
        </div>

        <ArrowRight className="hidden sm:block opacity-0 transition-opacity group-hover:opacity-100 mr-2" />
      </article>
    </Link>
  );
}
