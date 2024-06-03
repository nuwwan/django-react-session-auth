import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../services/auth/AuthProvider"

const Login: React.FC = (props) => {
    const { isAuthenticated, setIsAuthenticated } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        console.log("nuwa")
        setIsAuthenticated(true)
        navigate('/user')
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login