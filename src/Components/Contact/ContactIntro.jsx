import React from 'react';
import { introData } from './contactData';

export default function ContactIntro() {
  return (
    <section className="w-full py-20 bg-white font-primary border-b border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center">
        
        {/* Standard Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span
            className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
            style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
          >
            <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="italic font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
          >
            {introData.eyebrow}
          </span>
        </div>

        {/* H2 */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
          {introData.title}
        </h2>

        {/* Body Copy */}
        <div className="text-[16px] md:text-[18px] font-medium leading-relaxed space-y-4 max-w-3xl mx-auto" style={{ color: '#334155' }}>
          {introData.body.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
