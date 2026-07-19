"use client"

import type { ReactNode } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      enableColorScheme={true}
      disableTransitionOnChange={true}
      storageKey="theme"
      forcedTheme={undefined}
    >
      {children}
    </NextThemesProvider>
  )
}
