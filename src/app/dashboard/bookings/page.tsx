'use client';

import Link from 'next/link';
import { BOOKINGS } from '@/lib/dummy-data';
import { Badge } from '@/components/ui/badge';
import { Plane, Hotel, Package, Globe, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const statusColor: Record<string, string> = {
  Confirmed: 'success',
  Pending: 'warning',
  Processing: 'default',
  Cancelled: 'destructive',
};

const typeIcon: Record<string, React.ReactNode> = {
  Flight: <Plane size={18} />,
  Hotel: <Hotel size={18} />,
  Tour: <Package size={18} />,
  Visa: <Globe size={18} />,
};

export default function BookingsPage() {
  const [tab, setTab] = useState('All');
  const tabs = ['All', 'Flight', 'Hotel', 'Tour', 'Visa'];
  const filtered = tab === 'All' ? BOOKINGS : BOOKINGS.filter((b) => b.type === tab);

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-black text-gray-900 mb-6">My Bookings</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${tab === t ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((booking) => (
            <div key={booking.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      {typeIcon[booking.type]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{booking.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{booking.id} · {booking.type}</p>
                      {'date' in booking && <p className="text-xs text-gray-500 mt-0.5">Date: {(booking as any).date}</p>}
                      {'checkIn' in booking && <p className="text-xs text-gray-500 mt-0.5">Check-in: {(booking as any).checkIn} · Check-out: {(booking as any).checkOut}</p>}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={statusColor[booking.status] as any}>{booking.status}</Badge>
                    <p className="text-xl font-black text-gray-900 mt-2">৳{booking.amount.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex items-center gap-2">
                <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                  <Download size={12} /> Download
                </Button>
                <Button size="sm" variant="ghost" className="gap-1.5 text-xs text-blue-600">
                  View Details
                </Button>
                {booking.status === 'Confirmed' && (
                  <Button size="sm" variant="ghost" className="gap-1.5 text-xs text-red-600 ml-auto">
                    Cancel Booking
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
