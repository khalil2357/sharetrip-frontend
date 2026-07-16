import { MapPin, Calendar, Users, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TourDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="h-[400px] w-full bg-blue-900 relative">
        {/* Placeholder for Tour Hero Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-6xl mx-auto text-white pt-24">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-3 mt-12">
            <MapPin size={16} /> Maldives · <Star size={14} className="fill-current text-yellow-400 ml-2" /> 4.9 (120 reviews)
          </div>
          <h1 className="text-4xl font-black mb-4">Maldives Honeymoon Special Package</h1>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"><Clock size={16}/> 4 Days, 3 Nights</div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"><Calendar size={16}/> Flexible Dates</div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"><Users size={16}/> Min 2 Persons</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-0 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Experience the pristine beaches and crystal clear waters of the Maldives. This package is specially curated for couples looking for a romantic getaway. Enjoy luxury water villas, sunset cruises, and private dining experiences under the stars.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((day) => (
                <div key={day} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center shrink-0">
                      {day}
                    </div>
                    {day !== 4 && <div className="w-0.5 h-full bg-blue-100 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Day {day}</h3>
                    <p className="text-sm text-gray-600">Arrival at the airport and transfer to the luxury resort via speedboat. Enjoy the rest of the day at your leisure.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Details</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500">Price per person</span>
                <span className="font-bold text-gray-900">৳ 85,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500">Travelers</span>
                <span className="font-bold text-gray-900">2 Adults</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-gray-900">Total Price</span>
                <span className="text-2xl font-black text-blue-600">৳ 170,000</span>
              </div>
            </div>
            <Link href="/tours/booking">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 text-lg font-bold">
                Book This Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
