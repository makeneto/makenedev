import { useRef, useState } from "react"

export function useCarousel(totalSlides) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hovered, setHovered] = useState(false)

    const startX = useRef(null)
    const isDragging = useRef(false)

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    const nextSlide = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX
        isDragging.current = true
    }

    const handleMouseDown = (e) => {
        startX.current = e.clientX
        isDragging.current = true
    }

    const handleTouchEnd = (e) => {
        if (!isDragging.current) return
        const diff = e.changedTouches[0].clientX - startX.current
        handleSwipe(diff)
        isDragging.current = false
    }

    const handleMouseUp = (e) => {
        if (!isDragging.current) return
        const diff = e.clientX - startX.current
        handleSwipe(diff)
        isDragging.current = false
    }

    const handleSwipe = (diff) => {
        const swipeThreshold = 50
        if (diff > swipeThreshold) {
            prevSlide()
        } else if (diff < -swipeThreshold) {
            nextSlide()
        }
    }

    return {
        currentIndex,
        setCurrentIndex,
        hovered,
        setHovered,
        prevSlide,
        nextSlide,
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    }
}
