import confetti from "canvas-confetti"

export const handleConfetti = () => {
    confetti({
        particleCount: 350,
        spread: 150,
        origin: { y: 0.6 },
    })
}
