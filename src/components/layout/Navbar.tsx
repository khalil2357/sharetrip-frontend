'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plane, Hotel, Shield, ChevronDown, Globe, Bell, Heart,
  LogOut, LayoutDashboard, Menu, X, Ticket, Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore, useWishlistStore } from '@/store';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Flights', href: '/flights', icon: Plane,
    dropdown: [
      { label: 'Search Flights', href: '/flights' },
      { label: 'One Way', href: '/flights?type=oneway' },
      { label: 'Round Trip', href: '/flights?type=roundtrip' },
      { label: 'Multi City', href: '/flights?type=multicity' },
    ],
  },
  {
    label: 'Hotels', href: '/hotels', icon: Hotel,
    dropdown: [
      { label: 'Search Hotels', href: '/hotels' },
      { label: 'Luxury Hotels', href: '/hotels?type=luxury' },
      { label: 'Budget Hotels', href: '/hotels?type=budget' },
    ],
  },
  {
    label: 'Tours', href: '/tours', icon: Package,
    dropdown: [
      { label: 'All Packages', href: '/tours' },
      { label: 'Domestic Tours', href: '/tours?type=domestic' },
      { label: 'International Tours', href: '/tours?type=international' },
    ],
  },
  { label: 'Visa', href: '/visa', icon: Globe },
  { label: 'Insurance', href: '/insurance', icon: Shield },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAuthenticated, user, isAdmin, logout } = useAuthStore();
  const { items: wishlistItems } = useWishlistStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/logo.png" alt="SkyRoute" width={36} height={36} className="object-contain" priority />
            </div>
            <span className={cn("font-bold text-xl tracking-tight transition-colors", scrolled || menuOpen ? "text-gray-900" : "text-white")} style={{letterSpacing: '-0.03em'}}>
              Sky<span className={scrolled || menuOpen ? "text-blue-600" : "text-white"}>Route</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname.startsWith(item.href)
                      ? (scrolled || menuOpen ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/20')
                      : (scrolled || menuOpen ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white/80 hover:text-white hover:bg-white/10')
                  )}
                >
                  <item.icon size={15} />
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className={cn('transition-transform', activeDropdown === item.label ? 'rotate-180' : '')} />}
                </Link>

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link href="/wishlist">
                  <Button variant="ghost" size="icon" className={cn("relative transition-colors", scrolled || menuOpen ? "" : "text-white hover:bg-white/10 hover:text-white")}>
                    <Heart size={18} />
                    {wishlistItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {wishlistItems.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link href="/dashboard/notifications">
                  <Button variant="ghost" size="icon" className={cn("transition-colors", scrolled || menuOpen ? "" : "text-white hover:bg-white/10 hover:text-white")}>
                    <Bell size={18} />
                  </Button>
                </Link>
                <div className="relative group">
                  <button className={cn("flex items-center gap-2 p-1.5 rounded-xl transition-colors", scrolled || menuOpen ? "hover:bg-gray-50" : "hover:bg-white/10")}>
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      {user?.name?.slice(0, 2).toUpperCase()}
                    </div>
                    <ChevronDown size={14} className={scrolled || menuOpen ? "text-gray-500" : "text-white/80"} />
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 hidden group-hover:block z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-semibold text-sm text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    {isAdmin ? (
                      <Link href="/admin" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <LayoutDashboard size={15} /> Admin Panel
                      </Link>
                    ) : (
                      <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <LayoutDashboard size={15} /> My Dashboard
                      </Link>
                    )}
                    <Link href="/dashboard/bookings" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      <Ticket size={15} /> My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={15} /> Log Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className={cn("transition-colors", scrolled || menuOpen ? "" : "text-white hover:bg-white/10 hover:text-white")}>Log In</Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className={cn("transition-colors", scrolled || menuOpen ? "" : "bg-white text-blue-900 hover:bg-gray-50")}>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className={cn("lg:hidden p-2 rounded-lg transition-colors", scrolled || menuOpen ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 py-4 space-y-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-3 flex gap-2 px-2">
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 text-sm font-medium">
                    <LogOut size={15} /> Log Out
                  </button>
                ) : (
                  <>
                    <Link href="/login" className="flex-1" onClick={() => setMenuOpen(false)}>
                      <Button variant="outline" className="w-full" size="sm">Log In</Button>
                    </Link>
                    <Link href="/register" className="flex-1" onClick={() => setMenuOpen(false)}>
                      <Button className="w-full" size="sm">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
