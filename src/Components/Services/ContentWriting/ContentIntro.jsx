import React, { useEffect, useRef } from 'react';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContentIntro() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>CONTENT WITH A PURPOSE</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "Your" }, { text: "content" }, { text: "should" }, { text: "have" },
              { text: "a", italic: true }, { text: "job" }, { text: "to" }, { text: "do." }
            ]} />
          </div>
          <div ref={rightRef} className="flex flex-col gap-6">
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
              Not every piece of content needs to sell something. Some content needs to answer a question. Some needs to build trust. Some needs to explain a complicated product. Some needs to get discovered through search. And some simply needs to make people stop scrolling.
            </p>
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
              We start with the reason behind the content, then build the message around the audience, platform and objective. The result is content that feels natural to read while still supporting the bigger digital strategy.
            </p>
            <ButtonWithIcon>See What We Write</ButtonWithIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
