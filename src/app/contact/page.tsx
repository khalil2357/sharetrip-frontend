import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl font-black mb-2">Contact Us</h1>
          <p className="text-blue-100">We're here to help you plan your perfect trip</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Get in Touch</h3>
              {[
                { icon: Phone, label: 'Phone', value: '+880 1700-000000', sub: 'Mon-Fri, 9am-6pm' },
                { icon: Mail, label: 'Email', value: 'support@skyroute.com', sub: 'Reply within 24h' },
                { icon: MapPin, label: 'Office', value: 'Banani, Dhaka 1213', sub: 'Bangladesh' },
                { icon: Clock, label: 'Hours', value: '9:00 AM – 6:00 PM', sub: 'Saturday closed' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.value}</p>
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-bold text-gray-900 mb-6 text-xl">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input placeholder="Your name" className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input placeholder="How can we help?" className="w-full h-11 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea rows={5} placeholder="Describe your query in detail..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 resize-none" />
              </div>
              <Button type="submit" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
