import { Settings, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminSettingsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Platform Settings</h1>
            <p className="text-sm text-gray-500 mt-1">Configure global application preferences.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 rounded-xl">
            <Save size={16} /> Save Changes
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Settings size={20} className="text-blue-600" /> General Configuration
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
              <input type="text" defaultValue="SkyRoute" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
              <input type="email" defaultValue="support@skyroute.com" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
