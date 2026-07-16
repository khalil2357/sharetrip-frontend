import { Plane, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FlightBookingPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Complete Your Flight Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Plane className="text-blue-600"/> Flight Summary</h2>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">DAC</p>
                  <p className="text-xs text-gray-500">Dhaka (10:00 AM)</p>
                </div>
                <div className="flex-1 px-8 relative flex flex-col items-center">
                  <p className="text-xs font-semibold text-gray-400 mb-1">Non-stop · 2h 30m</p>
                  <div className="w-full border-t-2 border-dashed border-gray-300 relative">
                    <Plane size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600 bg-gray-50 px-1" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">DXB</p>
                  <p className="text-xs text-gray-500">Dubai (12:30 PM)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Users className="text-blue-600"/> Passenger Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input type="date" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fare Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500">Base Fare (1 Adult)</span>
                  <span className="font-semibold text-gray-900">৳ 45,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500">Taxes & Fees</span>
                  <span className="font-semibold text-gray-900">৳ 5,500</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-xl">
                  <CheckCircle2 size={16} /> Eligible for free cancellation
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-gray-900">Total Price</span>
                  <span className="text-2xl font-black text-blue-600">৳ 50,500</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 text-lg font-bold">
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
