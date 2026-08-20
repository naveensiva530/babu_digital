import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Check } from 'lucide-react';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const wontPromise = [
  "Guaranteed #1 rankings",
  "Overnight SEO results",
  "Guaranteed traffic",
  "Guaranteed leads",
  "Guaranteed revenue",
];

const focusOn = [
  "Strategy",
  "Technical quality",
  "Search intent",
  "Content",
  "Authority",
  "Measurement",
  "Continuous improvement",
];

export default function WhatWeDontPromise() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, x: 70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>NO SEO THEATRE</span>
          </div>
          <ScrollRevealHeading maxW="800px" words={[
            { text: "We" }, { text: "won't" }, { text: "sell" }, { text: "you" },
            { text: "a", italic: true }, { text: "guaranteed" }, { text: "Google" }, { text: "position." }
          ]} />
          <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            No legitimate SEO agency can control Google's algorithm, competitors, search demand, or every SERP change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div ref={leftRef} className="bg-red-50 border border-red-100 rounded-[28px] p-8 md:p-10">
            <h3 className="text-[22px] font-extrabold mb-6" style={{ color: 'var(--brand-navy)' }}>We don't promise:</h3>
            <ul className="flex flex-col gap-4">
              {wontPromise.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0"><X size={16} className="text-red-500" strokeWidth={3} /></div>
                  <span className="text-[16px] font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={rightRef} className="bg-green-50 border border-green-100 rounded-[28px] p-8 md:p-10">
            <h3 className="text-[22px] font-extrabold mb-6" style={{ color: 'var(--brand-navy)' }}>Instead, we focus on:</h3>
            <ul className="flex flex-col gap-4">
              {focusOn.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><Check size={16} className="text-green-600" strokeWidth={3} /></div>
                  <span className="text-[16px] font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
