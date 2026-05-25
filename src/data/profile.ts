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
        "Develop web and mobile applications with React Native, Next.js and more, delivering complete solutions for worldwide clients.",
      period: "2025 - Present",
    },
    {
      company: "Ourivesaria Luciano B.",
      role: "Frontend Developer",
      description:
        "Build modern responsive interfaces using React, TypeScript, and TailwindCSS, focusing on high-impact UX/UI.",
      period: "2023 - 2025",
    },
    {
      company: "Techwave Solutions",
      role: "Web Development Intern",
      description:
        "Developed reusable and responsive components using React and Styled-components, accelerating internal project development.",
      period: "2022 - 2023",
    },
  ],
}
