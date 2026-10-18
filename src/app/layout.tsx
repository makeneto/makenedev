import type { Metadata } from "next"
import { Inter } from "next/font/google"

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

export const metadata: Metadata = {
  title: site.dev,
  description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
  keywords: [
    site.dev,
    "Makene",
    "Makene Neto",
    "Makenedev",
    "Desenvolvimento",
    "Software",
    "Portfolio",
    "software Engineer",
    "Frontend",
  ],
  authors: [{ name: site.dev, url: site.url }],
  openGraph: {
    title: site.dev,
    description: `${site.dev} — Software Engineer. Minimalist portfolio showcasing projects, experiences, and what motivates me as a software engineer.`,
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
    <html lang="en-US" suppressHydrationWarning className={inter.variable}>
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
