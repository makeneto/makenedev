import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./css/style.css"
import "./css/index.css"

import App from "./App.tsx"
import { Toaster } from "../src/components/ui/sonner.tsx"
import Navbar from "./components/navbar/Navbar.tsx"
import Footer from "./components/footer/Footer.tsx"
import ScrollToTop from "./hooks/scrollToTop.ts"
import ThemeProvider from "./components/ThemeProvider.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <App />
          <Footer />
        </BrowserRouter>

        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
