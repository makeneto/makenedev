import { useCloseSkills } from '../helpers/showSkills'

export default function useSubNav() {
    const linkedInLink = 'https://linkedin.com/in/makene-neto'
    const makeneResume = 'https://suave-woodwind-741.notion.site/Makene-Neto-1e9c66691455804595b3d0c254a66754'
    const handleCloseSkills = useCloseSkills()

    return { linkedInLink, makeneResume, handleCloseSkills }
}
