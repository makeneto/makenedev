type Experience = {
  company: string
  role: string
  description: string
  period: string
}

type Profile = {
  name: string
  title: string
  experiences: Experience[]
}

export const profile: Profile = {
  name: "Makene Neto",
  title: "Software Engineer",
  experiences: [
    {
      company: "Freelance",
      role: "Full-Stack Freelancer",
      description:
        "Deliver end-to-end digital products that solve real problems and create value for clients across different contexts and needs.",
      period: "2025 - Present",
    },
    {
      company: "Ourivesaria Luciano B.",
      role: "Frontend Developer",
      description:
        "Designed and developed a complete application from scratch, collaborating closely with the UI/UX team to ensure scalable architecture and strong user experience.",
      period: "2023 - 2025",
    },
    {
      company: "Techwave Solutions",
      role: "Web Development Intern",
      description:
        "Built reusable, responsive components with Next, Sass, Node.js and more, improving speed and consistency in internal development workflows.",
      period: "2022 - 2023",
    },
  ],
}
