import React, { useEffect, useRef } from 'react';
import { Compass, Copy, Heart, TrendingUp } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { num: '01', title: 'No Clear Direction', desc: 'Your account is active, but there is no clear content strategy connecting posts to business goals.', icon: Compass },
  { num: '02', title: 'Content Looks the Same', desc: "Your feed is polished, but it doesn't create enough distinction, personality or recognition.", icon: Copy },
  { num: '03', title: 'Low Engagement', desc: "People may see the content, but it isn't giving them a strong enough reason to interact, share, save or follow.", icon: Heart },
  { num: '04', title: 'Attention Without Action', desc: 'Content gets views or engagement, but there is no clear journey from Instagram interest to enquiry, website visit or purchase.', icon: TrendingUp },
];

export default function TheProblem() {
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
        <div ref={headingRef} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>WHERE INSTAGRAM GOES WRONG</span>
          </div>
          <ScrollRevealHeading words={[
            { text: "Posting" }, { text: "more" }, { text: "doesn't" }, { text: "automatically" },
            { text: "mean", italic: true }, { text: "growing" }, { text: "more." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[750px] mt-8">
            A busy Instagram account can still struggle to build meaningful attention. Repeated formats, unclear messaging, weak hooks or content that isn't made for the platform can make a brand easy to scroll past.
          </p>
          <p className="text-[17px] font-bold mt-4 max-w-[750px]" style={{ color: 'var(--brand-navy)' }}>
            We focus on the parts that make Instagram work together — positioning, content, creative, consistency, audience behaviour and the journey beyond the post.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_10px_35px_rgba(30,47,87,0.06)] hover:shadow-[0_16px_45px_rgba(30,47,87,0.10)] hover:-translate-y-1 transition-all duration-400">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: 'linear-gradient(135deg, #e1306c, #8b5cf6)' }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="text-[13px] font-extrabold" style={{ color: 'var(--brand-purple, #8b5cf6)', fontFamily: "'Playfair Display', Georgia, serif" }}>Card {item.num}</span>
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
