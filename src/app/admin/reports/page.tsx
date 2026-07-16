import { BarChart3, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminReportsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Analytics & Reports</h1>
            <p className="text-sm text-gray-500 mt-1">Generate financial and user activity reports.</p>
          </div>
          <Button variant="outline" className="gap-2 rounded-xl">
            <Download size={16} /> Export Full Report
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Report Builder</h3>
            <p className="text-gray-500 text-sm">Select date ranges to generate custom reports.</p>
            <div className="mt-6 flex gap-3 justify-center">
              <Button variant="outline" size="sm">Last 7 Days</Button>
              <Button variant="outline" size="sm">This Month</Button>
              <Button variant="outline" size="sm">This Year</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
