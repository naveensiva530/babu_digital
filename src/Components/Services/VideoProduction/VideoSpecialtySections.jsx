import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

function VideoInfoSection({ eyebrow, words, intro, closing, bg = 'white' }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: bg === 'purple' ? 'var(--bg-light-purple)' : 'white' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>{eyebrow}</span>
            </div>
            <ScrollRevealHeading words={words} />
          </div>
          <div ref={rightRef} className="flex flex-col gap-4">
            {intro.map((p, i) => (
              <p key={i} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">{p}</p>
            ))}
            {closing && <p className="font-bold text-[17px] mt-2" style={{ color: 'var(--brand-navy)' }}>{closing}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShortFormContent() {
  return (
    <VideoInfoSection
      eyebrow="BUILT FOR THE FEED"
      words={[{ text: "The" }, { text: "first" }, { text: "few" }, { text: "seconds", italic: true }, { text: "matter." }]}
      intro={[
        "Short-form video gives brands very little time to earn attention.",
        "We think about the hook, pacing, framing, captions, sound, visual movement, message, and payoff — while keeping the content natural to the platform.",
      ]}
      closing={'The goal isn\'t to make every video look like an advertisement. Sometimes the strongest creative looks like something people actually want to watch.'}
      bg="white"
    />
  );
}

export function BrandStorytelling() {
  return (
    <VideoInfoSection
      eyebrow="MAKE PEOPLE REMEMBER THE BRAND"
      words={[{ text: "A" }, { text: "brand" }, { text: "story" }, { text: "needs" }, { text: "more", italic: true }, { text: "than" }, { text: "a" }, { text: "logo" }, { text: "at" }, { text: "the" }, { text: "end." }]}
      intro={[
        "Your audience should understand what makes the brand different before they reach the final frame.",
        "We use visual storytelling, tone, pacing, narrative, people, products, environments, and sound to create a more memorable brand experience.",
      ]}
      closing="The result should feel recognisably yours — not like a recycled agency template."
      bg="purple"
    />
  );
}

export function VideoForPaidCampaigns() {
  return (
    <VideoInfoSection
      eyebrow="CREATIVE + PERFORMANCE"
      words={[{ text: "A" }, { text: "video" }, { text: "can" }, { text: "look" }, { text: "great", italic: true }, { text: "and" }, { text: "still" }, { text: "be" }, { text: "a" }, { text: "bad" }, { text: "ad." }]}
      intro={[
        "Paid media changes how creative needs to work. The opening seconds, message hierarchy, format, CTA, audience, placement, and testing strategy all matter.",
        "That's why video created for advertising should be considered alongside the campaign itself.",
      ]}
      closing="When appropriate, we can create multiple creative variations so performance teams have more than one idea to test."
      bg="white"
    />
  );
}

export function BeforeFilming() {
  return (
    <VideoInfoSection
      eyebrow="THE UNSEEN WORK"
      words={[{ text: "Most" }, { text: "of" }, { text: "the" }, { text: "good", italic: true }, { text: "decisions" }, { text: "happen" }, { text: "before" }, { text: "filming" }, { text: "starts." }]}
      intro={[
        "We clarify the audience, objective, message, creative direction, location, talent, props, production requirements, format, and delivery needs before the shoot.",
        "That planning helps reduce unnecessary production problems and gives everyone a clearer idea of what success looks like.",
      ]}
      closing={'Because "we\'ll figure it out on the day" isn\'t much of a strategy.'}
      bg="purple"
    />
  );
}

export default ShortFormContent;
