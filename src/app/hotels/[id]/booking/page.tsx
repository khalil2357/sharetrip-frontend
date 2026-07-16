'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Shield, CreditCard, Hotel, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HOTELS } from '@/lib/dummy-data';

export default function HotelBookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const hotel = HOTELS.find(h => h.id === id) || HOTELS[0];
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    firstName: 'Ibrahim',
    lastName: 'Khalil',
    email: 'ibrahim@skyroute.com',
    phone: '+880 1700 000000',
    checkIn: '2025-07-20',
    checkOut: '2025-07-23',
    guests: 2,
    rooms: 1,
  });

  const nights = 3;
  const basePrice = hotel.pricePerNight * nights * form.rooms;
  const taxes = Math.floor(basePrice * 0.15);
  const total = basePrice + taxes;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/bookings');
      }, 2000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-6">Your stay at {hotel.name} has been booked successfully. Redirecting to your bookings...</p>
          <div className="bg-gray-50 rounded-xl p-4 text-left border border-gray-100">
            <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Booking ID</span><span className="font-bold text-gray-900">BKG-{Math.floor(Math.random() * 10000)}</span></div>
            <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Check-in</span><span className="font-bold text-gray-900">{form.checkIn}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Total Paid</span><span className="font-bold text-blue-600">৳{total.toLocaleString()}</span></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/hotels/${id}`} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-6 font-medium">
          <ArrowLeft size={16} /> Back to Hotel
        </Link>
        <h1 className="text-3xl font-black text-gray-900 mb-8">Complete Your Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">1</span> Guest Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">2</span> Payment Method
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border border-blue-500 bg-blue-50 rounded-xl cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="accent-blue-600 w-4 h-4" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Credit / Debit Card</p>
                    <p className="text-xs text-gray-500 mt-0.5">Visa, MasterCard, Amex</p>
                  </div>
                  <CreditCard size={24} className="text-blue-600" />
                </label>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="col-span-2">
                    <input placeholder="Card Number" className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <input placeholder="MM/YY" className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <input placeholder="CVC" className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
              <div className="p-5 border-b border-gray-100 bg-gray-50">
                <h3 className="font-bold text-gray-900 flex items-center gap-2"><Hotel size={18} className="text-blue-600" /> Booking Summary</h3>
              </div>
              <div className="p-5">
                <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                  <img src={hotel.image} alt={hotel.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">{hotel.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><MapPin size={10} /> {hotel.location}</p>
                    <p className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-block mt-2 font-medium">{hotel.type}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-100 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500 flex items-center gap-1.5"><Calendar size={14} /> Check-in</span><span className="font-medium text-gray-900">{form.checkIn}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500 flex items-center gap-1.5"><Calendar size={14} /> Check-out</span><span className="font-medium text-gray-900">{form.checkOut}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Guests & Rooms</span><span className="font-medium text-gray-900">{form.guests} Guests, {form.rooms} Room</span></div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Base Price ({nights} nights x {form.rooms} room)</span><span className="font-medium text-gray-900">৳{basePrice.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Taxes & Fees</span><span className="font-medium text-gray-900">৳{taxes.toLocaleString()}</span></div>
                  <div className="flex justify-between pt-3 border-t border-dashed border-gray-200">
                    <span className="font-bold text-gray-900 text-base">Total Amount</span>
                    <span className="font-black text-blue-600 text-xl">৳{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button onClick={handleBooking} className="w-full h-12 text-base" disabled={loading}>
                  {loading ? 'Processing...' : 'Confirm Booking'}
                </Button>
                <div className="flex items-center gap-2 justify-center text-xs text-gray-500 mt-4">
                  <Shield size={14} className="text-emerald-500" /> Secure encrypted payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
