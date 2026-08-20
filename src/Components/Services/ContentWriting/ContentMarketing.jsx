import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const journey = ['Search', 'Discover', 'Understand', 'Trust', 'Act'];

export default function ContentMarketing() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(stepRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', stagger: 0.08, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 text-center">
        <div ref={contentRef}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>THE BIGGER PICTURE</span>
          </div>
          <ScrollRevealHeading justify="center" maxW="800px" className="mx-auto mb-8" words={[
            { text: "Content" }, { text: "works" }, { text: "better" }, { text: "when" },
            { text: "it", italic: true }, { text: "isn't" }, { text: "working" }, { text: "alone." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 mb-4 max-w-[700px] mx-auto">
            A blog should connect with your SEO strategy. Website copy should support conversion. Social content should reinforce your brand. Ad copy should match the landing page. Educational content should answer the questions your audience is already asking.
          </p>
          <p className="text-[17px] font-bold mb-12 max-w-[650px] mx-auto" style={{ color: 'var(--brand-navy)' }}>
            That's why we look at content as part of the wider digital journey rather than an isolated writing task.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {journey.map((step, idx) => (
              <React.Fragment key={idx}>
                <div ref={el => stepRefs.current[idx] = el} className="px-5 py-3 rounded-full bg-white border border-gray-100 shadow-sm">
                  <span className="text-[14px] md:text-[15px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>{step}</span>
                </div>
                {idx < journey.length - 1 && (
                  <span className="hidden md:inline text-[var(--accent-orange)] font-bold text-xl mx-1">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
