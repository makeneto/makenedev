const now = new Date()
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

export const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
})
