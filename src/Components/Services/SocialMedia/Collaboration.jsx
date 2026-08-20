import React, { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery", desc: "We understand your business, audience, objectives, existing channels, and challenges." },
  { num: "02", title: "Strategy", desc: "We define the social direction, content pillars, platform priorities, and opportunities." },
  { num: "03", title: "Content Planning", desc: "We turn strategy into a practical content system." },
  { num: "04", title: "Production", desc: "We create or coordinate the required social content and creative assets." },
  { num: "05", title: "Publishing & Management", desc: "We execute the agreed social activity consistently." },
  { num: "06", title: "Analysis & Optimisation", desc: "We review performance, identify patterns, and improve the next cycle." }
];

export default function Collaboration() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading section scales in
      gsap.fromTo(headingRef.current,
        { opacity: 0, scale: 0.94, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Step cards stagger in from bottom alternating left/right
      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -50 : 50;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 20 },
          { opacity: 1, x: 0, y: 0, duration: 0.4, ease: 'power3.out', delay: i * 0.05,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        <div ref={headingRef} className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              WORKING WITH US
            </span>
          </div>
          
          <ScrollRevealHeading
            maxW="900px"
            words={[
              { text: "You" }, { text: "bring" }, { text: "the" }, { text: "business." },
              { text: "We" }, { text: "bring" }, { text: "the" }, { text: "social", italic: true },
              { text: "strategy." }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el} className="flex gap-4">
              <div className="text-[20px] font-extrabold mt-1" style={{ color: 'var(--accent-orange)' }}>
                {step.num}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>{step.title}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
