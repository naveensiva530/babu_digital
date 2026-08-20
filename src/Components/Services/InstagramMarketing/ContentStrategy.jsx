import React, { useEffect, useRef } from 'react';
import { BookOpen, Heart, MessageCircle, Shield, MousePointerClick } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { num: '01', title: 'Educate', desc: 'Make complicated ideas easier to understand and give your audience something useful.', icon: BookOpen, color: '#6366f1' },
  { num: '02', title: 'Connect', desc: 'Show the personality, people, perspective and moments that make the brand feel human.', icon: Heart, color: '#e1306c' },
  { num: '03', title: 'Engage', desc: 'Create content that gives people a reason to comment, share, save, respond or participate.', icon: MessageCircle, color: '#e08326' },
  { num: '04', title: 'Build Trust', desc: 'Use expertise, proof, experiences, customer stories and useful information to strengthen credibility.', icon: Shield, color: '#1e2f57' },
  { num: '05', title: 'Convert', desc: 'When the time is right, guide interested audiences toward a relevant next step — enquiry, website visit, booking, purchase or another business action.', icon: MousePointerClick, color: '#8b5cf6' },
];

export default function ContentStrategy() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: i * 0.06, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>CONTENT THAT HAS A ROLE</span>
          </div>
          <ScrollRevealHeading maxW="800px" words={[
            { text: "Not" }, { text: "every" }, { text: "post" }, { text: "needs" },
            { text: "to", italic: true }, { text: "sell" }, { text: "something." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            A strong Instagram presence needs different types of content working together. Some posts create awareness. Some build trust. Some educate. Some entertain. Some drive action. We use a mix of content pillars based on what your audience needs and what your business wants to achieve.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} ref={el => cardRefs.current[idx] = el} className={`relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md" style={{ background: pillar.color }}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-[12px] font-extrabold uppercase tracking-wider" style={{ color: pillar.color, fontFamily: "'Playfair Display', Georgia, serif" }}>Pillar {pillar.num}</span>
                </div>
                <h3 className="text-[19px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{pillar.title}</h3>
                <p className="text-[14px] font-medium leading-relaxed text-slate-600">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
