import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import Services from '../HomePage/Services/Services';
import '../HomePage/common.css';

export default function ServicesPage() {
  // Ensure the page loads at the top when navigating to it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Services Hero Banner */}
      <section className="w-full pt-36 pb-16 bg-white border-b border-slate-100 font-primary">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
            What We Do
          </span>
          <h1 className="text-[42px] md:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-6" style={{ color: 'var(--brand-navy)' }}>
            Our Services
          </h1>
          <p className="max-w-[680px] mx-auto text-[18px] md:text-[20px] text-slate-600 font-medium leading-relaxed">
            From strategy to execution, we offer the full range of digital marketing services your brand needs to grow.
          </p>
        </div>
      </section>

      {/* Reuse the existing Services component from the homepage */}
      <Services />

      <Footer />
    </div>
  );
}
