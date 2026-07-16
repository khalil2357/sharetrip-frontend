'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Plane, Hotel, Package, Globe, Shield, ArrowRight, Search, MapPin,
  Star, Users, Award, Clock, TrendingUp, ChevronRight, Calendar, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import {
  DESTINATIONS, HOTELS, TOUR_PACKAGES, FLIGHTS, REVIEWS, BLOGS, AIRLINES
} from '@/lib/dummy-data';

import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Search Widget ────────────────────────────────────────────
function SearchWidget() {
  const [activeTab, setActiveTab] = useState('flight');

  const tabs = [
    { id: 'flight', icon: Plane, label: 'Flights' },
    { id: 'hotel', icon: Hotel, label: 'Hotels' },
    { id: 'tour', icon: Package, label: 'Tours' },
    { id: 'visa', icon: Globe, label: 'Visa' },
    { id: 'insurance', icon: Shield, label: 'Insurance' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50">
      {/* Tabs */}
      <div className="flex border-b border-white/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-4 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/80'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <tab.icon size={15} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Flight Form */}
      {activeTab === 'flight' && (
        <div className="p-6">
          <div className="flex gap-5 mb-5">
            {['One Way', 'Round Trip', 'Multi City'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="flightType" defaultChecked={type === 'Round Trip'} className="accent-blue-600" />
                <span className="text-gray-700 font-medium">{type}</span>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">From</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Dhaka (DAC)" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 bg-white/80 transition-all" />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">To</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Dubai (DXB)" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 bg-white/80 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">Departure</label>
              <div className="relative">
                <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="date" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 bg-white/80 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">&nbsp;</label>
              <Link href="/flights">
                <Button className="w-full h-12 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 shadow-lg shadow-blue-600/20">
                  <Search size={16} /> Search Flights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hotel Form */}
      {activeTab === 'hotel' && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">Destination / Hotel</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Where are you going?" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 bg-white/80 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">Check-in</label>
              <input type="date" className="w-full px-3 h-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 bg-white/80 transition-all" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">&nbsp;</label>
              <Link href="/hotels">
                <Button className="w-full h-12 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 shadow-lg shadow-blue-600/20">
                  <Search size={16} /> Search Hotels
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tour / Visa / Insurance */}
      {(activeTab === 'tour' || activeTab === 'visa' || activeTab === 'insurance') && (
        <div className="p-6">
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">Destination</label>
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Search destination..." className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 bg-white/80 transition-all" />
              </div>
            </div>
            <div className="flex items-end">
              <Link href={`/${activeTab === 'tour' ? 'tours' : activeTab}`}>
                <Button className="h-12 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-600/20">Explore</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Destination Card ─────────────────────────────────────────
function DestinationCard({ destination }: { destination: typeof DESTINATIONS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      <Link href={`/tours?destination=${destination.name}`}>
        <div className="aspect-[4/5] relative overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${destination.type === 'domestic' ? 'bg-emerald-500/90 text-white' : 'bg-blue-600/90 text-white'}`}>
              {destination.type === 'domestic' ? 'Domestic' : 'International'}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-bold text-base" style={{letterSpacing: '-0.02em'}}>{destination.name}</h3>
            <p className="text-white/70 text-xs mt-0.5">{destination.country}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {destination.tours} tours
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <Star size={11} fill="currentColor" /> {destination.rating}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Hotel Card ───────────────────────────────────────────────
function HotelCard({ hotel }: { hotel: typeof HOTELS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
    >
      <Link href={`/hotels/${hotel.id}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-blue-600 shadow-sm">
              {hotel.type}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2" style={{letterSpacing: '-0.01em'}}>{hotel.name}</h3>
          </div>
          <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs">
            <MapPin size={11} className="text-blue-500" />
            {hotel.location}
          </div>
          <div className="flex items-center gap-2 mt-2.5">
            <StarRating rating={hotel.rating} size={12} />
            <span className="text-xs text-gray-400">({hotel.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
            <div>
              <span className="text-xs text-gray-400">From</span>
              <p className="text-blue-600 font-black text-lg" style={{letterSpacing: '-0.03em'}}>৳{hotel.pricePerNight.toLocaleString()}</p>
              <span className="text-xs text-gray-400">per night</span>
            </div>
            <Button size="sm" className="rounded-xl text-xs">Book Now</Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Tour Card ────────────────────────────────────────────────
function TourCard({ pkg }: { pkg: typeof TOUR_PACKAGES[0] }) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
    >
      <Link href={`/tours/${pkg.id}`}>
        <div className="relative h-52 overflow-hidden">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-3 left-3">
            {pkg.tag && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/95 text-white">{pkg.tag}</span>
            )}
          </div>
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-black px-2.5 py-1 rounded-full">
              -{discount}%
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-sm leading-tight" style={{letterSpacing: '-0.01em'}}>{pkg.title}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <div className="flex items-center gap-1"><Clock size={11} /> {pkg.duration}</div>
            <div className="flex items-center gap-1"><MapPin size={11} /> {pkg.destination}</div>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {pkg.highlights.slice(0, 3).map((h) => (
              <span key={h} className="text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium">{h}</span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <div>
              <span className="text-xs text-gray-400 line-through">৳{pkg.originalPrice.toLocaleString()}</span>
              <p className="text-blue-600 font-black text-xl" style={{letterSpacing: '-0.03em'}}>৳{pkg.price.toLocaleString()}</p>
              <span className="text-xs text-gray-400">per person</span>
            </div>
            <Button size="sm" className="rounded-xl text-xs">View Details</Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Flight Deal Card ─────────────────────────────────────────
function FlightDealCard({ flight }: { flight: typeof FLIGHTS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="bg-white rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-2xl hover:border-blue-100 p-6 transition-all duration-500"
    >
      <Link href="/flights">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Plane size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">{flight.airline}</p>
              <p className="text-xs text-gray-400">{flight.flightNumber}</p>
            </div>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${flight.refundable ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
            {flight.refundable ? 'Refundable' : 'Non-refundable'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-3xl font-black text-gray-900" style={{letterSpacing: '-0.04em'}}>{flight.departure}</p>
            <p className="text-xs text-gray-400 font-semibold mt-0.5">{flight.from.code}</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1">
            <p className="text-xs text-gray-400">{flight.duration}</p>
            <div className="w-full flex items-center gap-1">
              <div className="h-px flex-1 bg-gray-200" />
              <Plane size={14} className="text-blue-500" />
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <p className="text-xs text-gray-400">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gray-900" style={{letterSpacing: '-0.04em'}}>{flight.arrival}</p>
            <p className="text-xs text-gray-400 font-semibold mt-0.5">{flight.to.code}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400">From</span>
            <p className="text-blue-600 font-black text-2xl" style={{letterSpacing: '-0.04em'}}>৳{flight.price.toLocaleString()}</p>
          </div>
          <Button size="sm" className="rounded-xl">Book Now</Button>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Review Card ──────────────────────────────────────────────
function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-sm h-full flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <StarRating rating={review.rating} />
      <p className="text-gray-600 text-sm leading-relaxed flex-1">&quot;{review.comment}&quot;</p>
      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
            {review.avatar}
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">{review.name}</p>
            <p className="text-xs text-gray-400">{review.destination}</p>
          </div>
        </div>
        <span className="text-xs text-gray-400">{review.date}</span>
      </div>
    </div>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────
function Section({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className={`py-20 ${className || ''}`}
    >
      {children}
    </motion.section>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="pt-16">
      {/* ── PREMIUM LUXURY HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background: High-end destination image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=3220&auto=format&fit=crop" 
            alt="Luxury Travel Destination" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradients to ensure text readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col items-center">
          
          {/* Trusted Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/30">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              <span className="text-white text-xs font-medium tracking-wide uppercase">Award Winning Travel Agency</span>
            </div>
          </motion.div>

          {/* Elegant Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-center mb-12 max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-6" style={{letterSpacing: '-0.02em'}}>
              Discover Your Next <br />
              <span className="italic font-light">Extraordinary</span> Journey
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Experience the world's most breathtaking destinations with our curated, premium travel collections and personalized concierge service.
            </p>
          </motion.div>

          {/* Search widget wrapper - clean and shadowless */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-5xl mx-auto"
          >
            <SearchWidget />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="mt-16 pt-8 border-t border-white/20 w-full max-w-4xl flex flex-wrap justify-center gap-8 sm:gap-16 text-white/80"
          >
            <div className="flex items-center gap-3">
              <Shield size={20} className="opacity-70" />
              <span className="text-sm font-medium tracking-wide">Secure Booking</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="opacity-70" />
              <span className="text-sm font-medium tracking-wide">24/7 Concierge</span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={20} className="opacity-70" />
              <span className="text-sm font-medium tracking-wide">Best Price Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── POPULAR DESTINATIONS ─────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Explore</p>
              <h2 className="text-4xl font-black text-gray-900" style={{letterSpacing: '-0.03em'}}>Popular Destinations</h2>
              <p className="text-gray-400 text-lg mt-2">Trending spots loved by thousands of travelers</p>
            </div>
            <Link href="/tours">
              <Button variant="outline" size="sm" className="rounded-xl hidden sm:flex gap-1.5">
                View All <ChevronRight size={15} />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESTINATIONS.map((dest) => (
              <motion.div key={dest.id} variants={fadeUp}>
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── FLIGHT DEALS ─────────────────────────────────── */}
      <Section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Limited Time</p>
              <h2 className="text-4xl font-black text-gray-900" style={{letterSpacing: '-0.03em'}}>Special Flight Deals</h2>
              <p className="text-gray-400 text-lg mt-2">Grab these offers before they&apos;re gone</p>
            </div>
            <Link href="/flights">
              <Button variant="outline" size="sm" className="rounded-xl hidden sm:flex gap-1.5">
                All Flights <ChevronRight size={15} />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FLIGHTS.slice(0, 3).map((flight) => (
              <motion.div key={flight.id} variants={fadeUp}>
                <FlightDealCard flight={flight} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── TOUR PACKAGES ────────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Handpicked</p>
              <h2 className="text-4xl font-black text-gray-900" style={{letterSpacing: '-0.03em'}}>Trending Tour Packages</h2>
              <p className="text-gray-400 text-lg mt-2">Unforgettable experiences, curated for you</p>
            </div>
            <Link href="/tours">
              <Button variant="outline" size="sm" className="rounded-xl hidden sm:flex gap-1.5">
                All Packages <ChevronRight size={15} />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TOUR_PACKAGES.map((pkg) => (
              <motion.div key={pkg.id} variants={fadeUp}>
                <TourCard pkg={pkg} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── FEATURED HOTELS ──────────────────────────────── */}
      <Section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Top Rated</p>
              <h2 className="text-4xl font-black text-gray-900" style={{letterSpacing: '-0.03em'}}>Featured Hotels</h2>
              <p className="text-gray-400 text-lg mt-2">Premium properties for your perfect stay</p>
            </div>
            <Link href="/hotels">
              <Button variant="outline" size="sm" className="rounded-xl hidden sm:flex gap-1.5">
                All Hotels <ChevronRight size={15} />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOTELS.slice(0, 3).map((hotel) => (
              <motion.div key={hotel.id} variants={fadeUp}>
                <HotelCard hotel={hotel} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Why SkyRoute</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900" style={{letterSpacing: '-0.04em'}}>Built for Travelers,<br/>By Travelers.</h2>
            <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">We make travel seamless, affordable, and unforgettable — every single time.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Best Price Guarantee', desc: "Find a cheaper price? We'll match it and give you an extra 10% off.", color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', tc: 'text-blue-600' },
              { icon: Shield, title: 'Secure Booking', desc: '100% secure payment with SSL encryption for your peace of mind.', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', tc: 'text-emerald-600' },
              { icon: Clock, title: '24/7 Support', desc: 'Expert travel support team available to assist you anytime.', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', tc: 'text-purple-600' },
              { icon: TrendingUp, title: 'Exclusive Deals', desc: 'Members get access to exclusive offers and early-bird discounts.', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', tc: 'text-orange-600' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.tc} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={26} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2" style={{letterSpacing: '-0.02em'}}>{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── REVIEWS ──────────────────────────────────────── */}
      <Section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl font-black text-gray-900" style={{letterSpacing: '-0.03em'}}>What Travelers Say</h2>
            <p className="text-gray-400 text-lg mt-3">Real stories from real people</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((review) => (
              <motion.div key={review.id} variants={fadeUp}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── PARTNER AIRLINES ─────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900" style={{letterSpacing: '-0.02em'}}>Our Partner Airlines</h2>
            <p className="text-gray-400 text-sm mt-2">We partner with the world&apos;s leading airlines</p>
          </motion.div>
          <motion.div variants={stagger} className="flex flex-wrap items-center justify-center gap-3">
            {AIRLINES.map((airline) => (
              <motion.div
                key={airline.id}
                variants={fadeUp}
                className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 px-5 py-3 rounded-2xl hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-100"
              >
                <div className="text-gray-400">
                  <Plane size={20} />
                </div>
                <span className="text-gray-700 font-medium text-sm">{airline.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── BLOGS ────────────────────────────────────────── */}
      <Section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Inspiration</p>
              <h2 className="text-4xl font-black text-gray-900" style={{letterSpacing: '-0.03em'}}>Travel Blogs</h2>
              <p className="text-gray-400 text-lg mt-2">Tips, guides, and stories for your next adventure</p>
            </div>
            <Link href="/blogs">
              <Button variant="outline" size="sm" className="rounded-xl hidden sm:flex gap-1.5">All Blogs <ChevronRight size={15} /></Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BLOGS.map((blog) => (
              <motion.div
                key={blog.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
              >
                <Link href={`/blogs/${blog.id}`}>
                  <div className="h-44 overflow-hidden relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-blue-600/95 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">{blog.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-2" style={{letterSpacing: '-0.01em'}}>{blog.title}</h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">{blog.authorAvatar}</div>
                        {blog.author}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-4" style={{letterSpacing: '-0.04em'}}>Ready for Your<br/>Next Adventure?</h2>
            <p className="text-blue-200/70 text-xl mb-10 max-w-lg mx-auto">Create a free account and unlock exclusive member deals and personalized travel offers.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/register">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50 font-semibold rounded-2xl px-10 h-14 text-base shadow-2xl shadow-black/20 gap-2.5 hover:scale-105 transition-all duration-200">
                  <Users size={18} className="text-blue-600" /> Get Started — It&apos;s Free
                </Button>
              </Link>
              <Link href="/tours">
                <Button size="lg" variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white/20 font-semibold rounded-2xl px-10 h-14 text-base backdrop-blur-sm gap-2 hover:scale-105 transition-all duration-200">
                  Explore Tours <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
