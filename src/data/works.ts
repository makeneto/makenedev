import type { ShowcaseItem } from "../interfaces/showcase"

export const works: ShowcaseItem[] = [
  {
    id: 108,
    slug: "eminus",
    created_at: "2026-05-10",
    title: "Eminus",
    description:
      "Building better financial habits for families with smarter money management.",
    imageUrl: "/assets/work-cover8.webp",
    link: "https://github.com/makeneto/eminus",
    stacks: [
      "React.js",
      "TypeScript",
      "Tailwindcss",
      "Shadcn/ui",
      "Sass",
      "Recharts",
      "Lucide Icons",
    ],
  },
  {
    id: 102,
    slug: "beats-by-dre",
    created_at: "2025-09-10",
    title: "Beats by Dre",
    description:
      "Exclusive collection of premium headphones with immersive sound.",
    imageUrl: "/assets/work-cover2.webp",
    link: "https://beats-by-dr.vercel.app",
    stacks: ["Next.js", "TypeScript", "Tailwindcss", "Sass", "Lucide Icons"],
  },
  {
    id: 106,
    created_at: "2023-08-10",
    slug: "wigland",
    title: "Wigland",
    description: "Find incredible wigs to enhance your beauty and style.",
    imageUrl: "/assets/work-cover7.webp",
    link: "https://perucalandia.vercel.app",
    stacks: ["HTML5", "CSS3", "JavaScript"],
  },
]
