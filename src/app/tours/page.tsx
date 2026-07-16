'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, MapPin, ChevronRight, Heart, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import { TOUR_PACKAGES } from '@/lib/dummy-data';
import { useWishlistStore } from '@/store';

function TourCard({ pkg }: { pkg: typeof TOUR_PACKAGES[0] }) {
  const { addItem, removeItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(pkg.id);
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {pkg.tag && <Badge className="bg-orange-500 text-white text-xs">{pkg.tag}</Badge>}
          {discount > 0 && <Badge className="bg-red-500 text-white text-xs">-{discount}% OFF</Badge>}
        </div>
        <button
          onClick={() => inWishlist ? removeItem(pkg.id) : addItem({ id: pkg.id, type: 'tour', title: pkg.title })}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          <Heart size={14} className={inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
        </button>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-lg leading-tight">{pkg.title}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1"><Clock size={11} /> {pkg.duration}</span>
          <span className="flex items-center gap-1"><MapPin size={11} /> {pkg.destination}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={pkg.rating} size={12} />
          <span className="text-xs text-gray-500 font-medium">{pkg.rating} ({pkg.reviews})</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {pkg.highlights.slice(0, 3).map((h) => (
            <span key={h} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{h}</span>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 line-through">৳{pkg.originalPrice.toLocaleString()}</p>
            <p className="text-xl font-black text-blue-600">৳{pkg.price.toLocaleString()}</p>
            <p className="text-xs text-gray-400">per person</p>
          </div>
          <Link href={`/tours/${pkg.id}`}>
            <Button size="sm">View Details <ChevronRight size={13} /></Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ToursPage() {
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = TOUR_PACKAGES.filter((p) => typeFilter === 'all' || p.type === typeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PREMIUM TOURS HERO ── */}
      <div className="relative pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=3000&q=80" 
            alt="Scenic Tour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="text-white/70 hover:text-white flex items-center gap-1 text-sm font-medium transition-colors"><ChevronRight size={14} className="rotate-180" /> Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white text-sm font-medium">Tours</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6" style={{letterSpacing: '-0.02em'}}>
            Explore the <span className="italic font-light">Unseen</span>
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover handpicked packages for unforgettable adventures around the globe.
          </p>
          
          <div className="flex gap-3 justify-center flex-wrap relative z-20">
            {['all', 'domestic', 'international'].map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all capitalize border ${typeFilter === t ? 'bg-white text-blue-900 border-white shadow-lg' : 'bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md'}`}
              >
                {t === 'all' ? 'All Packages' : `${t} Tours`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT (OVERLAPPING SECTION) ── */}
      <div className="bg-gray-50 rounded-t-[3rem] relative z-20 -mt-16 pt-12 pb-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100/50 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2"><Filter size={16} className="text-blue-600" /> Filters</h3>
              <div className="mb-6 pt-5 border-t border-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Budget</h4>
              <input type="range" min="0" max="200000" className="w-full accent-blue-600" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>৳0</span><span>৳2,00,000</span></div>
            </div>
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Duration</h4>
              {['Any', '1-3 Days', '4-7 Days', '8+ Days'].map((d) => (
                <label key={d} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="checkbox" className="accent-blue-600" /><span className="text-sm text-gray-600">{d}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">{filtered.length}</span> packages found</p>
            <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none text-gray-700 bg-white">
              <option>Sort: Best Seller</option>
              <option>Sort: Price Low-High</option>
              <option>Sort: Rating</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((pkg) => <TourCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
