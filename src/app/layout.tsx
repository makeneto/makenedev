import type { Metadata } from "next"

import "@/css/style.css"
import "@/css/index.css"

import Providers from "@/components/Providers"
import SiteShell from "@/components/SiteShell"

export const metadata: Metadata = {
  title: {
    default: "Makene Neto",
    template: "%s | Makene Neto",
  },
  description:
    "Makene Neto — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.",
  keywords: [
    "Makene Neto",
    "Makene",
    "Makita",
    "Makenedev",
    "Neto",
    "Desenvolvimento",
    "Web",
    "Software",
    "Portfolio",
    "Engineer",
    "Software Engineer",
    "Frontend",
    "Backend",
    "Fullstack",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "AI",
  ],
  authors: [{ name: "Makene Neto", url: "https://makenedev.com" }],
  openGraph: {
    title: "Makene Neto",
    description:
      "Makene Neto — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.",
    images: ["https://i.postimg.cc/J7SXXCzR/makenedev.png"],
    url: "https://i.postimg.cc/J7SXXCzR/makenedev.png",
  },
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
  },
}

const themeScript = `
(function () {
  try {
    const theme = localStorage.getItem("theme")
    const isDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  } catch (e) {}
})()
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  )
}
