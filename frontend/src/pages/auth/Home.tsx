import { useNavigate } from 'react-router-dom'

const Home: React.FC = props => {
  const navigate = useNavigate()
  return (
    <div>
      Home
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
      <button onClick={() => navigate('/user')}>User Page</button>
    </div>
  )
}
export default Home
