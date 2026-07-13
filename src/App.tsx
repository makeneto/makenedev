import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Work = lazy(() => import("./pages/Work"))
const Stack = lazy(() => import("./pages/Stack"))
const Setup = lazy(() => import("./pages/Setup"))
const Blog = lazy(() => import("./pages/Blog"))
const Contact = lazy(() => import("./pages/Contact"))

export default function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}
