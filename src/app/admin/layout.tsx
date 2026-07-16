'use client';

import { useAuthStore } from '@/store';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard, Users, Plane, Hotel, Package, Globe, CreditCard,
  Ticket, BarChart3, Settings, FileText, LogOut, Tag, Image, HelpCircle, Menu, ChevronLeft, ChevronRight
} from 'lucide-react';

const sidebarNav = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Flights', href: '/admin/flights', icon: Plane },
  { label: 'Hotels', href: '/admin/hotels', icon: Hotel },
  { label: 'Packages', href: '/admin/packages', icon: Package },
  { label: 'Bookings', href: '/admin/bookings', icon: Ticket },
  { label: 'Visa', href: '/admin/visa', icon: Globe },
  { label: 'Payments', href: '/admin/payments', icon: CreditCard },
  { label: 'Coupons', href: '/admin/coupons', icon: Tag },
  { label: 'Blogs', href: '/admin/blogs', icon: FileText },
  { label: 'Banners', href: '/admin/banners', icon: Image },
  { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { label: 'Reports', href: '/admin/reports', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

const mobileNav = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Bookings', href: '/admin/bookings', icon: Ticket },
  { label: 'Payments', href: '/admin/payments', icon: CreditCard },
  { label: 'More', href: '/admin/menu', icon: Menu }, // Opens a full-screen menu or side drawer in mobile
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin, user, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) router.push('/login');
  }, [isAuthenticated, isAdmin, router]);

  if (!isAuthenticated || !isAdmin) return null;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar (Hidden on Mobile) */}
      <aside className={`hidden lg:flex flex-col bg-white border-r border-gray-100 flex-shrink-0 z-40 relative transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-4 border-b border-gray-100 h-16 flex items-center justify-between relative">
          {!isCollapsed && (
            <>
              <Link href="/" className="font-bold text-xl text-gray-900">
                Sky<span className="text-blue-600">Route</span>
              </Link>
              <span className="bg-red-100 text-red-700 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">Admin</span>
            </>
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
        <div className={`p-4 border-b border-gray-100 flex ${isCollapsed ? 'justify-center' : 'items-center gap-2'}`}>
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white text-xs font-black shadow-sm flex-shrink-0">
            A
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm truncate">{user?.name}</p>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
          )}
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {sidebarNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'} ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon size={16} className="flex-shrink-0" />
                {!isCollapsed && item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={() => { logout(); router.push('/'); }}
            className={`flex items-center gap-2 text-sm text-red-600 font-medium hover:bg-red-50 w-full px-3 py-2.5 rounded-xl transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            title={isCollapsed ? 'Log Out' : undefined}
          >
            <LogOut size={15} className="flex-shrink-0" /> {!isCollapsed && 'Log Out'}
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
        {mobileNav.map((item) => {
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
