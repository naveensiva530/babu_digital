import React, { useEffect, useRef } from 'react';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export function SEOContentSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>SEARCH CONTENT</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "Search-friendly" }, { text: "without" }, { text: "sounding", italic: true },
              { text: "search-engine-written." }
            ]} />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              SEO content should help the person searching before it tries to impress an algorithm.
            </p>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              We build content around relevant topics, search intent, useful information, clear structure and natural language. Where appropriate, content can also be structured around the questions people ask search engines and AI-powered answer systems.
            </p>
            <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>
              The goal isn't to repeat a keyword until the writing becomes awkward. The goal is to create something useful enough to deserve attention.
            </p>
            <ButtonWithIcon>Plan My SEO Content</ButtonWithIcon>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConversionContentSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>CONVERSION COPY</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "The" }, { text: "right" }, { text: "words" }, { text: "can" },
              { text: "remove", italic: true }, { text: "friction." }
            ]} />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              People rarely need more information just for the sake of having more information. They need the right information at the right moment.
            </p>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              Strong conversion content makes the offer easier to understand, answers important objections, communicates value and gives visitors a clear next step.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <p className="text-[15px] font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>We use messaging to help bridge the gap between:</p>
              <p className="text-[17px] font-bold" style={{ color: 'var(--accent-orange)' }}>"I'm interested."</p>
              <p className="text-[14px] font-medium text-slate-500 my-1">and</p>
              <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>"I'm ready to take the next step."</p>
            </div>
            <ButtonWithIcon>Improve My Website Copy</ButtonWithIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
