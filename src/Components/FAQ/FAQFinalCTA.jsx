import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

export default function FAQFinalCTA({ onOpenModal }) {
  return (
    <section className="w-full py-32 relative font-primary overflow-hidden bg-white border-t border-gray-100">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full opacity-[0.04] blur-[100px]" style={{ background: 'var(--brand-navy)' }}></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full opacity-[0.05] blur-[80px]" style={{ background: 'var(--accent-orange)' }}></div>
      </div>

      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        
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
            Have Another Question?
          </span>
        </div>

        {/* H2 Heading */}
        <h2 className="text-[44px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8 max-w-[900px]" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
          Let’s find the right answer for your business.
        </h2>

        {/* Body Copy */}
        <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto mb-12">
          Every business has a different starting point. If your question is not covered here, send it to us and let’s discuss what you are trying to achieve.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-md transition-all flex items-center gap-2 group"
          >
            <span>Ask Our Team</span>
            <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
