import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { topics } from './blogData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function ExploreTopics() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: (i % 4) * 0.08, scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              EXPLORE OUR TOPICS
            </span>
          </div>
          <ScrollRevealHeading justify="center" maxW="650px" words={[
            { text: "What" }, { text: "Are" }, { text: "You" }, { text: "Looking", italic: true },
            { text: "to" }, { text: "Learn?" }
          ]} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((topic, idx) => (
            <div
              key={topic.title}
              ref={el => cardRefs.current[idx] = el}
              className="group p-6 bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_25px_rgba(30,47,87,0.05)] hover:shadow-[0_12px_35px_rgba(30,47,87,0.09)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-[16px] font-extrabold mb-2 group-hover:text-[var(--accent-orange)] transition-colors duration-300" style={{ color: 'var(--brand-navy)' }}>
                {topic.title}
              </h3>
              <p className="text-[13px] font-medium leading-relaxed text-slate-600">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
