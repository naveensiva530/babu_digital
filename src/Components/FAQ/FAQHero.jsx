import React from 'react';
import { Search, ChevronRight, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../../assets/Services_Provide/Social media marketing.webp';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp, scaleIn } from '../Services/SocialMedia/useScrollAnimation';

export default function FAQHero({ onOpenModal, searchQuery, onSearchChange, totalFaqs }) {
  const navigate = useNavigate();
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    fadeUp([refs.eyebrow, refs.heading], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    if (refs.rightCol) {
      fadeUp(refs.rightCol, {
        trigger: refs.rightCol,
        start: 'top 82%',
        duration: 0.5,
        y: 30,
      });
    }
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
            FAQ
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
              FAQ
            </span>
          </div>
        </div>

        {/* Curved white bottom */}
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

      {/* ── EDITORIAL CONTENT SECTION — Two-Column (About page layout) ── */}
      <section ref={sectionRef} className="w-full bg-white pt-16 pb-20 px-4 md:px-8 font-primary">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

            {/* LEFT COLUMN — Eyebrow + Heading + Metrics */}
            <div className="flex flex-col pr-0 lg:pr-8">

              {/* Eyebrow */}
              <div ref={ref('eyebrow')} className="flex items-center gap-2 mb-6">
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
                  Frequently Asked Questions
                </span>
              </div>

              {/* ScrollReveal Heading */}
              <div ref={ref('heading')}>
                <ScrollRevealHeading
                  className="mb-10"
                  words={[
                    { text: "Questions" },
                    { text: "About" },
                    { text: "Digital" },
                    { text: "Marketing?", italic: true },
                    { text: "Start" },
                    { text: "Here." }
                  ]}
                />
              </div>

              {/* Metrics — desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-6 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-extrabold text-[var(--accent-orange)] mb-1">29+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Curated Answers</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[var(--brand-navy)] mb-1">7</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Core Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#7c3aed] mb-1">100%</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Transparent Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-500 mb-1">Direct</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Expert Support</div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — Body Copy + Search Box + Mobile Metrics */}
            <div ref={ref('rightCol')} className="flex flex-col justify-center gap-6">

              <p
                className="leading-relaxed font-medium"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#334155' }}
              >
                From SEO and social media to paid advertising, websites, branding and content, here are answers to the questions businesses commonly ask before choosing a digital marketing partner.
              </p>

              <p
                className="leading-relaxed mb-2"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)', color: 'var(--brand-navy, #1e2f57)', fontWeight: 700 }}
              >
                Browse by category or search directly below.
              </p>

              {/* Search Box */}
              <div className="w-full relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl overflow-hidden bg-white border border-gray-100 p-2">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-6 h-6 text-orange-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search all questions (e.g. SEO, Instagram, cost)..."
                    className="w-full pl-13 pr-10 py-4 bg-gray-50/50 hover:bg-gray-50 focus:bg-white text-slate-800 placeholder:text-slate-400 rounded-xl text-[15px] font-medium outline-none border border-transparent focus:border-orange-500/50 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => onSearchChange('')}
                      className="absolute right-4 text-xs font-bold uppercase tracking-wider bg-gray-200 hover:bg-gray-300 text-slate-700 px-3 py-1.5 rounded-md transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <div className="px-4 py-3 text-sm font-semibold text-orange-500 text-left border-t border-gray-100 mt-2 flex items-center justify-between">
                    <span>Filter active for: "{searchQuery}"</span>
                    <span className="text-slate-400 font-medium text-xs">Click clear to reset</span>
                  </div>
                )}
              </div>

              {/* Metrics — mobile only */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 lg:hidden">
                <div>
                  <div className="text-3xl font-extrabold text-[var(--accent-orange)] mb-1">29+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Curated Answers</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[var(--brand-navy)] mb-1">7</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Core Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#7c3aed] mb-1">100%</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Transparent Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-500 mb-1">Direct</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Expert Support</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
