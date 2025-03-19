import { useLocation, useNavigate } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll"

export const useScrollToSection = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const handleScrollToSection = (section) => {
        if (location.pathname === '/') {
            scroll.scrollTo(document.getElementById(section).offsetTop - 100, {
                smooth: true,
                duration: 500,
            })
        } else {
            navigate(`/#${section}`, { replace: true })
        }
    }

    return handleScrollToSection
}
