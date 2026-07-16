import { MapPin, Star, Wifi, Coffee, Dumbbell, Car, Check, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HotelDetailsPage({ params }: { params: { id: string } }) {
  const hotelId = params.id;
  
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded uppercase">Luxury</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">Grand Sea View Resort & Spa</h1>
            <p className="text-gray-500 flex items-center gap-1.5">
              <MapPin size={16} className="text-gray-400" /> 123 Ocean Drive, Cox&apos;s Bazar, Bangladesh
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-500 mb-1">Starting from</p>
            <p className="text-3xl font-black text-blue-600">৳ 12,500 <span className="text-sm font-medium text-gray-500">/night</span></p>
          </div>
        </div>

        {/* Image Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[400px]">
          <div className="md:col-span-2 bg-blue-900 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-bold bg-gradient-to-br from-blue-800 to-blue-950">
              Main Hotel Image Placeholder
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 hidden md:grid">
            <div className="bg-blue-800 rounded-2xl flex items-center justify-center text-white/50 text-sm font-bold bg-gradient-to-br from-blue-700 to-blue-900">
              Room View
            </div>
            <div className="bg-blue-800 rounded-2xl flex items-center justify-center text-white/50 text-sm font-bold bg-gradient-to-br from-blue-700 to-blue-900 relative">
              Pool Area
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-black/30 transition-colors">
                <span className="text-white font-bold text-lg">+12 More</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Experience unparalleled luxury at the Grand Sea View Resort & Spa. Located directly on the world&apos;s longest unbroken sea beach, our resort offers stunning ocean views, world-class dining, and an award-winning spa. Whether you&apos;re here for a romantic getaway or a family vacation, our state-of-the-art facilities and warm hospitality ensure an unforgettable stay.
              </p>
              
              <h3 className="font-bold text-gray-900 mt-6 mb-4">Most Popular Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Wifi, label: 'Free WiFi' },
                  { icon: Coffee, label: 'Breakfast' },
                  { icon: Dumbbell, label: 'Fitness Center' },
                  { icon: Car, label: 'Free Parking' },
                ].map((amenity, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl text-center gap-2">
                    <amenity.icon size={24} className="text-blue-600" />
                    <span className="text-xs font-semibold text-gray-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Rooms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Rooms</h2>
              <div className="space-y-4">
                {[
                  { type: 'Deluxe Ocean View', beds: '1 King Bed', price: 12500, pax: 2 },
                  { type: 'Premium Family Suite', beds: '2 Queen Beds', price: 22000, pax: 4 },
                ].map((room, i) => (
                  <div key={i} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 h-32 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-gray-400 font-medium text-xs">
                      Room Image
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{room.type}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1"><Users size={14} /> {room.pax} Guests</span>
                          <span>· {room.beds}</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-2 mb-4">
                          <li className="flex items-center gap-1.5 text-xs text-green-600"><Check size={14} /> Free Cancellation</li>
                          <li className="flex items-center gap-1.5 text-xs text-green-600"><Check size={14} /> Breakfast included</li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-black text-gray-900">৳ {room.price.toLocaleString()} <span className="text-xs text-gray-500 font-medium">/night</span></span>
                        <Link href={`/hotels/${hotelId}/booking`}>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Select Room</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Side Card */}
          <div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-6">
                Our support team is available 24/7 to help you with your booking.
              </p>
              <div className="bg-blue-50 p-4 rounded-2xl text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">Call us at</p>
                <p className="text-lg font-black text-blue-800">+880 1234 567 890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
