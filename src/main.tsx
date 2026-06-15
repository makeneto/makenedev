import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"

import "./css/style.css"
import "./css/index.css"

import { Toaster } from "../src/components/ui/sonner.tsx"
import Navbar from "./components/navbar/Navbar.tsx"
import Footer from "./components/footer/Footer.tsx"
import ScrollToTop from "./hooks/scrollToTop.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>

    <Toaster />
  </StrictMode>,
)
