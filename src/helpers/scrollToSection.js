import { useLocation, useNavigate } from "react-router-dom"

export const useScrollToSection = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const handleScrollToSection = (section) => {
        if (location.pathname === "/") {
            const element = document.getElementById(section)
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: "smooth",
                })
            }
        } else {
            navigate(`/#${section}`)
            setTimeout(() => {
                const element = document.getElementById(section)
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth",
                    })
                }
            }, 300)
        }
    }

    return handleScrollToSection
}