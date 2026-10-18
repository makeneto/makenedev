type ExperienceItem = {
  title: string
  description: string
  period: string
}

type Experiences = {
  experiences: ExperienceItem[]
}

export const experiences: Experiences = {
  experiences: [
    {
      title: "Software Engineer, at SCKJ",
      description: "Next.js, TypeScript, Tailwindcss, Neon, Shadcn/ui",
      period: "Aug, 2026 - Out, 2026",
    },
    {
      title: "Full-Stack, at Freelancer",
      description: "Next.js, TypeScript, Tailwindcss, Neon, Shadcn/ui",
      period: "Jul, 2025 - Apr, 2026",
    },
    {
      title: "Frontend Dev., at Luciano B",
      description: "Next.js, TypeScript, Tailwindcss, Neon, Shadcn/ui",
      period: "Jun, 2023 - May, 2025",
    },
  ],
}
