import React, { useEffect, useRef } from 'react';
import { Search, Lightbulb, Shield, MousePointerClick } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const objectives = [
  { num: '01', title: 'Get Found', desc: 'Create useful, search-focused content around topics and questions that matter to your audience.', icon: Search },
  { num: '02', title: 'Get Understood', desc: 'Explain your product, service or idea clearly without hiding the important information behind unnecessary jargon.', icon: Lightbulb },
  { num: '03', title: 'Build Trust', desc: 'Answer real questions, address concerns and demonstrate knowledge before asking someone to make a decision.', icon: Shield },
  { num: '04', title: 'Drive Action', desc: 'Guide the reader naturally toward an enquiry, consultation, signup, purchase or another relevant next step.', icon: MousePointerClick },
];

export default function ContentObjectives() {
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
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <ScrollRevealHeading maxW="800px" words={[
            { text: "What" }, { text: "should" }, { text: "your" }, { text: "content" },
            { text: "actually", italic: true }, { text: "achieve?" }
          ]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_10px_35px_rgba(30,47,87,0.06)] hover:shadow-[0_16px_45px_rgba(30,47,87,0.10)] hover:-translate-y-1 transition-all duration-400">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="text-[13px] font-extrabold" style={{ color: 'var(--brand-purple, #8b5cf6)', fontFamily: "'Playfair Display', Georgia, serif" }}>{item.num}</span>
                </div>
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
