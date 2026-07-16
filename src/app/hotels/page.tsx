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
      {/* ── PREMIUM HOTELS HERO ── */}
      <div className="relative pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=3000&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6" style={{letterSpacing: '-0.02em'}}>
            Find Your <span className="italic font-light">Perfect</span> Stay
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover handpicked luxury hotels, resorts, and boutique stays around the world.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 flex gap-3 flex-wrap shadow-2xl">
            <div className="relative flex-1 min-w-48">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <input className="w-full pl-9 pr-3 h-12 bg-white/10 text-white placeholder:text-white/60 rounded-2xl text-sm border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all" placeholder="Destination or Hotel Name" />
            </div>
            <input type="date" className="h-12 px-4 bg-white/10 text-white rounded-2xl text-sm border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all" />
            <input type="date" className="h-12 px-4 bg-white/10 text-white rounded-2xl text-sm border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all" />
            <Button className="bg-white text-blue-900 hover:bg-gray-50 h-12 px-8 rounded-2xl font-bold"><Search size={15} className="mr-2" /> Search</Button>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT (OVERLAPPING SECTION) ── */}
      <div className="bg-gray-50 rounded-t-[3rem] relative z-20 -mt-16 pt-12 pb-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100/50 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2"><SlidersHorizontal size={16} className="text-blue-600" /> Filters</h3>

              <div className="mb-6 pt-5 border-t border-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Hotel Type</h4>
                {['all', 'luxury', 'resort', 'business', 'beach'].map((t) => (
                  <label key={t} className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <input type="radio" name="type" value={t} checked={typeFilter === t} onChange={() => setTypeFilter(t)} className="w-4 h-4 accent-blue-600" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 capitalize transition-colors">{t === 'all' ? 'All Types' : t}</span>
                  </label>
                ))}
              </div>

              <div className="pt-5 border-t border-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Minimum Rating</h4>
                {[0, 4, 4.5, 4.8].map((r) => (
                  <label key={r} className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <input type="radio" name="rating" value={r} checked={ratingFilter === r} onChange={() => setRatingFilter(r)} className="w-4 h-4 accent-blue-600" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 flex items-center gap-1.5 transition-colors">
                      {r === 0 ? 'Any Rating' : <><Star size={14} fill="currentColor" className="text-amber-400" /> {r}+</>}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Hotel List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 bg-white rounded-2xl p-4 shadow-sm border border-gray-100/50">
              <p className="text-gray-600 font-medium"><span className="font-bold text-gray-900">{filtered.length}</span> hotels found</p>
              <select className="text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700 bg-gray-50 font-medium">
                <option>Sort: Most Popular</option>
                <option>Sort: Price Low-High</option>
                <option>Sort: Rating</option>
              </select>
            </div>
            
            <div className="space-y-5">
              {filtered.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
