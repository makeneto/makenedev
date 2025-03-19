import styled from "styled-components"

import ClientWrapper from "./ClientWrapper"
import NavFeatures from "./NavFeatures"
import SubNav from "./SubNav"
import Footer from "./Footer"
import GlobalStyles from "../css/globalStyles"
import ScrollTop from "./ui/ScrollTop"

const Main = styled.main`
    border-radius: 0 0 30rem 30rem;
`


export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <NavFeatures />
            <SubNav />

            <ClientWrapper>
                <Main>
                    {children}
                </Main>
                <Footer />
            </ClientWrapper>

            <ScrollTop />
        </>
    )
}