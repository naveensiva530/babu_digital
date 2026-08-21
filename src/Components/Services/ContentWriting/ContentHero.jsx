import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../../Components/ui/button-with-icon';
import { ArrowUpRight, Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/Services/Content Writing.webp';
import ScrollRevealHeading from './ScrollRevealHeading';

function EditorialVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 mt-10 lg:mt-0">
      <div className="relative bg-white rounded-[24px] p-5 shadow-[0_20px_60px_rgba(30,47,87,0.12)] border border-gray-100">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 bg-[var(--bg-light-purple)] rounded-xl p-4 border border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400" /><div className="w-2 h-2 rounded-full bg-yellow-400" /><div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[10px] font-bold text-slate-400 ml-2 uppercase tracking-wider">Website</span>
            </div>
            <div className="h-2 w-3/4 rounded bg-slate-200 mb-2" />
            <div className="h-2 w-full rounded bg-slate-100 mb-1" />
            <div className="h-2 w-5/6 rounded bg-slate-100" />
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <span className="text-[9px] font-bold uppercase tracking-wider text-green-600 mb-2 block">Search</span>
            <div className="h-1.5 w-full rounded bg-blue-100 mb-1.5" />
            <div className="h-1.5 w-4/5 rounded bg-slate-100 mb-1" />
            <div className="h-1.5 w-full rounded bg-slate-100" />
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl p-3 border border-purple-100">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent-orange)] mb-2 block">Social</span>
            <div className="h-8 w-8 rounded-full bg-[var(--brand-purple)] mb-2" />
            <div className="h-1.5 w-full rounded bg-white/80 mb-1" />
            <div className="h-1.5 w-3/4 rounded bg-white/60" />
          </div>
          <div className="col-span-2 bg-[var(--brand-navy)] rounded-xl p-4 text-white">
            <span className="text-[9px] font-bold uppercase tracking-wider text-orange-300 mb-2 block">Campaign</span>
            <p className="text-[13px] font-extrabold leading-snug mb-1">Clear copy. Strong offer.</p>
            <div className="inline-block mt-2 px-3 py-1 rounded-full bg-[var(--accent-orange)] text-[10px] font-bold">Take Action →</div>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-[var(--accent-orange)] opacity-20 blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[var(--brand-purple)] opacity-15 blur-2xl" />
    </div>
  );
}

export default function ContentHero() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '420px', marginTop: '90px' }}>
        <div className="absolute inset-0 bg-[#111827]/45 z-0" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.55) 0%, rgba(139,92,246,0.50) 50%, rgba(167,139,250,0.45) 100%)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-extrabold text-white mb-5 tracking-tight leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}>Content Writing</h1>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full mt-1" style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}>
            <Link to="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: '#fb923c', fontWeight: 700, fontSize: '16px' }}>
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} /><span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[16px] font-semibold" style={{ color: '#1e2f57' }}>Content Writing</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '80px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <section className="w-full bg-white pt-16 pb-20 px-4 md:px-8" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}>CONTENT WRITING</span>
              </div>
              <ScrollRevealHeading className="mb-8" words={[
                { text: "Content" }, { text: "That" }, { text: "Gives" }, { text: "Your" }, { text: "Brand" },
                { text: "Something", italic: true }, { text: "Worth" }, { text: "Saying." }
              ]} />
              <p className="leading-relaxed mb-8" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: '#475569' }}>
                Good content does more than fill a webpage or keep a social feed active. It helps people discover your brand, understand what you offer, trust your expertise and know what to do next. ADSSERV creates clear, purposeful content built around your audience, brand voice, search intent and business goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ButtonWithIcon>Talk About Your Content</ButtonWithIcon>
                <Link to="/#services">
                  <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 font-bold rounded-full border-2 transition-all duration-300" style={{ color: 'var(--brand-navy, #1e2f57)', borderColor: 'rgba(30,47,87,0.20)', fontSize: '15px', background: 'transparent' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brand-navy, #1e2f57)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(30,47,87,0.20)'; }}>
                    <span>Explore Our Services</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
            <EditorialVisual />
          </div>
        </div>
      </section>
    </>
  );
}
