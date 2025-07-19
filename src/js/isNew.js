export const isNew = (date) => {
    const now = new Date()
    const certificateDate = new Date(date)
    const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3))
    return certificateDate >= threeMonthsAgo;
}