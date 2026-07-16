import Link from 'next/link';
import { Globe, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VisaDetailsPage({ params }: { params: { id: string } }) {
  // Using params.id to simulate dynamic content
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-0">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Globe size={40} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-black text-gray-900 mb-2">Tourist Visa</h1>
              <p className="text-gray-500 mb-4 flex items-center gap-2">
                <MapPin size={16} /> Destination: <span className="font-semibold text-gray-900">United Arab Emirates</span>
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-50 px-4 py-2 rounded-xl">
                  <p className="text-xs text-gray-500">Processing Time</p>
                  <p className="font-bold text-gray-900 flex items-center gap-1"><Clock size={14} className="text-blue-600"/> 3-5 Working Days</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-xl">
                  <p className="text-xs text-gray-500">Validity</p>
                  <p className="font-bold text-gray-900">30 Days</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-xl">
                  <p className="text-xs text-gray-500">Entry Type</p>
                  <p className="font-bold text-gray-900">Single Entry</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl text-center min-w-[200px]">
              <p className="text-sm text-blue-600 font-medium mb-1">Total Fee</p>
              <p className="text-3xl font-black text-blue-700 mb-4">৳ 12,500</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Apply Now</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <ul className="space-y-3">
              {[
                'Original Passport with 6 months validity',
                '2 Recent passport size photos (white background)',
                'Bank statement of last 6 months',
                'NOC from employer / Trade License',
                'Return air ticket copy'
              ].map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Visa processing time is subject to embassy approval. Incomplete documentation may lead to rejection. Visa fees are non-refundable once the application is submitted to the embassy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
