import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const questions = [
  'What are you trying to achieve?',
  'Who needs to take action?',
  'What makes them choose you?',
  'Which channels can reach them?',
  'What happens after they click?',
  'How will you know whether the investment is working?',
];

export default function StrategySection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(itemRefs.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, delay: 0.3, scrollTrigger: { trigger: rightRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
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
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>STRATEGY</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "Your" }, { text: "strategy" }, { text: "should" }, { text: "connect" },
              { text: "business", italic: true }, { text: "goals" }, { text: "to" }, { text: "actual" }, { text: "channels." }
            ]} />
            <div className="mt-8 space-y-4">
              <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
                A digital strategy shouldn't begin with "Should we post more?" or "Should we run ads?"
              </p>
              <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>It should begin with the business.</p>
            </div>
          </div>

          <div ref={rightRef} className="flex flex-col gap-4">
            <p className="text-[15px] font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>Those questions shape the strategy before individual tactics are chosen:</p>
            {questions.map((q, idx) => (
              <div key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3 bg-[var(--bg-light-purple)] p-4 rounded-xl">
                <span className="text-[var(--accent-orange)] font-bold text-lg mt-0.5">{idx + 1}.</span>
                <span className="text-[15px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
