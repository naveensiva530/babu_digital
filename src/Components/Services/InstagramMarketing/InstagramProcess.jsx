import React, { useEffect, useRef, useState } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../../../assets/SocailMedia/Entertain.webp';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Understand', desc: 'We look at your brand, audience, offer, competitors, existing presence and business objectives.' },
  { num: '02', title: 'Position', desc: 'We identify what the account should be known for and how it should communicate differently.' },
  { num: '03', title: 'Plan', desc: 'We build content pillars, formats, themes, campaigns and priorities around the strategy.' },
  { num: '04', title: 'Create', desc: 'We turn the strategy into platform-appropriate content, creative concepts, Reels, Stories and campaigns.' },
  { num: '05', title: 'Learn', desc: 'We review performance, audience behaviour and content signals to understand what deserves more attention.' },
  { num: '06', title: 'Improve', desc: 'The strategy evolves based on what the audience responds to and what the business needs next.' },
];

export default function InstagramProcess() {
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

  return (
    <section ref={sectionRef} className="w-full py-24 px-4 md:px-8 overflow-hidden relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div ref={imgWrapRef} className="relative flex-shrink-0 w-full lg:w-[44%] flex justify-center lg:justify-start">
          <img ref={img1Ref} src={bgImage} alt="Instagram process" className="w-full max-w-[500px] h-auto object-contain" style={{ opacity: 0 }} />
        </div>
        <div ref={rightRef} className="flex-1" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>◆</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>HOW WE APPROACH IT</span>
          </div>
          <ScrollRevealHeading justify="start" words={[
            { text: "A" }, { text: "good" }, { text: "Instagram" }, { text: "strategy" },
            { text: "starts", italic: true }, { text: "before" }, { text: "the" }, { text: "first" }, { text: "post." }
          ]} />
          <p className="text-[15px] font-medium leading-relaxed text-slate-600 mt-4 mb-6 max-w-[480px]">
            We don't begin by asking, "What should we post today?" We begin by understanding what the brand needs Instagram to accomplish.
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border-gray)' }}>
            {steps.map((step, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full flex items-center justify-between gap-4 text-left" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <div className="flex items-center gap-4">
                      <span className="font-extrabold flex-shrink-0" style={{ fontSize: '15px', color: isOpen ? 'var(--accent-orange)' : 'var(--brand-steel)', fontFamily: "'Playfair Display', Georgia, serif", minWidth: '28px' }}>{step.num}.</span>
                      <span className="font-bold" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: isOpen ? 'var(--accent-orange)' : 'var(--brand-navy)' }}>{step.title}</span>
                    </div>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: isOpen ? 'var(--accent-orange)' : 'white', color: isOpen ? '#fff' : 'var(--brand-navy)', transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)', fontSize: '14px', fontWeight: 'bold' }}>↑</span>
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
