import { site } from "@/constants/site"
import { BlogArticle } from "@/services/wisp"

type ArticleJsonLdProps = {
  post: BlogArticle
  type?: "blog" | "work"
}

export function ArticleJsonLd({ post, type = "blog" }: ArticleJsonLdProps) {
  const { title, description, image, publishedAt, updatedAt } = post

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    ...(image && { image }),
    datePublished: publishedAt,
    ...(updatedAt && { dateModified: updatedAt }),
    author: {
      "@type": "Person",
      name: site.dev,
    },
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
