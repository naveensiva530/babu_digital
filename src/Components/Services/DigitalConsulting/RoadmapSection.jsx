import React, { useEffect, useRef } from 'react';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[900px] w-full mx-auto px-4 md:px-8 text-center">
        <div ref={contentRef}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>ROADMAP</span>
          </div>

          <ScrollRevealHeading justify="center" maxW="800px" className="mx-auto mb-8" words={[
            { text: "A" }, { text: "roadmap" }, { text: "is" }, { text: "useful" }, { text: "only" },
            { text: "when", italic: true }, { text: "someone" }, { text: "can" }, { text: "actually" }, { text: "follow" }, { text: "it." }
          ]} />

          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 mb-4 max-w-[700px] mx-auto">
            Recommendations are easy to collect and difficult to execute. We turn strategic findings into a clearer sequence of priorities so your team knows what needs attention first, what can wait, and what should be measured.
          </p>
          <p className="text-[17px] font-bold mb-10 max-w-[650px] mx-auto" style={{ color: 'var(--brand-navy)' }}>
            The result is not another presentation full of complicated terminology. It is a practical direction for what happens next.
          </p>

          <ButtonWithIcon>Build My Digital Roadmap</ButtonWithIcon>
        </div>
      </div>
    </section>
  );
}
