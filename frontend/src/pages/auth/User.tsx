
import React, { useEffect, useState } from "react"
import { UserDetailsAPI1, UserLogout } from "../../services/api/AuthApi.s"

type TUser = {
    id: number;
    first_name: string;
    email: string;
}

const User: React.FC = (props) => {
    const [user, setUser] = useState<TUser | null>()
    // call backend at the first load to get user details
    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        UserDetailsAPI1().then((success) => {
            setUser(success.data.data)
            console.log('nuwan', success)
        }).catch((error) => {
            console.log('nuwan', error)
        })
    }

    const logout = () => {
        UserLogout().then((success) => {
            console.log('nuwan', success)
        }).catch((error) => {
            console.log('nuwan', error)
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