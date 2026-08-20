import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

function BrandBoard({ variant = 'strategy' }) {
  const palettes = {
    strategy: ['#1e2f57', '#e08326', '#8b5cf6', '#f1f5f9'],
    visual: ['#1e2f57', '#6366f1', '#a78bfa', '#e0e7ff'],
    logo: ['#111827', '#ffffff', '#e08326', '#cbd5e1'],
    guidelines: ['#1e2f57', '#475569', '#94a3b8', '#f8fafc'],
    digital: ['#e08326', '#1e2f57', '#8b5cf6', '#fef3c7'],
    rebrand: ['#64748b', '#1e2f57', '#e08326', '#f1f5f9'],
  };
  const colors = palettes[variant] || palettes.strategy;

  return (
    <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-[340px]">
      <div className="flex gap-2 mb-5">
        {colors.map((c, i) => (
          <div key={i} className="flex-1 h-10 rounded-lg" style={{ background: c, border: c === '#ffffff' || c === '#f8fafc' || c === '#f1f5f9' ? '1px solid #e2e8f0' : 'none' }} />
        ))}
      </div>
      <div className="border-t border-dashed border-gray-200 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Type</p>
        <p className="text-[28px] font-extrabold leading-none mb-1" style={{ color: 'var(--brand-navy)', fontFamily: "'Playfair Display', Georgia, serif" }}>Brand</p>
        <p className="text-[13px] font-medium text-slate-500">Inter · Regular · Medium · Bold</p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: 'var(--brand-navy)' }}>A</div>
        <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full w-2/3 rounded-full" style={{ background: 'var(--accent-orange)' }} />
        </div>
      </div>
    </div>
  );
}

function BrandSection({ eyebrow, words, intro, items, closing, bg = 'white', boardVariant }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      if (items) {
        gsap.fromTo(itemRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.04, delay: 0.3, scrollTrigger: { trigger: rightRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [items]);

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
            <BrandBoard variant={boardVariant} />
          </div>

          <div ref={rightRef} className="flex flex-col gap-6">
            {intro.map((p, i) => (
              <p key={i} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">{p}</p>
            ))}
            {items && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {items.map((item, idx) => (
                  <div key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-[var(--accent-orange)] font-bold text-lg">•</span>
                    <span className="text-[14px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                  </div>
                ))}
              </div>
            )}
            {closing && <p className="font-bold text-[17px] mt-2" style={{ color: 'var(--brand-navy)' }}>{closing}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandStrategy() {
  return (
    <BrandSection
      eyebrow="START WITH THE WHY"
      boardVariant="strategy"
      words={[{ text: "Before" }, { text: "deciding" }, { text: "what" }, { text: "the" }, { text: "brand" }, { text: "should" }, { text: "look", italic: true }, { text: "like," }, { text: "decide" }, { text: "what" }, { text: "it" }, { text: "should" }, { text: "mean." }]}
      intro={[
        "Visual identity becomes much stronger when it has a clear reason behind it.",
        "We consider questions such as:",
      ]}
      items={[
        "Who are you trying to reach?",
        "What problem do you solve?",
        "Why should people choose you?",
        "What do competitors already own?",
        "What should people remember about you?",
        "How should the brand feel when someone encounters it?",
      ]}
      closing="The answers create a foundation for the visual work rather than leaving design decisions to personal preference alone."
      bg="white"
    />
  );
}

export function VisualIdentity() {
  return (
    <BrandSection
      eyebrow="MAKE IT LOOK LIKE YOU"
      boardVariant="visual"
      words={[{ text: "Consistency" }, { text: "makes" }, { text: "recognition", italic: true }, { text: "easier." }]}
      intro={[
        "A strong visual identity creates a repeatable set of decisions around colour, typography, imagery, composition, graphic elements, and visual tone.",
        "The goal isn't to make every asset identical.",
        "It is to make different assets feel unmistakably connected.",
      ]}
      bg="purple"
    />
  );
}

export function LogoDesign() {
  return (
    <BrandSection
      eyebrow="ONE MARK. MANY USES."
      boardVariant="logo"
      words={[{ text: "A" }, { text: "logo" }, { text: "needs" }, { text: "to" }, { text: "survive", italic: true }, { text: "outside" }, { text: "the" }, { text: "presentation" }, { text: "deck." }]}
      intro={[
        "We consider where the logo will actually appear — websites, social profiles, advertisements, documents, presentations, mobile screens, print materials, and other brand touchpoints.",
        "That means the identity needs to remain clear at different sizes and in different contexts.",
        "A logo is an entry point to the brand. It shouldn't have to carry the entire brand by itself.",
      ]}
      bg="white"
    />
  );
}

export function BrandGuidelines() {
  return (
    <BrandSection
      eyebrow="MAKE CONSISTENCY EASIER"
      boardVariant="guidelines"
      words={[{ text: "Your" }, { text: "brand" }, { text: "shouldn't" }, { text: "change" }, { text: "every", italic: true }, { text: "time" }, { text: "someone" }, { text: "opens" }, { text: "Canva." }]}
      intro={[
        "Brand guidelines give your team a practical reference for using the identity consistently.",
        "Depending on the project, guidelines can cover:",
      ]}
      items={[
        "Logo usage", "Colour palette", "Typography", "Visual style",
        "Photography direction", "Graphic elements", "Layout principles",
        "Social media usage", "Tone of voice", "Messaging principles",
      ]}
      closing="The goal is simple: make the right brand decision easier to repeat."
      bg="purple"
    />
  );
}

export function BrandingForDigital() {
  return (
    <BrandSection
      eyebrow="BUILT FOR WHERE PEOPLE ACTUALLY SEE YOU"
      boardVariant="digital"
      words={[{ text: "Your" }, { text: "digital" }, { text: "presence" }, { text: "is" }, { text: "part", italic: true }, { text: "of" }, { text: "the" }, { text: "brand." }]}
      intro={[
        "A brand identity has to work on screens.",
        "That means considering how it appears across:",
      ]}
      items={[
        "Websites", "Instagram", "Social media", "Digital advertising",
        "Email", "Landing pages", "Presentations", "Video", "Content", "Mobile experiences",
      ]}
      closing="We build the identity with those environments in mind rather than treating digital as an afterthought."
      bg="white"
    />
  );
}

export function Rebranding() {
  return (
    <BrandSection
      eyebrow="WHEN THE OLD VERSION NO LONGER FITS"
      boardVariant="rebrand"
      words={[{ text: "Sometimes" }, { text: "the" }, { text: "brand" }, { text: "doesn't" }, { text: "need" }, { text: "a" }, { text: "new", italic: true }, { text: "logo." }, { text: "It" }, { text: "needs" }, { text: "a" }, { text: "new" }, { text: "direction." }]}
      intro={[
        "A rebrand can mean different things.",
        "For some businesses, the existing identity simply needs refinement.",
        "For others, the market, audience, product, or ambition has changed enough that the brand needs a more fundamental reset.",
        "We identify what should stay, what needs to change, and what the new identity needs to accomplish before rebuilding everything from scratch.",
      ]}
      bg="purple"
    />
  );
}
