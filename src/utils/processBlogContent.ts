import { Heading } from "@/interfaces/post"
import { slugify } from "@/utils/slugify"

export function processBlogContent(html: string): {
  html: string
  headings: Heading[]
} {
  const headings: Heading[] = []
  let index = 0

  const processedHtml = html.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gi,
    (_match, attrs: string, innerHtml: string) => {
      const text = innerHtml.replace(/<[^>]*>/g, "").trim()
      const id = `${slugify(text)}-${index}`
      index += 1

      headings.push({ id, text })

      const cleanAttrs = attrs.replace(/\sid="[^"]*"/gi, "")
      return `<h2${cleanAttrs} id="${id}">${innerHtml}</h2>`
    },
  )

  return { html: processedHtml, headings }
}
