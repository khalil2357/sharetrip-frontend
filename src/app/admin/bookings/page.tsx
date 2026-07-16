import { Search, Ticket, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminBookingsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900">All Bookings</h1>
            <p className="text-sm text-gray-500 mt-1">View and manage all customer reservations.</p>
          </div>
          <Button variant="outline" className="gap-2 rounded-xl">
            <Download size={16} /> Export CSV
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by Booking ID or Name..." 
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              />
            </div>
          </div>
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Ticket size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No bookings yet</h3>
            <p className="text-gray-500 text-sm">Customer bookings will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
