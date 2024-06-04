import { AuthProvider } from './services/auth/AuthProvider';
import Routes from './Routes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setupResponseInterceptors } from './services/api/BaseApi.s';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setupResponseInterceptors(navigate);
  }, [navigate]);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
