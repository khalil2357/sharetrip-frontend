import { Settings, Shield, BellRing, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UserSettingsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">Account Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your security and notification preferences.</p>
        </div>

        <div className="space-y-6">
          {/* Security */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Shield size={20} className="text-blue-600" /> Security & Password
            </h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Update Password</Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <BellRing size={20} className="text-blue-600" /> Notifications
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">Email updates on bookings</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">Promotional offers and deals</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">SMS alerts for flight delays</span>
              </label>
            </div>
            <div className="mt-5">
              <Button variant="outline" className="gap-2 rounded-xl">
                <Save size={16} /> Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
