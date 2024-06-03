import { AuthProvider } from './services/auth/AuthProvider';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
