import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What does branding include?", a: "Branding can include brand strategy, positioning, logo design, visual identity, typography, colour systems, messaging, brand guidelines, social branding, campaign identity, and supporting brand assets. The exact scope depends on the business and project requirements." },
  { q: "What is the difference between a logo and a brand?", a: "A logo is one visual element of a brand. A brand is the broader experience people associate with a business, including its identity, positioning, messaging, visual language, personality, and interactions." },
  { q: "Do you create complete brand identities?", a: "Yes. A complete identity can include the strategic foundation, logo, visual system, typography, colours, imagery direction, messaging principles, guidelines, and practical brand assets required for the business." },
  { q: "Do you provide logo design?", a: "Yes. Logo design can be developed as part of a wider identity system or as a focused project, depending on what the business actually needs." },
  { q: "Do you offer rebranding?", a: "Yes. Rebranding can range from refining an existing identity to developing a substantially new positioning and visual system. The appropriate approach depends on what is working, what has changed, and what the business needs next." },
  { q: "Can you create brand guidelines?", a: "Yes. Brand guidelines can document logo usage, colours, typography, visual direction, messaging principles, and other identity rules so the brand can be applied consistently." },
  { q: "Can you brand a startup?", a: "Yes. Startup branding can establish a clear identity and positioning from the beginning while keeping the system practical enough to evolve as the business grows." },
  { q: "Can you make branding for social media?", a: "Yes. Brand identity can be translated into social profiles, content templates, visual systems, campaign assets, and other digital touchpoints so social content feels connected to the wider brand." },
  { q: "How much does branding cost?", a: "Branding costs depend on the scope, strategic work, number of identity elements, deliverables, revisions, guidelines, and supporting assets required. A focused logo project and a complete brand identity are different levels of work." },
  { q: "How long does a branding project take?", a: "The timeline depends on the project's scope, number of deliverables, feedback cycles, research requirements, and approval process. The schedule should be agreed before the project begins." },
];

export default function BrandingFAQ() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const faqRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(faqRefs.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.06, delay: 0.25,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              BRANDING FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
            { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "before" },
            { text: "starting", italic: true }, { text: "a" }, { text: "branding" }, { text: "project." }
          ]}
          />

        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                ref={el => faqRefs.current[idx] = el}
                className="bg-[var(--bg-light-purple)] rounded-2xl border border-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <h3 className="text-[17px] md:text-[18px] font-bold leading-snug" style={{ color: 'var(--brand-navy)' }}>
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300"
                    style={{ backgroundColor: isOpen ? 'var(--brand-purple, #8b5cf6)' : 'var(--accent-orange)' }}>
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-5 text-[15.5px] font-medium leading-relaxed" style={{ color: '#334155' }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
