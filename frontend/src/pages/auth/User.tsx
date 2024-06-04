import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDetailsAPI, UserLogout } from '../../services/api/AuthApi.s'

type TUser = {
  id: number
  first_name: string
  email: string
}

const User: React.FC = props => {
  const [user, setUser] = useState<TUser | null>()
  const navigate = useNavigate()
  // call backend at the first load to get user details
  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    UserDetailsAPI()
      .then(success => {
        setUser(success.data.data)
        console.log('User details fetched successfully', success)
      })
      .catch(error => {
        console.log('Error when fetching User details', error)
      })
  }

  const logout = () => {
    UserLogout()
      .then(success => {
        console.log('User logout successfully', success)
        // Redirect user to home page
        navigate('/')
      })
      .catch(error => {
        console.log('Error when logout user', error)
      })
  }

  return (
    <div>
      {user && <p>Hello {user.first_name}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default User
