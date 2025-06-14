import { Fuel, Tag, PenTool as Tool, BarChart3, Clock, Shield } from 'lucide-react';

const solutions = [
  {
    icon: <Fuel size={30} />,
    title: 'Fuel Efficiency Tracking',
    description: 'Monitor fuel consumption trends across your fleet to optimize routes and refueling habits.'
  },
  {
    icon: <Tag size={30} />,
    title: 'Dynamic Toll Management',
    description: 'Auto-log toll expenses and analyze route cost efficiency for intercity operations.'
  },
  {
    icon: <Tool size={30} />,
    title: 'Real-Time Maintenance Logs',
    description: 'Schedule maintenance, record servicing, and avoid costly breakdowns with timely alerts.'
  },
  {
    icon: <BarChart3 size={30} />,
    title: 'Expense Analytics Dashboard',
    description: 'Visualize all expenses through interactive graphs and predictive reports.'
  },
  {
    icon: <Clock size={30} />,
    title: 'Instant Image Uploads',
    description: 'Capture and upload receipts, accident reports, and maintenance bills via mobile app.'
  },
  {
    icon: <Shield size={30} />,
    title: 'Secure Cloud Backup',
    description: 'Your data is auto-synced and securely stored on encrypted servers.'
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e0f7fa] to-[#fce4ec]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 opacity-20 rounded-full top-0 left-0 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-blue-200 opacity-20 rounded-full bottom-0 right-0 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-up">
            Route Budget – Complete Cab Expense Management Software in India
          </h2>
          <p className="text-lg text-gray-700 animate-fade-up delay-100">
            Discover how Route Budget provides end-to-end solutions for cab and travel
            businesses to reduce costs and streamline expense tracking in India.
          </p>
          <p className="mt-6 text-lg text-gray-900 font-bold animate-fade-up delay-200">
            Route Budget: The All-in-One Expense Management Solution
          </p>
          <p className="mt-2 text-lg text-gray-700 animate-fade-up delay-300">
            Route Budget is not just software; it's your digital accountant optimized for India's unique transportation sector.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-1 group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-shimmer" />

              {/* Floating Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-100 to-blue-100 text-purple-600 rounded-2xl mb-6 shadow-md animate-float">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;