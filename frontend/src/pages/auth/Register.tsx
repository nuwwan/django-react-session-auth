import { useState } from 'react'
import { TRegisterUser } from '../../types/auth.t'
import { UserRegister } from '../../services/api/AuthApi.s'

const Register: React.FC = props => {
  const [formData, setFormData] = useState<TRegisterUser>({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the page getting refreshed
    event.preventDefault()

    // Subit the data to the backend
    if (
      formData.email &&
      formData.password &&
      formData.firstname &&
      formData.lastname
    ) {
      UserRegister(formData)
        .then(success => {
          console.log('user register success', success)
        })
        .catch(error => {
          console.log('error user register', error)
        })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={handleInputChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" onChange={handleInputChange} />
        </div>
        <div>
          <label>First Name</label>
          <input type="text" name="firstname" onChange={handleInputChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastname" onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Register
