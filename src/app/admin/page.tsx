'use client';

import { useAuthStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Users, Ticket, Hotel, CreditCard, Plane, Package, BarChart3 } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { ADMIN_STATS, MONTHLY_REVENUE_DATA, BOOKING_TYPE_DATA } from '@/lib/dummy-data';
import { Badge } from '@/components/ui/badge';

function StatCard({ icon: Icon, label, value, sub, color }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center`}>
          <Icon size={20} />
        </div>
        <Badge variant="success" className="text-xs">+12%</Badge>
      </div>
      <p className="text-2xl font-black text-gray-900">{typeof value === 'number' ? value.toLocaleString() : value}</p>
      <p className="text-sm text-gray-500 mt-0.5">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

export default function AdminDashboard() {

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here&apos;s what&apos;s happening with SkyRoute today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Users} label="Total Users" value={ADMIN_STATS.totalUsers} color="bg-blue-50 text-blue-600" />
          <StatCard icon={Ticket} label="Total Bookings" value={ADMIN_STATS.totalBookings} color="bg-purple-50 text-purple-600" />
          <StatCard icon={Hotel} label="Hotels Listed" value={ADMIN_STATS.totalHotels} color="bg-emerald-50 text-emerald-600" />
          <StatCard icon={CreditCard} label="Revenue (BDT)" value={`৳${(ADMIN_STATS.monthlyRevenue / 100000).toFixed(1)}L`} color="bg-amber-50 text-amber-600" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Monthly Revenue Bar Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-6">
            <h2 className="font-bold text-gray-900 mb-5">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={MONTHLY_REVENUE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${v / 100000}L`} />
                <Tooltip formatter={(v) => `৳${Number(v).toLocaleString()}`} />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Booking Types Pie Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-6">
            <h2 className="font-bold text-gray-900 mb-5">Booking Breakdown</h2>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={BOOKING_TYPE_DATA} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
                  {BOOKING_TYPE_DATA.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-2">
              {BOOKING_TYPE_DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Trend + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-6">
            <h2 className="font-bold text-gray-900 mb-5">Booking Trend</h2>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={MONTHLY_REVENUE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-6">
            <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { label: 'Add New Flight', href: '/admin/flights', icon: Plane, color: 'text-blue-600 bg-blue-50' },
                { label: 'Add Hotel', href: '/admin/hotels', icon: Hotel, color: 'text-purple-600 bg-purple-50' },
                { label: 'Create Package', href: '/admin/packages', icon: Package, color: 'text-emerald-600 bg-emerald-50' },
                { label: 'View Reports', href: '/admin/reports', icon: BarChart3, color: 'text-amber-600 bg-amber-50' },
              ].map((action) => (
                <Link key={action.href} href={action.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-9 h-9 ${action.color} rounded-lg flex items-center justify-center`}>
                    <action.icon size={16} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
