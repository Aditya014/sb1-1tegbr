import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Cpu, Mail, Lock, Github, Chrome, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="auth-container neon-border">
        <Link to="/" className="absolute top-6 right-6 text-[var(--primary)] hover:text-[var(--primary-dark)]">
          <X className="h-6 w-6" />
        </Link>

        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 transform rotate-45 bg-[var(--surface)] neon-border flex items-center justify-center">
            <Cpu className="h-12 w-12 text-[var(--primary)] transform -rotate-45" />
          </div>
          <h1 className="text-4xl font-bold neon-text mb-4">Access Terminal</h1>
          <p className="text-[var(--primary)] opacity-70">Initialize authentication sequence</p>
        </div>

        <div className="flex justify-center space-x-16 mb-12">
          <button
            onClick={() => setIsLogin(true)}
            className={`text-xl pb-2 ${isLogin ? 'neon-text border-b-2 border-[var(--primary)]' : 'text-[var(--primary)] opacity-50'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-xl pb-2 ${!isLogin ? 'neon-text border-b-2 border-[var(--primary)]' : 'text-[var(--primary)] opacity-50'}`}
          >
            Register
          </button>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg mb-2 opacity-70">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cyber-input pl-12"
                placeholder="NAME@EXAMPLE.COM"
                required
              />
              <Mail className="absolute left-4 top-4 h-5 w-5 text-[var(--primary)]" />
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2 opacity-70">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cyber-input pl-12"
                placeholder="••••••••"
                required
                minLength={6}
              />
              <Lock className="absolute left-4 top-4 h-5 w-5 text-[var(--primary)]" />
            </div>
          </div>

          <button
            type="submit"
            className="cyber-button w-full py-4 text-xl mt-8 neon-text disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin h-6 w-6 mr-2" />
                Initializing...
              </span>
            ) : (
              `Initialize ${isLogin ? 'Login' : 'Registration'} →`
            )}
          </button>
        </form>

        <div className="mt-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border)]"></div>
            </div>
            <div className="relative flex justify-center text-lg">
              <span className="px-4 bg-[var(--surface)] text-[var(--primary)] opacity-70">
                External Access Points
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <button 
              className="cyber-button flex items-center justify-center py-4"
              onClick={() => setError('External authentication coming soon')}
            >
              <Github className="h-5 w-5 mr-3" />
              Github
            </button>
            <button 
              className="cyber-button flex items-center justify-center py-4"
              onClick={() => setError('External authentication coming soon')}
            >
              <Chrome className="h-5 w-5 mr-3" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};