import React, { useEffect, useRef, useState } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../../../assets/SocailMedia/Connect.webp';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Understand', desc: 'We start with your business goals, audience, current challenges and what you want digital marketing to achieve.' },
  { num: '02', title: 'Audit', desc: 'We review the relevant parts of your digital presence to identify strengths, weaknesses, gaps and missed opportunities.' },
  { num: '03', title: 'Analyse', desc: 'We connect the findings with your market, competitors, customer journey, channels and available performance data.' },
  { num: '04', title: 'Prioritise', desc: 'Not every recommendation deserves immediate attention. We separate high-impact opportunities from lower-priority activity.' },
  { num: '05', title: 'Plan', desc: 'We turn the priorities into a practical digital roadmap with clear actions, channels, measurement and next steps.' },
  { num: '06', title: 'Improve', desc: 'Digital strategy should evolve. We use performance, feedback and changing business needs to identify what should happen next.' },
];

export default function ConsultingProcess() {
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
          <img ref={img1Ref} src={bgImage} alt="Consulting process" className="w-full max-w-[500px] h-auto object-contain" style={{ opacity: 0 }} />
        </div>

        <div ref={rightRef} className="flex-1" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>◆</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>PROCESS</span>
          </div>

          <ScrollRevealHeading justify="start" words={[
            { text: "Audit" }, { text: "first." }, { text: "Prioritise" }, { text: "second." },
            { text: "Execute", italic: true }, { text: "with" }, { text: "purpose." }
          ]} />

          <div className="flex flex-col divide-y mt-6" style={{ borderColor: 'var(--border-gray)' }}>
            {steps.map((step, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between gap-4 text-left" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
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
