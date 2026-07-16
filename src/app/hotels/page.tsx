'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star, Wifi, Dumbbell, Utensils, Waves, Heart, SlidersHorizontal, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import { HOTELS } from '@/lib/dummy-data';
import { useWishlistStore } from '@/store';

const amenityIcon: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={13} />,
  Gym: <Dumbbell size={13} />,
  Restaurant: <Utensils size={13} />,
  Pool: <Waves size={13} />,
};

function HotelCard({ hotel }: { hotel: typeof HOTELS[0] }) {
  const { addItem, removeItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(hotel.id);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
    >
      <div className="relative h-52 md:h-auto md:w-72 flex-shrink-0 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        <button
          onClick={() => inWishlist ? removeItem(hotel.id) : addItem({ id: hotel.id, type: 'hotel', title: hotel.name })}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart size={14} className={inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
        </button>
        <div className="absolute top-3 left-3">
          <Badge className="bg-white text-blue-600 border border-blue-100 text-xs">{hotel.type}</Badge>
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{hotel.name}</h3>
            <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-sm">
              <MapPin size={13} className="text-blue-500" /> {hotel.location}
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-gray-400">From</p>
            <p className="text-2xl font-black text-blue-600">৳{hotel.pricePerNight.toLocaleString()}</p>
            <p className="text-xs text-gray-400">per night</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <StarRating rating={hotel.rating} size={14} />
          <span className="text-sm font-bold text-gray-900">{hotel.rating}</span>
          <span className="text-sm text-gray-400">({hotel.reviews.toLocaleString()} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {hotel.amenities.slice(0, 5).map((a) => (
            <span key={a} className="flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-lg border border-gray-100">
              {amenityIcon[a] || null} {a}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex gap-2">
          <Link href={`/hotels/${hotel.id}`} className="flex-1">
            <Button variant="outline" className="w-full">View Details</Button>
          </Link>
          <Link href={`/hotels/${hotel.id}/booking`} className="flex-1">
            <Button className="w-full">Book Now</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function HotelsPage() {
  const [ratingFilter, setRatingFilter] = useState(0);
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = HOTELS.filter((h) => {
    if (ratingFilter > 0 && h.rating < ratingFilter) return false;
    if (typeFilter !== 'all' && h.type.toLowerCase() !== typeFilter) return false;
    return true;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black text-white mb-4">Search Hotels</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex gap-3 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-200" />
              <input className="w-full pl-9 pr-3 h-10 bg-white/20 text-white placeholder:text-blue-200 rounded-xl text-sm border border-white/20 focus:outline-none" placeholder="Destination or Hotel Name" />
            </div>
            <input type="date" className="h-10 px-3 bg-white/20 text-white rounded-xl text-sm border border-white/20 focus:outline-none" />
            <input type="date" className="h-10 px-3 bg-white/20 text-white rounded-xl text-sm border border-white/20 focus:outline-none" />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 h-10 px-6"><Search size={15} /> Search</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-6">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><SlidersHorizontal size={16} className="text-blue-600" /> Filters</h3>

            <div className="mb-5">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Hotel Type</h4>
              {['all', 'luxury', 'resort', 'business', 'beach'].map((t) => (
                <label key={t} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="radio" name="type" value={t} checked={typeFilter === t} onChange={() => setTypeFilter(t)} className="accent-blue-600" />
                  <span className="text-sm text-gray-600 capitalize">{t === 'all' ? 'All Types' : t}</span>
                </label>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Minimum Rating</h4>
              {[0, 4, 4.5, 4.8].map((r) => (
                <label key={r} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="radio" name="rating" value={r} checked={ratingFilter === r} onChange={() => setRatingFilter(r)} className="accent-blue-600" />
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    {r === 0 ? 'Any Rating' : <><Star size={12} fill="currentColor" className="text-amber-400" /> {r}+</>}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-600 text-sm"><span className="font-bold text-gray-900">{filtered.length}</span> hotels found</p>
            <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none text-gray-700 bg-white">
              <option>Sort: Most Popular</option>
              <option>Sort: Price Low-High</option>
              <option>Sort: Rating</option>
            </select>
          </div>
          <div className="space-y-4">
            {filtered.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
