import React from 'react';

import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';


export default function SEOReporting() {
  return (
    <section className="w-full relative font-primary py-24 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>KNOW WHAT IS MOVING</span>
            </div>
            <ScrollRevealHeading words={[{ text: "Reports" }, { text: "should" }, { text: "help" }, { text: "you" }, { text: "decide", italic: true }, { text: "what" }, { text: "to" }, { text: "do" }, { text: "next." }]} />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed" style={{ color: 'var(--text-gray)' }}>
              We can track meaningful SEO indicators such as:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full my-6">
              {[
                "Organic impressions", "Organic clicks", "Search visibility",
                "Keyword performance", "Landing-page performance", "Organic traffic",
                "Indexed pages", "Technical issues", "Engagement",
                "Organic leads", "Conversion actions"
              ].map((item, i) => (
                <li key={i} className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-center gap-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-50">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent-orange)' }}></span>
                  <span className="text-[14.5px] md:text-[15px] font-semibold leading-snug" style={{ color: 'var(--brand-navy)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mt-2" style={{ color: 'var(--text-gray)' }}>
              Where analytics and CRM data are available, SEO reporting can move beyond traffic and connect search activity with business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
