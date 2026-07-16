import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UserWishlistPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">My Wishlist</h1>
          <p className="text-sm text-gray-500 mt-1">Saved hotels, flights, and tours for later.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
              Start exploring our amazing deals and save your favorites here for quick access later.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8">
                Explore Deals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
