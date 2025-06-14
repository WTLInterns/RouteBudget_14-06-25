import { Fuel, Tag, PenTool as Tool, BarChart3, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Fuel size={30} />,
    title: 'ERP-Based Multi-Admin System',
    description: `Route Budget is built on a powerful ERP foundation, offering:
- Master Admin Panel to oversee company-wide data
- Sub-Admin Access for team members or franchise locations
- Access Control & Permissions to maintain data security
- Record and monitor all fuel expenses with details on quantity, cost, and mileage for complete transparency`
  },
  {
    icon: <Tag size={30} />,
    title: 'Intelligent Expense Logging',
    description: `Track and categorize daily vehicle expenses in seconds:
- Fuel Costs: Record price per litre, quantity, and vendor location
- Toll & Parking Fees: Auto-log route-based tolls and stops
- Vehicle Maintenance: From minor repairs to major servicing`
  },
  {
    icon: <Tool size={30} />,
    title: 'Real-Time Image Upload',
    description: `Say goodbye to paper receipts. Upload images directly:
- Fuel bills
- Puncture/tire repair receipts
- Damage reports
- Parking slips`
  },
  {
    icon: <BarChart3 size={30} />,
    title: 'Cloud-Based Access with Real-Time Sync',
    description: `Route Budget uses secure cloud storage:
- Auto-syncs data across devices (mobile, desktop)
- Access your data anytime, anywhere`
  },
  {
    icon: <Clock size={30} />,
    title: 'Visual Dashboard for Smart Insights',
    description: `No more complex spreadsheets:
- Graphical expense reports
- Vehicle-wise breakdown
- Monthly and custom reporting filters`
  },
  {
    icon: <Shield size={30} />,
    title: 'Alerts & Notifications',
    description: `Stay informed:
- Low fuel efficiency warnings
- Over-budget alerts
- Insurance renewal reminders`
  },
  {
    icon: <Clock size={30} />,
    title: 'Mobile-Friendly Interface',
    description: `Use Route Budget on the go:
- Log entries via mobile camera
- Get instant insights in your hand
- No tech skills needed`
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-[#e0f7fa] to-[#fce4ec]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-300 opacity-20 rounded-full top-0 -left-24 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-blue-300 opacity-20 rounded-full bottom-0 right-0 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-up">
            Key Features of Route Budget Tracker Software
          </h2>
          <p className="text-lg text-gray-700 animate-fade-up delay-100">
            Discover Route Budget — India's smartest Route Budget tracker for drivers, managers, and travel agencies.
          </p>
          <p className="mt-4 text-lg text-gray-700 animate-fade-up delay-200">
            Real-time tracking, full transparency, effortless management. Drive smarter today!
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-1 group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-shimmer" />

              {/* Floating Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-100 to-pink-100 text-blue-600 rounded-2xl mb-6 shadow-md animate-float">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;