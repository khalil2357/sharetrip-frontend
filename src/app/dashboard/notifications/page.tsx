'use client';

import { NOTIFICATIONS } from '@/lib/dummy-data';
import { Bell, CheckCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const typeColor: Record<string, string> = {
  success: 'bg-emerald-50 border-emerald-200',
  promo: 'bg-blue-50 border-blue-200',
  info: 'bg-gray-50 border-gray-100',
};
const typeBadge: Record<string, string> = {
  success: 'success',
  promo: 'default',
  info: 'secondary',
};

export default function NotificationsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black text-gray-900">Notifications</h1>
          <button className="flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline">
            <CheckCheck size={15} /> Mark all as read
          </button>
        </div>
        <div className="space-y-3">
          {NOTIFICATIONS.map((notif) => (
            <div key={notif.id} className={`rounded-2xl border p-4 ${typeColor[notif.type] || 'bg-white border-gray-100'}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notif.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-sm">{notif.title}</p>
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <Badge variant={typeBadge[notif.type] as any} className="text-xs">{notif.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                    <p className="text-xs text-gray-400 mt-1.5">{notif.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
