'use client';

import { useAuthStore } from '@/store';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard, Ticket, Heart, Bell, Settings, User, LogOut, ChevronLeft, ChevronRight
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Bookings', href: '/dashboard/bookings', icon: Ticket },
  { label: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
  { label: 'Alerts', href: '/dashboard/notifications', icon: Bell },
  { label: 'Profile', href: '/dashboard/profile', icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar (Hidden on Mobile) */}
      <aside className={`hidden lg:flex flex-col bg-white border-r border-gray-100 flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-5 border-b border-gray-100 h-16 flex items-center justify-between">
          {!isCollapsed && (
            <Link href="/" className="font-bold text-xl text-gray-900">
              Sky<span className="text-blue-600">Route</span>
            </Link>
          )}
          {isCollapsed && (
            <Link href="/" className="font-bold text-xl text-gray-900 mx-auto">
              S<span className="text-blue-600">R</span>
            </Link>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-5 bg-white border border-gray-200 rounded-full p-1 text-gray-500 hover:text-blue-600 z-50 shadow-sm"
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>
        <div className={`p-5 border-b border-gray-100 flex ${isCollapsed ? 'justify-center' : 'items-center gap-3'}`}>
          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-sm flex-shrink-0">
            {user?.name?.slice(0, 2).toUpperCase()}
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="font-bold text-gray-900 truncate text-sm">{user?.name}</p>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'} ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon size={17} className="flex-shrink-0" />
                {!isCollapsed && item.label}
              </Link>
            );
          })}
          <Link href="/dashboard/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${pathname === '/dashboard/settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'} ${isCollapsed ? 'justify-center' : ''}`}
            title={isCollapsed ? 'Settings' : undefined}
          >
            <Settings size={17} className="flex-shrink-0" />
            {!isCollapsed && 'Settings'}
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => { logout(); router.push('/'); }}
            className={`flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            title={isCollapsed ? 'Log Out' : undefined}
          >
            <LogOut size={17} className="flex-shrink-0" /> {!isCollapsed && 'Log Out'}
          </button>
        </div>
      </aside>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation (Visible only on Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around pb-safe z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center justify-center w-full h-full space-y-1">
              <item.icon size={20} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
              <span className={`text-[10px] font-medium ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
