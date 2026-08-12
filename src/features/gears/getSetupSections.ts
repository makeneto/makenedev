import { getGearsHomeData } from "@/features/gears/wispGears"
import { SetupSection } from "@/interfaces/gears"

const TAG_OVERRIDES: Record<string, string> = {}

function formatTagName(tag: string): string {
  if (TAG_OVERRIDES[tag]) return TAG_OVERRIDES[tag]

  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const SECTION_ORDER: string[] = ["daily-tool", "desk-setup"]

function sortSections(sections: SetupSection[]): SetupSection[] {
  return [...sections].sort((a, b) => {
    const indexA = SECTION_ORDER.indexOf(a.id)
    const indexB = SECTION_ORDER.indexOf(b.id)

    const rankA = indexA === -1 ? SECTION_ORDER.length : indexA
    const rankB = indexB === -1 ? SECTION_ORDER.length : indexB

    if (rankA !== rankB) return rankA - rankB

    return a.title.localeCompare(b.title)
  })
}

export async function getSetupSections(): Promise<SetupSection[]> {
  const { posts } = await getGearsHomeData()

  const sectionsMap = new Map<string, SetupSection>()

  for (const post of posts) {
    const tags = post.tags ?? []

    for (const tag of tags) {
      const tagSlug = typeof tag === "string" ? tag : tag.name

      if (!sectionsMap.has(tagSlug)) {
        sectionsMap.set(tagSlug, {
          id: tagSlug,
          title: formatTagName(tagSlug),
          tools: [],
        })
      }

      sectionsMap.get(tagSlug)!.tools.push(post)
    }
  }

  return sortSections(Array.from(sectionsMap.values()))
}

export function getSectionById(sections: SetupSection[], id: string) {
  return sections.find((s) => s.id === id)
}
