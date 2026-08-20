import React from 'react';
import { whyTalkData } from './contactData';
import { ArrowRight } from 'lucide-react';

export default function ContactWhyTalk({ onScrollToForm }) {
  return (
    <section className="w-full py-24 bg-white font-primary relative overflow-hidden border-b border-gray-100">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[80px] pointer-events-none opacity-60" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white border border-gray-200 rounded-[2rem] p-10 sm:p-14 md:p-20 shadow-xl shadow-gray-200/50 relative overflow-hidden">
          
          <div className="max-w-3xl relative z-10">
            
            {/* Standard Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
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
                {whyTalkData.eyebrow}
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] mb-6" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
              {whyTalkData.title}
            </h2>

            {/* Body */}
            <div className="text-[16px] md:text-[18px] font-medium leading-relaxed space-y-5 mb-10" style={{ color: '#334155' }}>
              {whyTalkData.body.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onScrollToForm}
                className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Start Your Discussion Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
