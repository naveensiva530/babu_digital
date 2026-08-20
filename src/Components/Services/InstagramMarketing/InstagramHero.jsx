import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import { ArrowUpRight, Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/Services/Instragram marketing.webp';
import ScrollRevealHeading from './ScrollRevealHeading';

function InstagramVisual() {
  const gridColors = ['#8b5cf6', '#e08326', '#1e2f57', '#a78bfa', '#fb923c', '#6366f1'];
  return (
    <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
      <div className="bg-white rounded-[32px] border-[10px] border-slate-900 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
          <span className="text-white text-[11px] font-bold">9:41</span>
          <div className="flex gap-1"><div className="w-3 h-2 bg-white/80 rounded-sm" /></div>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-16 h-16 rounded-full p-[2px]" style={{ background: 'linear-gradient(45deg, #f97316, #8b5cf6, #e1306c)' }}>
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[18px] font-black" style={{ color: 'var(--brand-navy)' }}>A</div>
            </div>
            <div>
              <p className="text-[14px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>adsserv</p>
              <p className="text-[11px] text-slate-500 font-medium">Digital Marketing</p>
            </div>
          </div>
          <div className="flex gap-4 text-[11px] font-bold" style={{ color: 'var(--brand-navy)' }}>
            <span className="border-b-2 border-[var(--brand-navy)] pb-1">Posts</span>
            <span className="text-slate-400">Reels</span>
            <span className="text-slate-400">Tagged</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[2px] p-[2px]">
          {gridColors.map((c, i) => (
            <div key={i} className="aspect-square" style={{ background: `${c}${i % 2 ? 'cc' : '99'}` }} />
          ))}
        </div>
        <div className="flex justify-around py-3 border-t border-gray-100 bg-white">
          {['Home', 'Reels', 'Story', 'Profile'].map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-5 h-5 rounded-md ${i === 0 ? 'bg-[var(--brand-navy)]' : 'bg-slate-200'}`} />
              <span className="text-[8px] font-bold text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-4 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-3 shadow-xl text-white w-[90px] hidden md:block">
        <p className="text-[9px] font-bold uppercase tracking-wider mb-1 opacity-80">Reels</p>
        <div className="w-full h-12 rounded-lg bg-white/20 mb-1" />
        <p className="text-[10px] font-extrabold leading-tight">Hook in 2s</p>
      </div>
      <div className="absolute -bottom-3 -left-6 bg-[var(--brand-navy)] rounded-2xl p-3 shadow-xl text-white w-[100px] hidden md:block">
        <p className="text-[9px] font-bold uppercase tracking-wider mb-1 text-orange-300">Story</p>
        <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-orange-400" /><div className="w-2 h-2 rounded-full bg-purple-400" /></div>
        <p className="text-[10px] font-bold mt-1">Campaign live</p>
      </div>
    </div>
  );
}

export default function InstagramHero() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '420px', marginTop: '90px' }}>
        <div className="absolute inset-0 bg-[#111827]/45 z-0" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(225,48,108,0.45) 0%, rgba(139,92,246,0.50) 50%, rgba(167,139,250,0.45) 100%)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-extrabold text-white mb-5 tracking-tight leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}>Instagram Marketing</h1>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full mt-1" style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}>
            <Link to="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: '#fb923c', fontWeight: 700, fontSize: '16px' }}>
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} /><span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[16px] font-semibold" style={{ color: '#1e2f57' }}>Instagram Marketing</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '80px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <section className="w-full bg-white pt-16 pb-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}>INSTAGRAM MARKETING</span>
              </div>
              <ScrollRevealHeading className="mb-8" words={[
                { text: "Make" }, { text: "Your" }, { text: "Brand" }, { text: "Worth", italic: true }, { text: "Following." }
              ]} />
              <p className="leading-relaxed mb-8" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: '#475569' }}>
                Instagram is more than a place to post. It is where people discover brands, judge them, follow what they create and decide whether they want to know more. ADSSERV builds Instagram strategies around your audience, content, brand and business goals — from what you post to how people move from a post to your next conversion.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ButtonWithIcon>Build My Instagram Strategy</ButtonWithIcon>
                <Link to="/#services">
                  <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 font-bold rounded-full border-2 transition-all duration-300" style={{ color: 'var(--brand-navy, #1e2f57)', borderColor: 'rgba(30,47,87,0.20)', fontSize: '15px', background: 'transparent' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brand-navy, #1e2f57)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(30,47,87,0.20)'; }}>
                    <span>Explore Our Services</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
            <InstagramVisual />
          </div>
        </div>
      </section>
    </>
  );
}
