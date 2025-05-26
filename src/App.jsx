import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './components/Layout'
import LoadingPage from './components/LoadingPage'
import { UserProvider } from './context/UserContext'

export default function App() {
    const Home = lazy(() => import('./pages/Home'))
    const About = lazy(() => import('./pages/About'))
    const AllProjects = lazy(() => import('./pages/AllProjects'))
    const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <UserProvider>
                    <Layout>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="projects" element={<AllProjects />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Layout>
                </UserProvider>
            </Suspense>
        </BrowserRouter>
    )
}