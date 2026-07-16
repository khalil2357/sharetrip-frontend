export default function AboutPage() {
  const stats = [
    { value: '50,000+', label: 'Happy Travelers' },
    { value: '200+', label: 'Destinations Covered' },
    { value: '12+', label: 'Years of Excellence' },
    { value: '4.9/5', label: 'Customer Rating' },
  ];
  const team = [
    { name: 'Rafiqul Islam', role: 'CEO & Founder', avatar: 'RI' },
    { name: 'Sarah Ahmed', role: 'Head of Operations', avatar: 'SA' },
    { name: 'Karim Hossain', role: 'Chief Technology Officer', avatar: 'KH' },
    { name: 'Nadia Chowdhury', role: 'Head of Customer Success', avatar: 'NC' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-black mb-4">About SkyRoute</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            We are Bangladesh's leading online travel platform, dedicated to making travel accessible, affordable, and memorable for everyone.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black text-blue-600">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2 mb-4">Making Travel Dreams a Reality Since 2013</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              SkyRoute was founded with a simple mission: to democratize travel for everyone. Starting from a small office in Dhaka, we have grown into a full-scale travel technology company serving over 50,000 travelers annually.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Today, we offer comprehensive travel solutions including flights, hotels, tour packages, visa services, and travel insurance — all under one roof, with the best prices guaranteed.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop" alt="Team" className="w-full h-72 object-cover" />
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">Meet Our Team</h2>
          <p className="text-gray-400 mt-2">The passionate people behind SkyRoute</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
