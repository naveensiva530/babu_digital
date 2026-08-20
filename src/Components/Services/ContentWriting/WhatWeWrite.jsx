import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FileText, Search, BookOpen, Target } from 'lucide-react';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

import img1 from '../../../assets/Services/Content Writing.webp';
import img2 from '../../../assets/SocailMedia/Educate.webp';
import img3 from '../../../assets/SocailMedia/Connect.webp';
import img4 from '../../../assets/SocailMedia/Convert.webp';
import img5 from '../../../assets/SocailMedia/Laptop.webp';
import img6 from '../../../assets/SocailMedia/Entertain.webp';
import img7 from '../../../assets/SocailMedia/Build Trust.webp';
import img8 from '../../../assets/Services/Branding Solution.webp';

const services = [
  { num: "01", title: "Website Content", desc: "Clear, persuasive website copy for Home, About, Services, industry pages, landing pages and other important customer touchpoints.", img: img1 },
  { num: "02", title: "SEO Content", desc: "Search-focused content built around relevant topics, search intent, useful information and logical content structure.", img: img2 },
  { num: "03", title: "Blog Writing", desc: "Useful articles that answer audience questions, demonstrate expertise and create opportunities for long-term organic visibility.", img: img3 },
  { num: "04", title: "Landing Page Copy", desc: "Focused messaging that connects the audience's problem with your offer and gives them a clear reason to take action.", img: img4 },
  { num: "05", title: "Service & Product Content", desc: "Straightforward explanations that help potential customers understand what you provide, who it is for and why it matters.", img: img5 },
  { num: "06", title: "Social Media Content", desc: "Platform-aware captions and written content designed for fast-moving social environments and audience interaction.", img: img6 },
  { num: "07", title: "Ad Copy", desc: "Concise, benefit-focused messaging designed to communicate an offer quickly and support paid campaign objectives.", img: img7 },
  { num: "08", title: "Brand Messaging", desc: "Consistent words, positioning and messaging that help your brand sound recognisable across different channels.", img: img8 },
];

export default function WhatWeWrite() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrentIdx((prev) => (prev + 1) % services.length), 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full py-24 relative font-primary overflow-hidden bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: 'var(--brand-red-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>CONTENT SERVICES</span>
            </div>
            <ScrollRevealHeading className="mb-8" words={[
              { text: "Different" }, { text: "formats." }, { text: "One" }, { text: "clear", italic: true }, { text: "purpose." }
            ]} />
            <p className="text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium" style={{ color: 'var(--brand-navy)', opacity: 0.85 }}>
              Your audience does not consume every piece of content in the same way. We adapt the format, structure and message to the channel and the moment.
            </p>
            <ButtonWithIcon>See What We Write</ButtonWithIcon>
          </div>

          <div className="w-full lg:w-[420px] flex justify-center flex-shrink-0 relative z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full filter blur-[100px] opacity-30 pointer-events-none" style={{ background: 'var(--brand-red-orange)' }} />
            <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[48px] border-[12px] shadow-2xl overflow-hidden flex flex-col z-10" style={{ borderColor: 'var(--brand-navy)', boxShadow: '0 25px 60px rgba(30,47,87,0.35), inset 0 0 0 2px rgba(255,255,255,0.2)' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="absolute top-2 inset-x-0 flex justify-center z-50 pointer-events-none">
                <div className="w-28 h-7 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#111] border border-gray-800"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                </div>
              </div>
              <div className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
                {services.map((svc, idx) => (
                  <div key={idx} className="min-w-full h-full relative bg-white">
                    <div className="absolute top-16 left-5 z-40 bg-white border border-gray-200 text-[var(--brand-navy)] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Service {svc.num}</div>
                    <div className="absolute top-[88px] inset-x-5 bottom-[35%] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center">
                      <img src={svc.img} alt={svc.title} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-[35%] flex flex-col justify-end p-6 pb-12 z-40 bg-white">
                      <div className="flex -space-x-1.5 mb-4">
                        <div className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-[var(--accent-orange)]"><FileText size={12} strokeWidth={2.5} /></div>
                        <div className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-[var(--brand-navy)]"><Search size={12} strokeWidth={2.5} /></div>
                        <div className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-[var(--brand-purple,#8b5cf6)]"><BookOpen size={12} strokeWidth={2.5} /></div>
                      </div>
                      <h3 className="text-[var(--brand-navy)] text-[26px] font-extrabold mb-2 tracking-tight leading-tight">{svc.title}</h3>
                      <p className="text-gray-600 text-[14px] font-medium leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setCurrentIdx((prev) => (prev - 1 + services.length) % services.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 z-50"><ChevronLeft className="w-6 h-6" /></button>
              <button onClick={() => setCurrentIdx((prev) => (prev + 1) % services.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 z-50"><ChevronRight className="w-6 h-6" /></button>
              <div className="absolute bottom-2 inset-x-0 flex justify-center z-50 pointer-events-none"><div className="w-32 h-[5px] bg-white/70 rounded-full"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
