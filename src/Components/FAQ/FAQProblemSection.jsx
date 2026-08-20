import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAQProblemSection({ onOpenModal }) {
  const navigate = useNavigate();

  const commonPainPoints = [
    "Unsure if you need SEO, Ads, or a Web Redesign",
    "Struggling to generate predictable online leads",
    "Wanting a cohesive strategy across all channels",
    "Seeking transparent ROI & performance tracking"
  ];

  return (
    <section className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple, #C8B6E2)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column Content */}
          <div className="flex flex-col pr-0 lg:pr-8">
            
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
                Start With The Problem
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] mb-8" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
              You don’t need to know the answer before you ask the question.
            </h2>

            {/* Body Copy */}
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed mb-6" style={{ color: '#334155' }}>
              If you know something needs to improve but are not sure whether the answer is SEO, social media, paid advertising, content, a new website, branding or a broader strategy, tell us what is happening.
            </p>
            <p className="text-[16px] md:text-[18px] font-bold mb-8" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
              We can start from the problem and work towards the right direction.
            </p>

            {/* Pain Points as simple clean list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {commonPainPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent-orange)' }}></span>
                  <span className="text-[14.5px] md:text-[15px] font-medium leading-snug" style={{ color: '#334155' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-[0_4px_14px_rgba(224,131,38,0.3)] transition-all flex items-center gap-2 group"
              >
                <span>Talk to ADSSERV</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-[var(--brand-navy)] font-bold text-[15px] rounded-full border border-gray-200 shadow-sm transition-all flex items-center gap-2"
              >
                <span>Contact Us</span>
                <MessageSquare className="w-4 h-4 text-gray-400" />
              </button>
            </div>

          </div>

          {/* Right Column Content - Glass Panel (Diagnostic Approach) */}
          <div className="relative mt-8 lg:mt-0">
            <div
              className="p-8 md:p-10 rounded-[40px] backdrop-blur-xl relative z-10 w-full max-w-[550px] ml-auto"
              style={{
                background: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(255,255,255,0.55)',
                boxShadow: '0 20px 60px rgba(11,31,82,0.18), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}
            >
              <p
                className="uppercase tracking-widest font-semibold mb-6"
                style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Diagnostic Approach
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/80 border border-white rounded-2xl p-5 shadow-sm">
                  <div className="text-[11px] font-bold text-[var(--accent-orange)] uppercase tracking-wider mb-1">Step 01</div>
                  <div className="text-[16px] font-bold text-[var(--brand-navy)] mb-1">Describe Your Current Challenge</div>
                  <div className="text-[14px] font-medium text-slate-500">Low organic reach? Low lead conversions? Dated branding?</div>
                </div>

                <div className="bg-white/80 border border-white rounded-2xl p-5 shadow-sm">
                  <div className="text-[11px] font-bold text-[var(--accent-orange)] uppercase tracking-wider mb-1">Step 02</div>
                  <div className="text-[16px] font-bold text-[var(--brand-navy)] mb-1">Digital Auditing & Priority Mapping</div>
                  <div className="text-[14px] font-medium text-slate-500">We analyze market competition, technical gaps, and quick wins.</div>
                </div>

                <div className="bg-white/80 border border-white rounded-2xl p-5 shadow-sm">
                  <div className="text-[11px] font-bold text-[var(--accent-orange)] uppercase tracking-wider mb-1">Step 03</div>
                  <div className="text-[16px] font-bold text-[var(--brand-navy)] mb-1">Tailored Action Strategy</div>
                  <div className="text-[14px] font-medium text-slate-500">Deploy only the exact services that drive your business objective.</div>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full mt-8 py-4 bg-[var(--brand-navy)] hover:bg-[#111827] text-white font-bold text-[15px] rounded-2xl text-center shadow-md transition-colors"
              >
                Start Your Free Strategy Session →
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
