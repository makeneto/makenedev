import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function usePageLocation() {
    const [isLoaded, setIsLoaded] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "")
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }
    }, [location])

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 500)
    }, [])

    return { isLoaded, navigate }
}
