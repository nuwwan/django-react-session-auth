import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/auth/AuthProvider'
import { LoginApi } from '../../services/api/AuthApi.s'

const Login: React.FC = props => {
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    LoginApi(username, password)
      .then(success => {
        console.log('nuwan', success)
        setIsAuthenticated(true)
        navigate('/user')
      })
      .catch(error => {
        console.log('nuwan', error)
      })
  }

  return (
    <div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login
