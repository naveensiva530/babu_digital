import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  "A website can have dozens of pages and still leave visitors confused.",
  "A blog can publish every week and still attract the wrong audience.",
  "A social account can post every day and still give people no reason to remember the brand.",
];

export default function TheRealProblem() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(itemRefs.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.3, scrollTrigger: { trigger: rightRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>THE REAL CONTENT PROBLEM</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "More" }, { text: "words" }, { text: "aren't" }, { text: "always" },
              { text: "better", italic: true }, { text: "content." }
            ]} />
          </div>
          <div ref={rightRef} className="flex flex-col gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3 bg-[var(--bg-light-purple)] p-5 rounded-xl">
                <span className="text-[var(--accent-orange)] font-bold text-lg mt-0.5">•</span>
                <span className="text-[16px] font-semibold leading-relaxed" style={{ color: 'var(--brand-navy)' }}>{item}</span>
              </div>
            ))}
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 mt-2">
              The problem is rarely a shortage of words. It is usually a lack of direction.
            </p>
            <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>
              We create content around a clear purpose so every page, article, caption or campaign message has a reason to exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
