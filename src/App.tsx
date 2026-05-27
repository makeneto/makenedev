import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Work = lazy(() => import("./pages/Work"))
const Contact = lazy(() => import("./pages/Contact"))
const Story = lazy(() => import("./pages/Story"))

export default function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  )
}
