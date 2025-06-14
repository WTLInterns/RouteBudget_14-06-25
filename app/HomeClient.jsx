// app/HomeClient.jsx
'use client';

import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Pricing from '../components/Pricing';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export default function HomeClient() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
