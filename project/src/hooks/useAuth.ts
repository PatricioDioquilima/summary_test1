import { useState } from 'react';
import { User, LoginFormData } from '../types/auth';

export function useAuth() {
  const [user, setUser] = useState<User>({ username: '', isAuthenticated: false });
  const [error, setError] = useState<string>('');

  const login = async (data: LoginFormData) => {
    
    if (data.username === 'adminUce' && data.password === 'password') {
      setUser({ username: data.username, isAuthenticated: true });
      setError('');
      return true;
    }
    setError('Invalid credentials');
    return false;
  };

  const logout = () => {
    setUser({ username: '', isAuthenticated: false });
  };

  return { user, error, login, logout };
}