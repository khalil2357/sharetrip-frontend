'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Plane, Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const success = login(email, password, role);
      if (success) {
        router.push(role === 'admin' ? '/admin' : '/dashboard');
      } else {
        setError('Login failed. Please try again.');
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex pt-16">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: (i * 17) % 200 + 50, height: (i * 23) % 200 + 50, left: `${(i * 31) % 100}%`, top: `${(i * 37) % 100}%`, opacity: ((i * 41) % 30) / 100 }}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Plane size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-black mb-4 text-center">Welcome Back,<br />Explorer!</h1>
          <p className="text-blue-200 text-center text-lg max-w-xs">
            Sign in to manage your bookings, access exclusive deals and much more.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 w-full max-w-sm">
            {[
              { label: '50K+', sub: 'Happy Travelers' },
              { label: '200+', sub: 'Destinations' },
              { label: '4.9★', sub: 'Avg Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-white/10 rounded-xl p-4">
                <p className="text-2xl font-black">{stat.label}</p>
                <p className="text-blue-200 text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Plane size={20} className="text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-900">Sky<span className="text-blue-600">Route</span></span>
            </Link>
            <h2 className="text-2xl font-black text-gray-900">Sign in to your account</h2>
            <p className="text-gray-500 text-sm mt-1">Enter your credentials to continue</p>
          </div>

          {/* Role Selector */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl mb-6">
            {(['user', 'admin'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${role === r ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {r === 'user' ? 'User Login' : 'Admin Login'}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === 'admin' ? 'admin@skyroute.com' : 'your@email.com'}
                  className="w-full pl-10 pr-4 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-11 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded accent-blue-600" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-600 hover:underline font-medium">Forgot password?</Link>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl border border-red-100">
                {error}
              </motion.div>
            )}

            <Button type="submit" className="w-full h-12 text-base" disabled={loading}>
              {loading ? 'Signing in...' : (
                <><span>Sign In</span><ArrowRight size={16} /></>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-600 font-semibold hover:underline">Create one free</Link>
          </p>

          <div className="mt-4 p-3 bg-blue-50 rounded-xl text-xs text-blue-600 text-center">
            <strong>Demo:</strong> Enter any email & password to log in as {role}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
