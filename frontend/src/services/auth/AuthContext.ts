import { createContext } from 'react'

type IAuthContext = {
  isAuthenticated: boolean
  setIsAuthenticated: (newState: boolean) => void
}

// Default value for auth cotext
export const initialValue: IAuthContext = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
}

export const AuthContext = createContext<IAuthContext>(initialValue)
