import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import SubNav from "./components/SubNav"

export default function Layout() {

    return (
        <>
            <NavBar />
            <SubNav />
            <Outlet />
        </>
    )
}
