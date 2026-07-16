'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Plane, Hotel, Package, Globe, Shield, ArrowRight, Search, MapPin,
  Star, Users, Award, Clock, TrendingUp, ChevronRight, Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import {
  DESTINATIONS, HOTELS, TOUR_PACKAGES, FLIGHTS, REVIEWS, BLOGS, AIRLINES
} from '@/lib/dummy-data';

import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <tab.icon size={16} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Flight Form */}
      {activeTab === 'flight' && (
        <div className="p-6">
          <div className="flex gap-4 mb-4">
            {['One Way', 'Round Trip', 'Multi City'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="flightType" defaultChecked={type === 'Round Trip'} className="accent-blue-600" />
                <span className="text-gray-700 font-medium">{type}</span>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-500 mb-1 font-medium">FROM</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Dhaka (DAC)" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50" />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-500 mb-1 font-medium">TO</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Dubai (DXB)" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 font-medium">DEPARTURE</label>
              <div className="relative">
                <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="date" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 font-medium">&nbsp;</label>
              <Link href="/flights">
                <Button className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700">
                  <Search size={17} /> Search Flights
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
              <label className="block text-xs text-gray-500 mb-1 font-medium">DESTINATION / HOTEL</label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Where are you going?" className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 font-medium">CHECK-IN</label>
              <input type="date" className="w-full px-3 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 font-medium">&nbsp;</label>
              <Link href="/hotels">
                <Button className="w-full h-12 text-base">
                  <Search size={17} /> Search Hotels
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
              <label className="block text-xs text-gray-500 mb-1 font-medium">DESTINATION</label>
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="Search destination..." className="w-full pl-9 pr-3 h-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50" />
              </div>
            </div>
            <div className="flex items-end">
              <Link href={`/${activeTab === 'tour' ? 'tours' : activeTab}`}>
                <Button className="h-12 px-8">Explore</Button>
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
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md"
    >
      <Link href={`/tours?destination=${destination.name}`}>
        <div className="aspect-[4/5] relative overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <Badge className={destination.type === 'domestic' ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'}>
              {destination.type === 'domestic' ? 'Domestic' : 'International'}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-bold text-lg">{destination.name}</h3>
            <p className="text-white/80 text-sm">{destination.country}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {destination.tours} tours
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-medium">
                <Star size={13} fill="currentColor" /> {destination.rating}
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
    <motion.div whileHover={{ y: -4 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
      <Link href={`/hotels/${hotel.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-white text-blue-600 border border-blue-100 font-bold">
              {hotel.type}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">{hotel.name}</h3>
          </div>
          <div className="flex items-center gap-1 mt-1.5 text-gray-500 text-xs">
            <MapPin size={11} className="text-blue-500" />
            {hotel.location}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={hotel.rating} size={12} />
            <span className="text-xs text-gray-500">({hotel.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div>
              <span className="text-xs text-gray-500">From</span>
              <p className="text-blue-600 font-bold text-base">৳{hotel.pricePerNight.toLocaleString()}</p>
              <span className="text-xs text-gray-400">per night</span>
            </div>
            <Button size="sm">Book Now</Button>
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
    <motion.div whileHover={{ y: -4 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
      <Link href={`/tours/${pkg.id}`}>
        <div className="relative h-52 overflow-hidden">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3">
            {pkg.tag && (
              <Badge className="bg-orange-500 text-white">{pkg.tag}</Badge>
            )}
          </div>
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -{discount}%
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-base leading-tight">{pkg.title}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1"><Clock size={11} /> {pkg.duration}</div>
            <div className="flex items-center gap-1"><MapPin size={11} /> {pkg.destination}</div>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {pkg.highlights.slice(0, 3).map((h) => (
              <span key={h} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{h}</span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <span className="text-xs text-gray-400 line-through">৳{pkg.originalPrice.toLocaleString()}</span>
              <p className="text-blue-600 font-bold text-lg">৳{pkg.price.toLocaleString()}</p>
              <span className="text-xs text-gray-400">per person</span>
            </div>
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Flight Deal Card ─────────────────────────────────────────
function FlightDealCard({ flight }: { flight: typeof FLIGHTS[0] }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg p-5 transition-all duration-300">
      <Link href="/flights">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Plane size={20} />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">{flight.airline}</p>
              <p className="text-xs text-gray-400">{flight.flightNumber}</p>
            </div>
          </div>
          <Badge variant={flight.refundable ? 'success' : 'secondary'}>
            {flight.refundable ? 'Refundable' : 'Non-refundable'}
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-center">
            <p className="text-2xl font-black text-gray-900">{flight.departure}</p>
            <p className="text-xs text-gray-500 font-medium">{flight.from.code}</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-0.5">
            <p className="text-xs text-gray-400">{flight.duration}</p>
            <div className="w-full flex items-center gap-1">
              <div className="h-px flex-1 bg-gray-200" />
              <Plane size={13} className="text-blue-500" />
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <p className="text-xs text-gray-400">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-gray-900">{flight.arrival}</p>
            <p className="text-xs text-gray-500 font-medium">{flight.to.code}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400">From</span>
            <p className="text-blue-600 font-black text-xl">৳{flight.price.toLocaleString()}</p>
          </div>
          <Button size="sm">Book Now</Button>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Review Card ──────────────────────────────────────────────
function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col gap-4">
      <StarRating rating={review.rating} />
      <p className="text-gray-600 text-sm leading-relaxed flex-1">&quot;{review.comment}&quot;</p>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
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
      className={`py-16 ${className || ''}`}
    >
      {children}
    </motion.section>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&auto=format&fit=crop&q=80"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/70 to-blue-800/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Badge className="bg-white/20 text-white backdrop-blur-sm mb-4 border border-white/30 text-sm px-3 py-1">
                🌍 Premium Travel Experience
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Explore the World,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Your Way
                </span>
              </h1>
              <p className="text-blue-100 text-xl mb-8 max-w-lg leading-relaxed">
                Find the best deals on flights, hotels, and tour packages. Your dream vacation is just a search away.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/flights">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-lg">
                    <Plane size={18} /> Book a Flight
                  </Button>
                </Link>
                <Link href="/tours">
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    Explore Tours <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-10">
                {[
                  { value: '50K+', label: 'Happy Travelers' },
                  { value: '200+', label: 'Destinations' },
                  { value: '4.9★', label: 'Average Rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Search widget floats on hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <SearchWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">Popular Destinations</h2>
              <p className="section-subtitle">Explore trending travel spots loved by thousands</p>
            </div>
            <Link href="/tours">
              <Button variant="outline" size="sm">
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

      {/* Featured Flight Deals */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">Special Flight Deals</h2>
              <p className="section-subtitle">Grab these limited-time offers before they&apos;re gone</p>
            </div>
            <Link href="/flights">
              <Button variant="outline" size="sm">
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

      {/* Trending Tour Packages */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">Trending Tour Packages</h2>
              <p className="section-subtitle">Handpicked packages for unforgettable experiences</p>
            </div>
            <Link href="/tours">
              <Button variant="outline" size="sm">
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

      {/* Featured Hotels */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">Featured Hotels</h2>
              <p className="section-subtitle">Top-rated hotels for your perfect stay</p>
            </div>
            <Link href="/hotels">
              <Button variant="outline" size="sm">
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

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="section-title">Why Choose SkyRoute?</h2>
            <p className="section-subtitle">We make travel seamless, affordable, and unforgettable</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Best Price Guarantee', desc: 'Find a cheaper price? We\'ll match it and give you an extra 10% off.', color: 'bg-blue-50 text-blue-600' },
              { icon: Shield, title: 'Secure Booking', desc: '100% secure payment gateway with SSL encryption for your peace of mind.', color: 'bg-emerald-50 text-emerald-600' },
              { icon: Clock, title: '24/7 Support', desc: 'Our expert travel support team is always available to assist you anytime.', color: 'bg-purple-50 text-purple-600' },
              { icon: TrendingUp, title: 'Exclusive Deals', desc: 'Members get access to exclusive offers and early-bird discounts.', color: 'bg-orange-50 text-orange-600' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="text-center p-6">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={26} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Customer Reviews */}
      <Section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-subtitle">Real stories from real travelers</p>
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

      {/* Partner Airlines */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Our Partner Airlines</h2>
            <p className="text-gray-400 text-sm mt-2">We partner with the world&apos;s leading airlines</p>
          </motion.div>
          <motion.div variants={stagger} className="flex flex-wrap items-center justify-center gap-6">
            {AIRLINES.map((airline) => (
              <motion.div
                key={airline.id}
                variants={fadeUp}
                className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="text-gray-400">
                  <Plane size={24} />
                </div>
                <span className="text-gray-700 font-medium text-sm">{airline.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">Travel Blogs</h2>
              <p className="section-subtitle">Tips, guides, and inspiration for your next adventure</p>
            </div>
            <Link href="/blogs">
              <Button variant="outline" size="sm">All Blogs <ChevronRight size={15} /></Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BLOGS.map((blog) => (
              <motion.div key={blog.id} variants={fadeUp} whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/blogs/${blog.id}`}>
                  <div className="h-44 overflow-hidden relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg">{blog.category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-2">{blog.title}</h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
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

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-black text-white mb-3">Ready for Your Next Adventure?</h2>
            <p className="text-blue-100 text-lg mb-8">Create an account and unlock exclusive member deals and personalized offers.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
                  <Users size={18} /> Get Started — It&apos;s Free
                </Button>
              </Link>
              <Link href="/tours">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
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
