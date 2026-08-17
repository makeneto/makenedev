import { AdjacentItem, AdjacentItems } from "@/interfaces/post"

interface WispItem {
  slug: string
  title: string
}

type FetchItems<T extends WispItem> = () => Promise<T[]>

export async function getAdjacentItems<T extends WispItem>(
  slug: string,
  fetchItems: FetchItems<T>,
): Promise<AdjacentItems> {
  const items = await fetchItems()
  const index = items.findIndex((item) => item.slug === slug)

  if (index === -1) {
    return { previous: null, next: null }
  }

  const previous = index > 0 ? items[index - 1] : null
  const next = index < items.length - 1 ? items[index + 1] : null

  return {
    previous: previous ? toAdjacentItem(previous) : null,
    next: next ? toAdjacentItem(next) : null,
  }
}

function toAdjacentItem(item: WispItem): AdjacentItem {
  return { slug: item.slug, title: item.title }
}
