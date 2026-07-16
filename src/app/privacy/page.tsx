export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support. This includes your name, email address, phone number, payment information, and travel preferences.',
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to process your bookings, send confirmation emails and booking receipts, provide customer support, send promotional communications (with your consent), and improve our services.',
    },
    {
      title: '3. Information Sharing',
      content: 'We do not sell your personal information to third parties. We may share your information with travel providers (airlines, hotels) to fulfill your bookings, payment processors to process transactions, and service providers who assist us in operating our platform.',
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted using SSL technology.',
    },
    {
      title: '5. Cookies',
      content: 'We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
    },
    {
      title: '6. Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time through your account settings. You may also contact us to exercise any rights under applicable data protection laws.',
    },
    {
      title: '7. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at privacy@skyroute.com or at our Dhaka office address.',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl font-black mb-2">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: June 1, 2025</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8">
          <p className="text-gray-500 leading-relaxed">
            At SkyRoute, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
