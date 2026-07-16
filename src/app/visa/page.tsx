'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VISA_COUNTRIES } from '@/lib/dummy-data';

export default function VisaPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Globe size={40} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl font-black mb-2">Visa Services</h1>
          <p className="text-indigo-200">Fast, reliable, and hassle-free visa processing for 50+ countries</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
  );
}
