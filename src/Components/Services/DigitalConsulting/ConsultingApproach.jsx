import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../../../assets/SocailMedia/Laptop.webp';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function ConsultingApproach() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -80, scale: 0.92 }, { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-we-work" ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftRef} className="relative flex justify-center lg:justify-start">
            <img src={bgImage} alt="Digital consulting approach" className="w-full max-w-[480px] object-contain drop-shadow-xl" />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Focus</p>
              <p className="text-[14px] font-extrabold leading-snug" style={{ color: 'var(--brand-navy)' }}>High-impact moves over long task lists</p>
            </div>
          </div>

          <div ref={rightRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>OUR CONSULTING APPROACH</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "We" }, { text: "look" }, { text: "at" }, { text: "the" },
              { text: "whole", italic: true }, { text: "digital" }, { text: "picture" },
              { text: "before" }, { text: "recommending" }, { text: "the" }, { text: "next" }, { text: "move." }
            ]} />
            <div className="flex flex-col gap-5 mt-8">
              <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
                Good consulting starts with understanding, not assumptions. We look at your business objectives, audience, existing digital activity, competitors, customer journey and available data before deciding where the biggest opportunities are.
              </p>
              <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>
                The goal isn't to give you a huge list of recommendations. It's to identify the moves that matter most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
