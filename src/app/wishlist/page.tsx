'use client';

import { Heart, Trash2, Plane, Hotel, Package } from 'lucide-react';
import Link from 'next/link';
import { useWishlistStore } from '@/store';
import { Button } from '@/components/ui/button';

const typeIcon: Record<string, React.ReactNode> = {
  flight: <Plane size={20} />,
  hotel: <Hotel size={20} />,
  tour: <Package size={20} />,
};

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Heart size={28} className="text-red-500" />
          <h1 className="text-2xl font-black text-gray-900">My Wishlist</h1>
          <span className="text-sm text-gray-400">({items.length} saved)</span>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <Heart size={56} className="text-gray-200 mx-auto mb-4" />
            <p className="text-xl font-bold text-gray-400">Your wishlist is empty</p>
            <p className="text-gray-400 text-sm mt-2 mb-6">Save flights, hotels, and packages for later</p>
            <Link href="/"><Button>Explore Now</Button></Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    {typeIcon[item.type] || <Package size={20} />}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-400 capitalize">{item.type}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/${item.type === 'flight' ? 'flights' : item.type === 'hotel' ? 'hotels' : 'tours'}/${item.id}`}>
                    <Button size="sm" variant="outline">View</Button>
                  </Link>
                  <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50" onClick={() => removeItem(item.id)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
