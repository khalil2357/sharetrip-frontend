'use client';

import { FAQS } from '@/lib/dummy-data';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FaqItem({ faq }: { faq: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
        <ChevronDown size={18} className={`text-blue-600 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl font-black mb-2">Frequently Asked Questions</h1>
          <p className="text-blue-100">Find answers to common questions about SkyRoute services</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-3">
          {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
        </div>
      </div>
    </div>
  );
}
