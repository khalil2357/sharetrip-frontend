import Link from 'next/link';
import { Plane, Mail, Phone, MapPin, Send } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  services: [
    { label: 'Flights', href: '/flights' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Tour Packages', href: '/tours' },
    { label: 'Visa Services', href: '/visa' },
    { label: 'Travel Insurance', href: '/insurance' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Support Ticket', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Get Exclusive Travel Deals</h3>
              <p className="text-blue-100 text-sm mt-1">Subscribe to our newsletter and never miss an offer.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 h-11 px-4 rounded-xl bg-white/20 text-white placeholder:text-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <button className="h-11 px-5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm whitespace-nowrap">
                <Send size={15} /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Plane size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Sky<span className="text-blue-400">Route</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted travel partner for flights, hotels, tour packages, visa services, and more. Explore the world with confidence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={14} className="text-blue-400" />
                +880 1700-000000
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={14} className="text-blue-600" />
                support@skyroute.com
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} className="text-blue-400" />
                Banani, Dhaka 1213, Bangladesh
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'FB', href: '#' },
                { label: 'IG', href: '#' },
                { label: 'TW', href: '#' },
                { label: 'YT', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold text-white mb-4 capitalize">{key}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-sm transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner Airlines */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <p className="text-xs text-gray-500 mb-4 text-center">Partner Airlines</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {['Biman Bangladesh', 'Emirates', 'Qatar Airways', 'Singapore Airlines', 'Turkish Airlines', 'Air Arabia'].map((airline) => (
              <span key={airline} className="text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-lg">
                {airline}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SkyRoute. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
