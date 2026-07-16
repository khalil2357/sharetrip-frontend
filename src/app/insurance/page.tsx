'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { INSURANCE_PLANS } from '@/lib/dummy-data';

export default function InsurancePage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* ── PREMIUM INSURANCE HERO ── */}
      <div className="relative pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=3000&q=80" 
            alt="Family Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield size={48} className="mx-auto mb-6 text-white/90 drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6" style={{letterSpacing: '-0.02em'}}>
            Travel with <span className="italic font-light">Peace of Mind</span>
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Protect your journey, health, and belongings with our comprehensive, premium insurance plans.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT (OVERLAPPING SECTION) ── */}
      <div className="bg-gray-50 rounded-t-[3rem] relative z-20 -mt-16 pt-16 pb-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSURANCE_PLANS.map((plan, i) => (
            <motion.div key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-2xl border p-6 shadow-sm relative flex flex-col ${i === 1 ? 'border-blue-500 shadow-xl ring-2 ring-blue-500 ring-offset-2 scale-105' : 'border-gray-100 hover:shadow-lg'} transition-all`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 text-xs">{plan.tag}</Badge>
                </div>
              )}
              <div className="text-center mb-6">
                <p className="font-black text-xl text-gray-900">{plan.name}</p>
                <p className="text-4xl font-black text-blue-600 mt-3">৳{plan.price.toLocaleString()}</p>
                <p className="text-gray-400 text-sm mt-1">for {plan.duration}</p>
                <div className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mt-3">
                  Coverage: {plan.coverage}
                </div>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button className={`w-full mt-6 ${i === 1 ? '' : 'bg-gray-900 hover:bg-gray-800'}`}>
                Get This Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
