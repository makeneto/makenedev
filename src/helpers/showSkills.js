import { UseUserContext } from "../context/UserContext"

export const useCloseSkills = () => {
    const { showSkills, setShowSkills } = UseUserContext()

    function handleCloseSkills() {
        setShowSkills(!showSkills)
    }

    return handleCloseSkills
}