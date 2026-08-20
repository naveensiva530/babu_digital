import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import ContactHero from '../Contact/ContactHero';
import ContactFormSection from '../Contact/ContactFormSection';
import ContactFAQSection from '../Contact/ContactFAQSection';
import ContactFinalCTA from '../Contact/ContactFinalCTA';
import '../HomePage/common.css';

export default function ContactPage() {
  const [preselectedService, setPreselectedService] = useState('SEO Services');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = (serviceName) => {
    setPreselectedService(serviceName);
    scrollToForm();
  };

  // Schema.org JSON-LD Structured Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ADSSERV - Digital Marketing Agency",
    "description": "Have a new idea, a growth challenge or a digital presence that needs a rethink? Contact ADSSERV today.",
    "url": "https://adsserv.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "ADSSERV",
      "email": "hello@adsserv.com",
      "telephone": "+1 (555) 019-2834",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "450 Lexington Ave",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10017",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* HERO */}
        <ContactHero
          onScrollToForm={scrollToForm}
          onScrollToServices={scrollToServices}
        />

        {/* ENQUIRY FORM & CONTACT DETAILS (Two-Column Layout) */}
        <ContactFormSection preselectedService={preselectedService} />

        {/* CONTACT FAQ */}
        <ContactFAQSection />

        {/* FINAL CTA & FOOTER PROMPT */}
        <ContactFinalCTA onScrollToForm={scrollToForm} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
