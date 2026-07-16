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
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-black text-white mb-2">Explore Tour Packages</h1>
          <p className="text-blue-200 mb-6">Discover handpicked packages for unforgettable adventures</p>
          <div className="flex gap-2 justify-center">
            {['all', 'domestic', 'international'].map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize ${typeFilter === t ? 'bg-white text-blue-600' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                {t === 'all' ? 'All Packages' : `${t} Tours`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-6">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Filter size={16} className="text-blue-600" /> Filters</h3>
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Budget</h4>
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
  );
}
