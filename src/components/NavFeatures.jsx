import styled from "styled-components"

import NavBar from "./NavBar"
import NavDevice from "./NavDevice"
import { useMediaQuery } from "react-responsive"

const Features = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default function NavFeatures() {
    const isComputer = useMediaQuery({ minWidth: 884 })

    return (
        <Features>
            <NavBar />

            {isComputer &&
                <NavDevice />
            }
        </Features>
    )
}