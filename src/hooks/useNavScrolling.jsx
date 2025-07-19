import React, { useEffect, useState } from 'react'

export default function useNavScrolling() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop

            setIsScrolled(currentScrollY > 10)

            if (currentScrollY > 500 && currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY = currentScrollY
        };

        setIsVisible(true);

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("touchmove", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("touchmove", handleScroll)
        }
    }, [])

    return {
        isScrolled,
        isVisible
    }
}
