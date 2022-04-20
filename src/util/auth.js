import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState()

    const login = user => {
        setAuthUser(user)
    }

    const logout = user => {
        setAuthUser(null);
    }

    return (
        <AuthContext.Provider value={{authUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext