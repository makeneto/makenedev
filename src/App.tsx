import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Work = lazy(() => import("./pages/Work"))
const Stack = lazy(() => import("./pages/Stack"))
const Setup = lazy(() => import("./pages/Setup"))
const Blog = lazy(() => import("./pages/Blog"))
const Contact = lazy(() => import("./pages/Contact"))

export default function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}
