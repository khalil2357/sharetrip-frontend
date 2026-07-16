'use client';

import { User, Camera, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store';

export default function UserProfilePage() {
  const { user } = useAuthStore();
  
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">My Profile</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your personal information and preferences.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black shadow-inner">
                {user?.name?.slice(0, 2).toUpperCase() || 'U'}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600">
                <Camera size={14} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{user?.name || 'Traveler'}</h2>
              <p className="text-gray-500 text-sm">{user?.email}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" defaultValue={user?.name || ''} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" defaultValue={user?.email || ''} readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-500 cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="+880 1..." className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passport Number (Optional)</label>
                <input type="text" placeholder="AB1234567" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 rounded-xl">
                <Save size={16} /> Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
