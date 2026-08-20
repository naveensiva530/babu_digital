import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export function PlatformFirstContent() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>MADE FOR INSTAGRAM</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "Content" }, { text: "should" }, { text: "work" }, { text: "with" },
              { text: "the", italic: true }, { text: "platform," }, { text: "not" }, { text: "against" }, { text: "it." }
            ]} />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              Instagram rewards attention, relevance and content people actually want to spend time with. That means a good Instagram strategy cannot simply copy a website post, advertisement or brochure and place it on a feed.
            </p>
            <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>
              We adapt the idea to the format — whether that means a sharp Reel hook, a useful carousel, an interactive Story, a strong caption or a campaign built around a specific moment.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {['Reels', 'Carousels', 'Stories', 'Captions', 'Campaigns', 'Profile'].map((format) => (
                <div key={format} className="bg-[var(--bg-light-purple)] rounded-xl p-4 text-center">
                  <span className="text-[14px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>{format}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConversionJourney() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepRefs = useRef([]);

  const journey = [
    { num: '01', title: 'Discover', desc: 'A person encounters your content.' },
    { num: '02', title: 'Interest', desc: 'The content gives them a reason to keep watching or exploring.' },
    { num: '03', title: 'Trust', desc: 'Your profile and content demonstrate relevance, personality and credibility.' },
    { num: '04', title: 'Explore', desc: 'They visit your website, profile, offer or other relevant destination.' },
    { num: '05', title: 'Act', desc: 'They enquire, book, purchase, contact you or take another meaningful step.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(stepRefs.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.35, ease: 'power3.out', stagger: 0.08, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>THE CONVERSION JOURNEY</span>
          </div>
          <ScrollRevealHeading words={[
            { text: "From" }, { text: "first" }, { text: "impression" }, { text: "to" },
            { text: "next", italic: true }, { text: "action." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[750px] mt-8">
            A follower is not automatically a customer. The content needs to create a natural path between attention and action. That might mean moving someone from a Reel to your profile, from your profile to your website, from a Story to a conversation, or from useful content to an enquiry. We think beyond individual posts and consider what happens after someone becomes interested.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch">
          {journey.map((step, idx) => (
            <React.Fragment key={idx}>
              <div ref={el => stepRefs.current[idx] = el} className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-all duration-300">
                <span className="text-[13px] font-extrabold block mb-2" style={{ color: 'var(--accent-orange)', fontFamily: "'Playfair Display', Georgia, serif" }}>{step.num} — {step.title.toUpperCase()}</span>
                <h3 className="text-[18px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{step.title}</h3>
                <p className="text-[14px] font-medium leading-relaxed text-slate-600">{step.desc}</p>
              </div>
              {idx < journey.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-2 text-[var(--accent-orange)] font-bold text-xl">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
