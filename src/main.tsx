import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"

import "./css/style.css"
import "./css/index.css"

import { Toaster } from "../src/components/ui/sonner.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>

    <Toaster />
  </StrictMode>,
)
