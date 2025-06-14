import { Truck, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-20 w-20 text-blue-400" />
              <span className="ml-2 font-bold text-xl"> Contact Route Budget – Route Budget Tracker Software in India</span>
            </div>
            <p className="text-gray-400 mb-6">
              Reach out to Route Budget, India's top Route Budget tracker software. Let us
              help you reduce costs and improve fleet operations.
            </p>
            <p className="text-gray-400 mb-6">
              Need Help or a Demo?
            </p>
            <p className="text-gray-400 mb-6">
              We'd love to hear from you! Whether you're a travel business or an individual driver, our team is
              ready to assist.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'Solutions','Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={20} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://webutsav.com/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  https://webutsav.com/
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+918166922792"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 8166922792
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.routebudget.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  www.routebudget.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none flex-grow"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} webutsav. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;