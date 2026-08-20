import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgDiscover from '../../../assets/SocailMedia/Educate.webp';
import imgEngage from '../../../assets/SocailMedia/Connect.webp';
import imgExplore from '../../../assets/SocailMedia/Entertain.webp';
import imgTrust from '../../../assets/SocailMedia/Build Trust.webp';
import imgAct from '../../../assets/SocailMedia/Convert.webp';
import imgReturn from '../../../assets/SocailMedia/Connect.webp';
import imgAudit from '../../../assets/SocailMedia/Laptop.webp';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery",  desc: "Understand the business, offer, audience, economics, existing campaigns, and goals.", img: imgDiscover },
  { num: "02", title: "Audit",      desc: "Review existing accounts, tracking, campaign structure, creative, landing pages, and performance where available.", img: imgAudit },
  { num: "03", title: "Strategy",   desc: "Choose the appropriate channels, audience approach, campaign structure, budget direction, and measurement plan.", img: imgTrust },
  { num: "04", title: "Build",      desc: "Create campaigns, advertisements, targeting, tracking, and supporting assets.", img: imgEngage },
  { num: "05", title: "Launch",     desc: "Activate campaigns and monitor initial data carefully.", img: imgExplore },
  { num: "06", title: "Optimise",   desc: "Use evidence to refine targeting, creative, keywords, budgets, bidding, and landing experiences.", img: imgAct }
];

export default function PerformanceStructure() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fades + scales in
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Cards: odd from left, even from right — zigzag stagger
      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 40, scale: 0.92 },
          {
            opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: i * 0.05,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              THE CAMPAIGN CYCLE
            </span>
          </div>
          <ScrollRevealHeading
            maxW="900px"
            words={[
              { text: "Launch" },
              { text: "is" },
              { text: "the" },
              { text: "beginning,", italic: true },
              { text: "not" },
              { text: "the" },
              { text: "finish." }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className={`relative flex bg-white rounded-[28px] p-6 gap-5 shadow-[0_10px_35px_rgba(139,92,246,0.07)] border border-white/80 hover:shadow-[0_16px_45px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden ${
                  isLast ? 'flex-col items-center text-center' : ''
                }`}
              >
                {/* Numbered purple circle */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold shadow-md z-10 flex-shrink-0 ${
                    isLast ? '' : 'absolute top-4 left-5'
                  }`}
                  style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}
                >
                  {step.num}
                </div>

                {/* Image */}
                <div
                  className={`flex-shrink-0 transition-transform duration-500 ${
                    isLast
                      ? 'w-[140px] h-[140px] group-hover:scale-110'
                      : 'absolute top-3 right-4 w-[150px] h-[150px] group-hover:scale-105 group-hover:-translate-y-1'
                  }`}
                >
                  <img src={step.img} alt={step.title} className="w-full h-full object-contain drop-shadow-lg" />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col w-full ${
                    isLast ? 'items-center pt-2' : 'justify-end pt-[100px] pr-[100px]'
                  }`}
                >
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-widest mb-2"
                    style={{ color: 'var(--accent-orange)' }}
                  >
                    Step {step.num}
                  </span>
                  <h3 className="text-[24px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                    {step.title}
                  </h3>
                  <p className={`text-[13.5px] font-medium leading-relaxed text-slate-500 ${isLast ? 'max-w-[260px]' : ''}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}