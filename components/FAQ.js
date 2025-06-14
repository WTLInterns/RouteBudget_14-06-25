'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the expense tracking system work?",
    answer: "Our system has two main components: a web dashboard for administrators and a mobile app for drivers. Drivers record expenses through the app, which are then synced to the central system. Administrators can review, approve/reject, and analyze expenses through the web dashboard."
  },
  {
    question: "Is the system suitable for different types of fleets?",
    answer: "Yes, our system is designed to be flexible and can accommodate various fleet types including taxi services, courier companies, corporate fleets, and more. The system can be customized based on your specific requirements."
  },
  {
    question: "How secure is the data in your system?",
    answer: "We implement industry-standard security protocols including end-to-end encryption, secure authentication, and regular security audits. All data is stored in secure, redundant servers with regular backups to ensure your information is safe and accessible."
  },
  {
    question: "Can the system integrate with our existing accounting software?",
    answer: "Yes, our system offers integration capabilities with popular accounting software like Tally, QuickBooks, and Xero. We also provide API access for custom integrations with your existing systems."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. This allows you to evaluate the system thoroughly before making a decision. No credit card is required to start the trial."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including detailed documentation, video tutorials, email support, and phone support for Professional and Enterprise plans. Enterprise clients also receive a dedicated account manager."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f0f9ff] via-[#fef9c3] to-[#ffe4e6] overflow-hidden">
      
      {/* Blobs for background effect */}
      <div className="absolute w-96 h-96 bg-blue-200 rounded-full top-0 -left-20 blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-pink-200 rounded-full bottom-0 -right-20 blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions </h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our Route Budget management system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up delay-200">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-300 border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-300" />
                )}
              </button>
              {/* Animate Answer Opening */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                } text-gray-700`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-up delay-500">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;