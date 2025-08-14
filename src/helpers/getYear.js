export function getYear(dateString) {
    const date = new Date(dateString);
    return isNaN(date.getFullYear()) ? dateString : date.getFullYear();
}