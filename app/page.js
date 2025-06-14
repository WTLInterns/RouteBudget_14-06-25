// import Features from '../components/Features';
// import ContactForm from '../components/ContactForm';
// import Pricing from '../components/Pricing';
// import Solutions from '../components/Solutions';
// import Testimonials from '../components/Testimonials';
// import Hero from '../components/Hero';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import FAQ from '../components/FAQ';

// export default function Home() {
//   return (
//     <main>
//       <Header />
//       <Hero />
//       <Features />
//       <Solutions />
//       <Pricing />
//       <Testimonials />
//       <FAQ />
//       <ContactForm />
//       <Footer />
//     </main>
//   );
// }





import HomeClient from './HomeClient';

export const metadata = {
  title: 'Route Budget - Fleet Expense Management',
  description: "India's smartest Route Budget tracker for drivers, managers, and travel agencies.",
  alternates: {
    canonical: 'https://routebudget.com',
  },
};

export default function HomePage() {
  return <HomeClient />;
         
}
