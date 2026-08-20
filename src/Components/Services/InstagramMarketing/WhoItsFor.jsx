import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  { num: '01', title: 'Brands', desc: 'Build recognition, personality and a consistent social presence.' },
  { num: '02', title: 'Startups', desc: 'Turn an emerging brand into something people can discover and remember.' },
  { num: '03', title: 'Creators & Artists', desc: 'Build an audience around personality, creative work and community.' },
  { num: '04', title: 'Local Businesses', desc: 'Use Instagram to stay visible, communicate offers and build relationships with nearby audiences.' },
  { num: '05', title: 'SaaS & Technology', desc: 'Turn complex products and ideas into clearer, more accessible social content.' },
  { num: '06', title: 'Service Businesses', desc: 'Explain expertise, demonstrate value and give potential customers a reason to start a conversation.' },
];

export default function WhoItsFor() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', delay: i * 0.05, scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>BUILT FOR DIFFERENT TYPES OF BRANDS</span>
          </div>
          <ScrollRevealHeading maxW="800px" words={[
            { text: "Different" }, { text: "businesses." }, { text: "Different", italic: true }, { text: "Instagram" }, { text: "reasons." }
          ]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((item, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-[var(--bg-light-purple)] rounded-2xl p-6 border border-purple-100/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-[12px] font-extrabold mb-3 block" style={{ color: 'var(--brand-purple, #8b5cf6)', fontFamily: "'Playfair Display', Georgia, serif" }}>Card {item.num}</span>
              <h3 className="text-[19px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{item.title}</h3>
              <p className="text-[14px] font-medium leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
