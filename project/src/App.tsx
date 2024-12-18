import React from 'react';
import { Calculator } from './components/calculator/Calculator';
import { LoginForm } from './components/auth/LoginForm';
import { useAuth } from './hooks/useAuth';
import { Button } from './components/ui/Button';
import { LogOut } from 'lucide-react';

function App() {
  const { user, error, login, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {user.isAuthenticated ? (
        <div className="w-full max-w-sm">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Calculator</h1>
            <Button 
              variant="secondary"
              onClick={logout}
              className="!h-10 px-4"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          <Calculator />
        </div>
      ) : (
        <LoginForm onLogin={login} error={error} />
      )}
    </div>
  );
}

export default App;