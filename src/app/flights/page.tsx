'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Filter, Search, Plane, SlidersHorizontal, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FLIGHTS, AIRLINES } from '@/lib/dummy-data';
import { useWishlistStore } from '@/store';

function FlightCard({ flight }: { flight: typeof FLIGHTS[0] }) {
  const { addItem, removeItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(flight.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><Plane size={24} /></div>
            <div>
              <p className="font-bold text-gray-900">{flight.airline}</p>
              <p className="text-xs text-gray-400">{flight.flightNumber} · {flight.class}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={flight.refundable ? 'success' : 'secondary'} className="text-xs">
              {flight.refundable ? 'Refundable' : 'Non-refundable'}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center min-w-0">
            <p className="text-3xl font-black text-gray-900">{flight.departure}</p>
            <p className="text-sm text-gray-500 font-medium">{flight.from.code}</p>
            <p className="text-xs text-gray-400">{flight.from.city}</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1">
            <p className="text-xs text-gray-400 font-medium">{flight.duration}</p>
            <div className="w-full flex items-center gap-1">
              <div className="h-px flex-1 bg-gray-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {flight.stops > 0 && <div className="text-xs text-orange-500 font-medium px-1">{flight.stopCity}</div>}
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <p className="text-xs text-gray-400">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}</p>
          </div>
          <div className="text-center min-w-0">
            <p className="text-3xl font-black text-gray-900">{flight.arrival}</p>
            <p className="text-sm text-gray-500 font-medium">{flight.to.code}</p>
            <p className="text-xs text-gray-400">{flight.to.city}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-lg">{flight.baggage} baggage</span>
          <span className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-lg">{flight.seats} seats left</span>
        </div>
      </div>

      <div className="border-t border-dashed border-gray-100 p-4 flex items-center justify-between bg-gray-50/50">
        <div>
          <span className="text-xs text-gray-400">Price per person</span>
          <p className="text-2xl font-black text-blue-600">৳{flight.price.toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => inWishlist ? removeItem(flight.id) : addItem({ id: flight.id, type: 'flight', title: flight.flightNumber })}
            className={inWishlist ? 'text-red-500 border-red-200' : ''}
          >
            <Heart size={16} className={inWishlist ? 'fill-red-500' : ''} />
          </Button>
          <Link href={`/flights/booking?id=${flight.id}`}>
            <Button>Book Now →</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlightsPage() {
  const [priceFilter, setPriceFilter] = useState([0, 100000]);
  const [stopFilter, setStopFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = FLIGHTS.filter((f) => {
    if (stopFilter === 'nonstop' && f.stops !== 0) return false;
    if (stopFilter === 'stop' && f.stops === 0) return false;
    if (f.price > priceFilter[1]) return false;
    return true;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* ── PREMIUM FLIGHTS HERO ── */}
      <div className="relative pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=3000&q=80" 
            alt="Luxury Flight" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="text-white/70 hover:text-white flex items-center gap-1 text-sm font-medium transition-colors"><ArrowLeft size={14} /> Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white text-sm font-medium">Flights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6" style={{letterSpacing: '-0.02em'}}>
            Take to the <span className="italic font-light">Skies</span>
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book premium flights globally. Experience comfort and reliability every time you fly.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 flex gap-3 flex-wrap shadow-2xl">
            <div className="relative flex-1 min-w-48">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <input
                className="w-full pl-9 pr-3 h-12 bg-white/10 text-white placeholder:text-white/60 rounded-2xl text-sm border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all"
                placeholder="From... e.g. Dhaka"
              />
            </div>
            <div className="relative flex-1 min-w-48">
              <Plane size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <input
                className="w-full pl-9 pr-3 h-12 bg-white/10 text-white placeholder:text-white/60 rounded-2xl text-sm border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all"
                placeholder="To... e.g. Dubai"
              />
            </div>
            <Button className="bg-white text-blue-900 hover:bg-gray-50 h-12 px-8 rounded-2xl font-bold">
              <Search size={15} className="mr-2" /> Search
            </Button>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT (OVERLAPPING SECTION) ── */}
      <div className="bg-gray-50 rounded-t-[3rem] relative z-20 -mt-16 pt-12 pb-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100/50 p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-blue-600" /> Filters
                </h3>

                <div className="mb-6 pt-5 border-t border-gray-50">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Stops</h4>
                  {[{ value: 'all', label: 'All Flights' }, { value: 'nonstop', label: 'Non-stop Only' }, { value: 'stop', label: '1+ Stops' }].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <input type="radio" name="stops" value={opt.value} checked={stopFilter === opt.value}
                        onChange={() => setStopFilter(opt.value)} className="w-4 h-4 accent-blue-600" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{opt.label}</span>
                    </label>
                  ))}
                </div>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Airlines</h4>
                {AIRLINES.map((a) => (
                  <label key={a.id} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" className="accent-blue-600" />
                    <span className="text-sm text-gray-600">{a.name}</span>
                  </label>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Max Price</h4>
                <input type="range" min="0" max="100000" value={priceFilter[1]}
                  onChange={(e) => setPriceFilter([0, Number(e.target.value)])}
                  className="w-full accent-blue-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>৳0</span>
                  <span className="font-medium text-blue-600">৳{priceFilter[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 text-sm"><span className="font-bold text-gray-900">{filtered.length}</span> flights found</p>
              <div className="flex gap-2">
                <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white">
                  <option>Sort: Cheapest First</option>
                  <option>Sort: Fastest First</option>
                  <option>Sort: Best Value</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filtered.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                  <Plane size={48} className="text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No flights match your filters</p>
                  <Button variant="outline" size="sm" className="mt-4" onClick={() => { setStopFilter('all'); setPriceFilter([0, 100000]); }}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
