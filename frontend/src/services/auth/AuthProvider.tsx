import React, { useContext, useState, createContext, ReactNode } from "react";
import { AuthContext, initialValue } from "./AuthContext";

type AuthProviderPropType = {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderPropType) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialValue.isAuthenticated)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};