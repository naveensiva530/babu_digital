import React from 'react';
import { ArrowRight, Send, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/Services_Provide/Social media marketing.webp';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';
import { heroData } from './contactData';

export default function ContactHero({ onScrollToForm, onScrollToServices }) {
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    fadeUp([refs.eyebrow, refs.heading, refs.copy, refs.ctas, refs.highlights], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.1,
    });
  });

  return (
    <>
      {/* ── BANNER HERO ─────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: '420px', marginTop: '90px' }}
      >
        <div
          className="absolute inset-0 bg-[#111827]/45 z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(135deg, rgba(109,40,217,0.55) 0%, rgba(139,92,246,0.50) 50%, rgba(167,139,250,0.45) 100%)',
          }}
        />
        
        {/* Decorative blobs */}
        <div
          className="absolute z-[2]"
          style={{
            top: '-40px', left: '-40px', width: '220px', height: '220px',
            borderRadius: '50%', background: 'rgba(196,181,253,0.18)',
            filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute z-[2]"
          style={{
            bottom: '-30px', right: '-30px', width: '180px', height: '180px',
            borderRadius: '50%', background: 'rgba(167,139,250,0.20)',
            filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="font-extrabold text-white mb-5 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}
          >
            Contact Us
          </h1>

          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full mt-1"
            style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: '#fb923c', fontWeight: 700, fontSize: '16px' }}
            >
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[16px] font-semibold" style={{ color: '#1e2f57' }}>
              Contact
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '80px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>

        <style>{`
          @keyframes floatBlob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.08) translate(10px, -10px); }
          }
        `}</style>
      </div>

      {/* ── EDITORIAL CONTENT SECTION ───────────────────────────── */}
      <section ref={sectionRef} className="w-full bg-white pt-16 pb-20 px-4 md:px-8 font-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          
          {/* Eyebrow */}
          <div ref={ref('eyebrow')} className="flex items-center justify-center gap-2 mb-6">
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
              {heroData.eyebrow}
            </span>
          </div>

          <div ref={ref('heading')} className="max-w-4xl mx-auto flex flex-col items-center">
            <ScrollRevealHeading
              className="mb-6"
              words={[
                { text: "Let’s" },
                { text: "Talk" },
                { text: "About" },
                { text: "What" },
                { text: "You’re" },
                { text: "Building.", italic: true }
              ]}
            />
          </div>

          <p ref={ref('copy')} className="text-[16px] md:text-[18px] font-medium leading-relaxed mb-10 text-[#334155] max-w-2xl">
            {heroData.supportingCopy}
          </p>

          {/* Action CTAs */}
          <div ref={ref('ctas')} className="flex flex-wrap items-center justify-center gap-4 mb-14 w-full sm:w-auto">
            <button
              onClick={onScrollToForm}
              className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-md transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <span>{heroData.primaryCTA}</span>
              <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onScrollToServices}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-[var(--brand-navy)] font-bold text-[15px] rounded-full border border-gray-200 shadow-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto group"
            >
              <span>{heroData.secondaryCTA}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Value Highlights */}
          <div ref={ref('highlights')} className="mt-8 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[var(--accent-orange)] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm border border-orange-100">
                01
              </div>
              <div>
                <div className="text-[15px] font-bold text-[var(--brand-navy)] mb-1">No Prescriptive Pitch</div>
                <div className="text-[14px] font-medium text-slate-500">We start from your exact goal.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[var(--accent-orange)] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm border border-orange-100">
                02
              </div>
              <div>
                <div className="text-[15px] font-bold text-[var(--brand-navy)] mb-1">Fast Response</div>
                <div className="text-[14px] font-medium text-slate-500">We review briefs within 24 hours.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[var(--accent-orange)] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm border border-orange-100">
                03
              </div>
              <div>
                <div className="text-[15px] font-bold text-[var(--brand-navy)] mb-1">Direct Access</div>
                <div className="text-[14px] font-medium text-slate-500">Speak directly with strategy leaders.</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
