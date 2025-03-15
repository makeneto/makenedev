import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const UserProvider = ({ children }) => {
    const [showReadeMe, setShowReadeMe] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [user, setUser] = useState(false)


    return (
        <AppContext.Provider value={{
            showReadeMe, setShowReadeMe,
            showSkills, setShowSkills,
            user, setUser,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const UseUserContext = () => useContext(AppContext)