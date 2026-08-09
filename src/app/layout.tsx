import type { Metadata } from "next"
import {
  Anton,
  Antonio,
  Inter,
  Playfair_Display,
  Roboto,
} from "next/font/google"

import "@/css/style.css"
import "@/css/index.css"

import Providers from "@/components/Providers"
import SiteShell from "@/components/SiteShell"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
})

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-playfair-display",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
})

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
  authors: [{ name: "Makene Neto", url: "https://makenedev.vercel.app" }],
  openGraph: {
    title: "Makene Neto",
    description:
      "Makene Neto — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.",
    images: ["https://i.postimg.cc/J7SXXCzR/makenedev.png"],
    url: "https://i.postimg.cc/J7SXXCzR/makenedev.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${anton.variable} ${antonio.variable} ${playfairDisplay.variable} ${roboto.variable}`}
    >
      <body className={inter.className}>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  )
}
