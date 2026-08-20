import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

import imgInfo from '../../../assets/SocailMedia/Educate.webp';
import imgCommercial from '../../../assets/SocailMedia/Connect.webp';
import imgTrans from '../../../assets/SocailMedia/Convert.webp';
import imgNav from '../../../assets/SocailMedia/Build Trust.webp';

const intents = [
  { num: "01", title: "Informational", goal: "LEARNING & RESEARCHING", desc: "Someone searching for a definition is behaving differently from someone comparing providers.", img: imgInfo },
  { num: "02", title: "Commercial Investigation", goal: "COMPARING OPTIONS", desc: "Users evaluating solutions, comparing providers, and weighing their options.", img: imgCommercial },
  { num: "03", title: "Transactional", goal: "READY TO ACT", desc: "Looking for a provider, product, or service — ready to take the next step.", img: imgTrans },
  { num: "04", title: "Navigational", goal: "FINDING A BRAND", desc: "Looking for a specific brand or destination they already have in mind.", img: imgNav },
];

export default function KeywordIntent() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 40, scale: 0.92 }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: i * 0.05, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>SEARCH WHAT MATTERS</span>
          </div>
          <ScrollRevealHeading maxW="800px" words={[{ text: "Not" }, { text: "every" }, { text: "keyword", italic: true }, { text: "deserves" }, { text: "a" }, { text: "page." }]} />
          <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            We separate search opportunities by intent and map keywords and topics to the right stage of the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intents.map((item, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el} className="relative flex bg-white rounded-[28px] p-6 gap-5 shadow-[0_10px_35px_rgba(139,92,246,0.07)] border border-white/80 hover:-translate-y-1 transition-all duration-400 group overflow-hidden">
              <div className="absolute top-4 left-5 w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold shadow-md z-10" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>{item.num}</div>
              <div className="absolute top-3 right-4 w-[170px] h-[170px] transition-transform duration-500 group-hover:scale-105">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <div className="flex flex-col justify-end pt-[110px] w-full pr-[110px]">
                <span className="text-[10px] font-extrabold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>{item.goal}</span>
                <h3 className="text-[26px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>{item.title}</h3>
                <p className="text-[13.5px] font-medium leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-[17px] md:text-[19px] font-bold max-w-[700px] mx-auto" style={{ color: 'var(--brand-navy)' }}>
          The result is a website where pages have jobs instead of competing against one another.
        </p>
      </div>
    </section>
  );
}
