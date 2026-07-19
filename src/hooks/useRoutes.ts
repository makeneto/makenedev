import { lazy } from "react"

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Work = lazy(() => import("../pages/Work"))
const Stack = lazy(() => import("../pages/Stack"))
const Setup = lazy(() => import("../pages/Setup"))
const Blog = lazy(() => import("../pages/Blog"))
const Layouts = lazy(() => import("../pages/Layouts"))
const Contact = lazy(() => import("../pages/Contact"))

export default function useRoutes() {
  return { Home, About, Work, Stack, Setup, Blog, Layouts, Contact }
}
