import React, { useEffect, useRef, useState } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../../../assets/h.png';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Define',
    desc: 'Clarify the business objective, target audience, offer, conversion goal, budget, and campaign priorities.',
  },
  {
    num: '02',
    title: 'Research',
    desc: 'Study the audience, market, competitors, search behaviour, creative opportunities, and available campaign data.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Develop campaign structure, targeting, creative direction, messaging, landing-page requirements, and measurement.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Set up and activate campaigns with the appropriate targeting, budgets, bidding, creative, and conversion signals.',
  },
  {
    num: '05',
    title: 'Learn',
    desc: 'Monitor campaign behaviour and identify patterns across audiences, keywords, placements, creatives, and conversion actions.',
  },
  {
    num: '06',
    title: 'Optimise',
    desc: 'Adjust campaigns based on evidence — improving what works and reducing wasted spend where possible.',
  },
];

export default function PerformanceApproach() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const img1Ref = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slides in from left
      gsap.fromTo(
        img1Ref.current,
        { x: -80, opacity: 0, scale: 0.92 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right content slides in from right
      gsap.fromTo(
        rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Floating parallax on image wrapper while scrolling
      gsap.to(imgWrapRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* ── LEFT: GSAP Image Stack ─────────────────────────── */}
        <div
          ref={imgWrapRef}
          className="relative flex-shrink-0 w-full lg:w-[44%] flex justify-center lg:justify-start"
        >
          {/* Main transparent image */}
          <img
            ref={img1Ref}
            src={bgImage}
            alt="Our Approach"
            className="w-full max-w-[500px] h-auto object-contain"
            style={{ opacity: 0 }}
          />
        </div>

        {/* ── RIGHT: Content ────────────────────────────────── */}
        <div ref={rightRef} className="flex-1" style={{ opacity: 0 }}>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              HOW WE THINK ABOUT PERFORMANCE
            </span>
          </div>
            
          <ScrollRevealHeading
            words={[
              { text: "Start" },
              { text: "with" },
              { text: "the" },
              { text: "business" },
              { text: "goal." },
              { text: "Work" },
              { text: "backwards", italic: true },
              { text: "to" },
              { text: "the" },
              { text: "campaign." }
            ]}
          />

          <p className="text-[17px] leading-relaxed text-slate-600 mt-6 mb-10 max-w-xl font-medium">
            Before deciding where to spend the budget, we want to understand what the campaign needs to accomplish.
            <br/><br/>
            That means connecting the business objective with the audience, offer, messaging, media channels, landing experience, tracking, and optimisation process.
          </p>

          {/* Accordion Steps */}
          <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border-gray)' }}>
            {steps.map((step, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {/* Number + Title */}
                    <div className="flex items-center gap-4">
                      <span
                        className="font-extrabold flex-shrink-0"
                        style={{
                          fontSize: '15px',
                          color: isOpen ? 'var(--accent-orange)' : 'var(--brand-steel)',
                          fontFamily: "'Playfair Display', Georgia, serif",
                          transition: 'color 0.3s',
                          minWidth: '28px',
                        }}
                      >
                        {step.num}.
                      </span>
                      <span
                        className="font-bold"
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                          color: isOpen ? 'var(--accent-orange)' : 'var(--brand-navy)',
                          transition: 'color 0.3s',
                        }}
                      >
                        {step.title}
                      </span>
                    </div>

                    {/* Arrow icon */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen ? 'var(--accent-orange)' : 'var(--bg-light-purple)',
                        color: isOpen ? '#fff' : 'var(--brand-navy)',
                        transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: 1,
                      }}
                    >
                      ↑
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="leading-relaxed pt-4 pl-10 pb-1"
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-gray)',
                          maxWidth: '480px',
                        }}
                      >
                        {step.desc}
                      </p>
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
