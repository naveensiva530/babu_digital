import React from 'react';
import { Send, ArrowRight, Rocket } from 'lucide-react';
import { finalCTAData, footerPromptData } from './contactData';

export default function ContactFinalCTA({ onScrollToForm }) {
  return (
    <section className="w-full py-32 bg-white font-primary border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-16">
        
        {/* Main Final CTA Banner */}
        <div className="relative text-center flex flex-col items-center">
          
          {/* Subtle bg decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full opacity-[0.04] blur-[100px]" style={{ background: 'var(--brand-navy)' }}></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full opacity-[0.05] blur-[80px]" style={{ background: 'var(--accent-orange)' }}></div>
          </div>

          <div className="relative z-10">
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
                {finalCTAData.eyebrow}
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-[44px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8 max-w-[900px]" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
              {finalCTAData.title}
            </h2>

            {/* Body Copy */}
            <div className="text-[18px] font-medium leading-relaxed max-w-[650px] mx-auto mb-12 space-y-3" style={{ color: '#334155' }}>
              {finalCTAData.body.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                onClick={onScrollToForm}
                className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-md transition-all flex items-center gap-2 group"
              >
                <span>{finalCTAData.cta}</span>
                <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Contact Prompt Strip */}
        <div className="text-white rounded-[2rem] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden" style={{ backgroundColor: 'var(--brand-navy, #1e2f57)' }}>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="space-y-3 max-w-2xl text-left relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[var(--accent-orange)]">
              <Rocket className="w-4 h-4" />
              <span>THE ADSSERV PROMISE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {footerPromptData.title}
            </h3>
            <p className="text-white/80 text-[15px] font-medium leading-relaxed">
              {footerPromptData.supportingCopy}
            </p>
          </div>

          <button
            onClick={onScrollToForm}
            className="px-8 py-4 bg-white text-[var(--brand-navy)] hover:bg-gray-50 font-bold text-[15px] rounded-full shadow-md flex items-center gap-3 flex-shrink-0 transition-all cursor-pointer relative z-10 group"
          >
            <span>{footerPromptData.cta}</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
