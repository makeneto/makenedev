import type { Metadata } from "next"
import {
  Anton,
  Antonio,
  Inter,
  JetBrains_Mono,
  Playfair_Display,
  Roboto,
} from "next/font/google"

import "@/css/style.css"
import "@/css/index.css"

import Providers from "@/components/Providers"
import SiteShell from "@/components/SiteShell"
import { TooltipProvider } from "@/components/ui/tooltip"
import { site } from "@/constants/site"

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: site.dev,
    template: `%s | ${site.dev}`,
  },
  description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
  keywords: [
    site.dev,
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
  authors: [{ name: site.dev, url: site.url }],
  openGraph: {
    title: site.dev,
    description:
      `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
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
      className={`${inter.variable} ${anton.variable} ${antonio.variable} ${playfairDisplay.variable} ${roboto.variable} ${jetbrainsMono.variable}`}
    >
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <SiteShell>{children}</SiteShell>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
