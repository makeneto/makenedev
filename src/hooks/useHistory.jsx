import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function useHistory() {
    const [isVisible, setIsVisible] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 840 })

    useEffect(() => {
        if (isMobile) {
            setIsVisible(true)
            return
        }

        const handleScroll = () => {
            const element = document.getElementById("history-text")
            if (element) {
                const rect = element.getBoundingClientRect()
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setIsVisible(true)
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isMobile])

    return isVisible
}
