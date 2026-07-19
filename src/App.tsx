import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import useRoutes from "./hooks/useRoutes"

export default function App() {
  const { Home, About, Work, Stack, Setup, Blog, Layouts, Contact } =
    useRoutes()

  return (
    <Suspense fallback={<LoadingPage />}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}
