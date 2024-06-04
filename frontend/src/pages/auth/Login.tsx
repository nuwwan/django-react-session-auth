import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/auth/AuthProvider'
import { LoginApi } from '../../services/api/AuthApi.s'

const Login: React.FC = props => {
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page getting refreshed
    event.preventDefault();
    LoginApi(username, password)
      .then(success => {
        console.log('user loged in successfully', success)
        setIsAuthenticated(true)
        navigate('/user')
      })
      .catch(error => {
        console.log('Error login user', error)
      })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
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
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login
