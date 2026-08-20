import React, { useEffect, useRef } from 'react';
import { Users, Target, Search, Palette } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  { title: 'Audience First', desc: 'We write for real people with real questions, needs and reasons to choose.', icon: Users },
  { title: 'Purpose Led', desc: 'Every content piece starts with a clear reason for existing.', icon: Target },
  { title: 'Search Aware', desc: 'Where search matters, content is structured around relevance and intent rather than keyword stuffing.', icon: Search },
  { title: 'Brand Consistent', desc: 'The writing should sound like your brand, not like a generic agency.', icon: Palette },
];

export default function WhyAdsservContent() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out', delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>WHY ADSSERV</span>
          </div>
          <ScrollRevealHeading maxW="800px" words={[
            { text: "Content" }, { text: "built" }, { text: "to" }, { text: "connect," },
            { text: "not", italic: true }, { text: "just" }, { text: "fill" }, { text: "space." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            ADSSERV brings content together with the wider digital picture. That means your words can work alongside SEO, social media, paid campaigns, websites, branding, video and conversion rather than existing as disconnected pieces of copy.
          </p>
          <p className="text-[17px] font-bold mt-4 max-w-[650px]" style={{ color: 'var(--brand-navy)' }}>
            We care about how your content is discovered, understood, remembered and acted on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-md" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{point.title}</h3>
                <p className="text-[14px] font-medium leading-relaxed text-slate-600">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
