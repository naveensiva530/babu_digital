import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyAdsservConsulting() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(paraRefs.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', stagger: 0.06, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary border-b border-gray-100" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>WHY ADSSERV</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "Good" }, { text: "strategy" }, { text: "should" }, { text: "make" },
              { text: "execution", italic: true }, { text: "easier," }, { text: "not" }, { text: "more" }, { text: "complicated." }
            ]} />
          </div>
          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            {[
              "ADSSERV sits close to the work. That matters because a strategy has to survive outside a presentation.",
              "Our consulting connects strategic thinking with the digital services that bring the plan to life — from SEO and social media to paid campaigns, websites, content, video and branding.",
            ].map((text, i) => (
              <p key={i} ref={el => paraRefs.current[i] = el}>{text}</p>
            ))}
            <p ref={el => paraRefs.current[2] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              We focus on what your business actually needs, not on creating a longer list of things to do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
