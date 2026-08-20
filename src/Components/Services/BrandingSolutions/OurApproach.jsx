import React, { useEffect, useRef, useState } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../../../assets/SocailMedia/Build Trust.webp';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Understand', desc: 'We look at your business, audience, market, competitors, offer, personality, and where the brand needs to show up.' },
  { num: '02', title: 'Position', desc: 'Clarify what the brand should stand for, who it is for, and what should make it distinct.' },
  { num: '03', title: 'Define', desc: 'Develop the visual and verbal direction that gives the brand its character.' },
  { num: '04', title: 'Design', desc: 'Create the identity elements and supporting assets needed to bring the direction to life.' },
  { num: '05', title: 'Systemise', desc: 'Turn individual design decisions into practical rules that can be applied consistently.' },
  { num: '06', title: 'Launch', desc: 'Help translate the new identity across the touchpoints where your audience actually encounters the brand.' },
];

export default function OurApproach() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const img1Ref = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(img1Ref.current, { x: -80, opacity: 0, scale: 0.92 }, { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
      gsap.to(imgWrapRef.current, { y: -30, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div ref={imgWrapRef} className="relative flex-shrink-0 w-full lg:w-[44%] flex justify-center lg:justify-start">
          <div className="relative">
            <img ref={img1Ref} src={bgImage} alt="Our Branding Approach" className="w-full max-w-[500px] h-auto object-contain" style={{ opacity: 0 }} />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden md:block">
              <div className="flex gap-2 mb-3">
                <div className="w-8 h-8 rounded-full" style={{ background: 'var(--brand-navy)' }} />
                <div className="w-8 h-8 rounded-full" style={{ background: 'var(--accent-orange)' }} />
                <div className="w-8 h-8 rounded-full" style={{ background: 'var(--brand-purple, #8b5cf6)' }} />
                <div className="w-8 h-8 rounded-full bg-slate-200" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Typography</p>
              <p className="text-[22px] font-extrabold" style={{ color: 'var(--brand-navy)', fontFamily: "'Playfair Display', Georgia, serif" }}>Aa</p>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="flex-1" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>◆</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              FROM POSITIONING TO PRESENCE
            </span>
          </div>

          <ScrollRevealHeading justify="start" words={[
            { text: "We" }, { text: "build" }, { text: "the" }, { text: "thinking" },
            { text: "before", italic: true }, { text: "we" }, { text: "polish" }, { text: "the" }, { text: "visuals." }
          ]} />

          <div className="flex flex-col divide-y mt-6" style={{ borderColor: 'var(--border-gray)' }}>
            {steps.map((step, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between gap-4 text-left group" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <div className="flex items-center gap-4">
                      <span className="font-extrabold flex-shrink-0" style={{ fontSize: '15px', color: isOpen ? 'var(--accent-orange)' : 'var(--brand-steel)', fontFamily: "'Playfair Display', Georgia, serif", transition: 'color 0.3s', minWidth: '28px' }}>{step.num}.</span>
                      <span className="font-bold" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: isOpen ? 'var(--accent-orange)' : 'var(--brand-navy)', transition: 'color 0.3s' }}>{step.title}</span>
                    </div>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: isOpen ? 'var(--accent-orange)' : 'var(--bg-light-purple)', color: isOpen ? '#fff' : 'var(--brand-navy)', transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)', fontSize: '14px', fontWeight: 'bold', lineHeight: 1 }}>↑</span>
                  </button>
                  <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}>
                    <div className="overflow-hidden">
                      <p className="leading-relaxed pt-4 pl-10 pb-1" style={{ fontSize: '14px', color: 'var(--text-gray)', maxWidth: '480px' }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
