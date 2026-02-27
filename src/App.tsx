import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoadingPage from "./components/LoadingPage"

const Home = lazy(() => import("./pages/Home"))

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
