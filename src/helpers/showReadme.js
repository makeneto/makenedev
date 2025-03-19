import { UseUserContext } from "../context/UserContext"

export const useCloseReadme = () => {
    const { showReadeMe, setShowReadeMe } = UseUserContext()

    function handleCloseReadme() {
        setShowReadeMe(!showReadeMe)
    }

    return handleCloseReadme
}