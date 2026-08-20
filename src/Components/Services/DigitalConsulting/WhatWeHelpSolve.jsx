import React, { useEffect, useRef } from 'react';
import { Compass, Layers, MousePointerClick, BarChart3 } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { num: '01', title: 'No Clear Digital Strategy', label: 'Unclear Direction', desc: "You are active across multiple channels, but there is no clear connection between what you're doing and what the business needs to achieve.", icon: Compass },
  { num: '02', title: 'Too Many Channels, Too Little Focus', label: 'Scattered Marketing', desc: 'SEO, social, paid ads, content and other channels are competing for attention without a clear priority.', icon: Layers },
  { num: '03', title: "Traffic Isn't Turning Into Action", label: 'Weak Conversion', desc: "People may be finding your brand, but the journey from first interaction to enquiry, signup or purchase isn't working as well as it should.", icon: MousePointerClick },
  { num: '04', title: "You Don't Know What's Working", label: 'Performance Gaps', desc: 'Without the right data and measurement, it becomes difficult to decide what deserves more investment and what needs to change.', icon: BarChart3 },
];

export default function WhatWeHelpSolve() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <ScrollRevealHeading maxW="800px" words={[
            { text: "Where" }, { text: "is" }, { text: "your" }, { text: "digital" },
            { text: "growth", italic: true }, { text: "getting" }, { text: "stuck?" }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mt-8">
            Sometimes the problem isn't a lack of effort. It's knowing where that effort should go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} ref={el => cardRefs.current[idx] = el} className="relative bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_10px_35px_rgba(30,47,87,0.06)] hover:shadow-[0_16px_45px_rgba(30,47,87,0.10)] hover:-translate-y-1 transition-all duration-400 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="text-[12px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: 'var(--bg-light-purple)', color: 'var(--accent-orange)' }}>{item.label}</span>
                </div>
                <span className="text-[13px] font-extrabold mb-2 block" style={{ color: 'var(--brand-purple, #8b5cf6)', fontFamily: "'Playfair Display', Georgia, serif" }}>Card {item.num}</span>
                <h3 className="text-[22px] font-extrabold mb-3 leading-tight" style={{ color: 'var(--brand-navy)' }}>{item.title}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
