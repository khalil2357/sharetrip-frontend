'use client';

import { useAuthStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  Ticket, Heart, Bell,
  Plane, Hotel, Package, Globe
} from 'lucide-react';
import { BOOKINGS, NOTIFICATIONS } from '@/lib/dummy-data';
import { Badge } from '@/components/ui/badge';

function StatCard({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: string | number; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <Icon size={22} />
      </div>
      <div>
        <p className="text-2xl font-black text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuthStore();

  const statusColor: Record<string, string> = {
    Confirmed: 'success',
    Pending: 'warning',
    Processing: 'default',
    Cancelled: 'destructive',
  };

  const bookingIcon: Record<string, React.ReactNode> = {
    Flight: <Plane size={14} />,
    Hotel: <Hotel size={14} />,
    Tour: <Package size={14} />,
    Visa: <Globe size={14} />,
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-7">
          <h1 className="text-2xl font-black text-gray-900">Welcome back, {user?.name?.split(' ')[0]}!</h1>
          <p className="text-gray-500 text-sm mt-1">Here&apos;s an overview of your travel activities</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Ticket} label="Total Bookings" value={4} color="bg-blue-50 text-blue-600" />
          <StatCard icon={Plane} label="Upcoming Trips" value={2} color="bg-purple-50 text-purple-600" />
          <StatCard icon={Heart} label="Wishlisted" value={3} color="bg-red-50 text-red-500" />
          <StatCard icon={Bell} label="Notifications" value={2} color="bg-amber-50 text-amber-600" />
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900 text-lg">Recent Bookings</h2>
            <Link href="/dashboard/bookings" className="text-sm text-blue-600 font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {BOOKINGS.map((booking) => (
              <div key={booking.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  {bookingIcon[booking.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">{booking.title}</p>
                  <p className="text-xs text-gray-400">{booking.id} · {booking.type}</p>
                </div>
                <div className="text-right">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Badge variant={(statusColor[booking.status] as any) || 'default'}>{booking.status}</Badge>
                  <p className="text-sm font-bold text-gray-900 mt-1">৳{booking.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900 text-lg">Recent Notifications</h2>
            <Link href="/dashboard/notifications" className="text-sm text-blue-600 font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {NOTIFICATIONS.slice(0, 3).map((notif) => (
              <div key={notif.id} className={`flex gap-3 p-3 rounded-xl transition-colors ${notif.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${notif.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{notif.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{notif.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
