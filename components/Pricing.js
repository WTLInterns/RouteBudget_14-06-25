import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    bestFor: "Individual Drivers",
    price: "₹299",
    period: "per month",
    description: "Perfect for small fleets with basic expense tracking needs.",
    features: [
      "Up to 1-3 vehicles",
      "Basic expense tracking",
      "Fuel and FastTag management",
      "Monthly reports",
      "Email support",
      "1 admin user",
      "Toll and image upload",
    ],
    isPopular: false,
    buttonText: "Get Started",
    buttonClass: "bg-white text-blue-900 hover:bg-gray-100"
  },
  {
    name: "Professional",
    bestFor: "Small Fleet Managers",
    price: "₹799",
    period: "per month",
    description: "Ideal for growing fleets requiring advanced features.",
    features: [
      "4-15 vehicles",
      "Advanced expense categories",
      "Comprehensive analytics",
      "Approval workflows",
      "Priority support",
      "5 admin users",
      "Driver performance metrics",
      "Live alerts"
    ],
    isPopular: true,
    buttonText: "Most Popular",
    buttonClass: "bg-teal-500 text-white hover:bg-teal-600"
  },
  {
    name: "Enterprise",
    bestFor: "Large Travel Agencies",
    price: "₹1499",
    period: "tailored pricing",
    description: "For large fleets with complex requirements and custom needs.",
    features: [
      "16+ vehicles",
      "Custom expense categories",
      "Advanced reporting & API access",
      "Multi-level approval workflows",
      "Dedicated account manager",
      "Unlimited admin users",
      "Custom integration options",
      "White-labeling available",
      "Reports, support and cloud backup",
    ],
    isPopular: false,
    buttonText: "Contact Sales",
    buttonClass: "bg-white text-blue-900 hover:bg-gray-100"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f7fa] to-[#fff1f2] overflow-hidden">
      {/* Blobs */}
      <div className="absolute w-96 h-96 bg-pink-200 rounded-full top-0 -left-20 blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-blue-200 rounded-full bottom-0 -right-20 blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Route Budget Pricing – Affordable Tracker Software Plans</h2>
          <p className="text-lg text-gray-700">
            Explore flexible and budget-friendly plans tailored for every size fleet in India.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Whether you're a solo driver or manage hundreds, Route Budget has you covered.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl bg-white border ${plan.isPopular ? 'ring-2 ring-teal-500 shadow-lg' : 'border-gray-200 shadow-sm'} animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-teal-500 text-white py-2 text-center text-sm font-semibold rounded-t-3xl">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.bestFor}</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 mt-auto ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center animate-fade-up delay-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Plans Include</h3>

          {/* Rounded Box for "All Plans Include" */}
          <div className="p-8 bg-white shadow-lg rounded-2xl mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                24/7 Customer Support
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                Mobile & Desktop Access
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                Cloud Sync & Backups
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                Unlimited Uploads
              </div>
            </div>
          </div>

          <p className="mt-8 text-gray-600">Need a custom solution? Let's talk.</p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;