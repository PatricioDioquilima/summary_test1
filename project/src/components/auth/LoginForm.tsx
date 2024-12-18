import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { LoginFormData } from '../../types/auth';

interface LoginFormProps {
  onLogin: (data: LoginFormData) => Promise<boolean>;
  error?: string;
}

export function LoginForm({ onLogin, error }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(formData);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Login to Calculator
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <Input
            label="Username"
            type="text"
            value={formData.username}
            onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
            placeholder="Enter your username"
            required
          />
          <User className="absolute right-3 top-9 h-5 w-5 text-gray-400" />
        </div>

        <div className="relative">
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            placeholder="Enter your password"
            required
          />
          <Lock className="absolute right-3 top-9 h-5 w-5 text-gray-400" />
        </div>

        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}

        <Button type="submit" variant="primary" fullWidth>
          Login
        </Button>
      </form>
      
      <p className="mt-4 text-sm text-gray-600 text-center">
        Demo credentials: adminUce / password
      </p>
    </div>
  );
}