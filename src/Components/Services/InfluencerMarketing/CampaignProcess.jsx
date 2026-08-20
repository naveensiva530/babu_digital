import React, { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Campaign Brief", desc: "Objective, audience, offer, market, platform, budget, timeline, and deliverables." },
  { num: "02", title: "Creator Research", desc: "Research and evaluate potential creators." },
  { num: "03", title: "Shortlist & Outreach", desc: "Present suitable options and coordinate outreach where included in scope." },
  { num: "04", title: "Negotiation & Coordination", desc: "Align on deliverables, timelines, usage rights, commercial terms, and campaign requirements." },
  { num: "05", title: "Content Development", desc: "Creators develop content according to the agreed direction." },
  { num: "06", title: "Review & Publish", desc: "Coordinate approvals and publishing requirements." },
  { num: "07", title: "Measure", desc: "Review campaign activity and agreed performance indicators." },
  { num: "08", title: "Optimise", desc: "Capture learnings for future creator campaigns and wider marketing." },
];

export default function CampaignProcess() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, scale: 0.94, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

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
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              HOW WE RUN IT
            </span>
          </div>

          <ScrollRevealHeading
            maxW="900px"
            words={[
              { text: "A" },
              { text: "creator" },
              { text: "campaign" },
              { text: "should" },
              { text: "feel", italic: true },
              { text: "organised" },
              { text: "behind" },
              { text: "the" },
              { text: "scenes." }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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
