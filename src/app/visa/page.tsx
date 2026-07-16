'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VISA_COUNTRIES } from '@/lib/dummy-data';

export default function VisaPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* ── PREMIUM VISA HERO ── */}
      <div className="relative pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=3000&q=80" 
            alt="Travel Visa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe size={48} className="mx-auto mb-6 text-white/90 drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6" style={{letterSpacing: '-0.02em'}}>
            Global <span className="italic font-light">Access</span>
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Fast, reliable, and hassle-free visa processing for 50+ countries worldwide.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT (OVERLAPPING SECTION) ── */}
      <div className="bg-gray-50 rounded-t-[3rem] relative z-20 -mt-16 pt-16 pb-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISA_COUNTRIES.map((visa, i) => (
            <motion.div key={visa.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-36 overflow-hidden">
                <img src={visa.image} alt={visa.country} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-3xl">{visa.flag}</span>
                  <p className="font-bold text-lg">{visa.country}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="flex items-center gap-1 text-gray-500"><Clock size={12} /> {visa.processingTime}</span>
                  <span className="text-blue-600 font-bold">৳{visa.fee.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{visa.type}</span>
                  <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">{visa.validity}</span>
                </div>
                <ul className="text-xs text-gray-500 space-y-1 mb-4">
                  {visa.requirements.slice(0, 3).map((r) => (
                    <li key={r} className="flex items-center gap-1"><CheckCircle size={10} className="text-emerald-500 flex-shrink-0" /> {r}</li>
                  ))}
                </ul>
                <Link href={`/visa/${visa.id}`}>
                  <Button className="w-full" size="sm">Apply Now</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
