import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: 'What does video production include?', a: 'Video production can include concept development, scripting, planning, filming, editing, sound, graphics, captions, colour treatment, platform adaptations, and final delivery. The exact scope depends on the project\'s objectives and required deliverables.' },
  { q: 'What types of videos do you create?', a: 'ADSSERV can create short-form social videos, brand videos, product videos, campaign content, explainers, UGC-style content, business videos, video ads, and event or behind-the-scenes content, depending on project requirements.' },
  { q: 'Do you create Reels and TikTok videos?', a: 'Yes. Short-form video can be created specifically for platforms such as Instagram Reels, TikTok, and YouTube Shorts, with the format, pacing, hooks, captions, and creative direction adapted to the platform.' },
  { q: 'Can you create video ads?', a: 'Yes. Video creative can be developed for paid campaigns with consideration for audience, placement, message, opening hook, CTA, format, and testing requirements.' },
  { q: 'Do you provide video editing?', a: 'Yes. Post-production can include editing, sound, captions, motion graphics, colour correction, colour grading, transitions, text overlays, and platform-specific versions depending on the project.' },
  { q: 'Can one video be used across multiple platforms?', a: 'Often, yes. A production can be planned so footage is adapted into different aspect ratios, lengths, hooks, cuts, and formats for platforms such as Instagram, TikTok, YouTube, websites, and paid media.' },
  { q: 'How much does video production cost?', a: 'Video production costs vary according to the concept, filming requirements, locations, talent, equipment, production time, post-production, number of deliverables, and usage requirements. The right scope should be defined before a project is priced.' },
  { q: 'Do you help with the video concept?', a: 'Yes. Creative development can begin with the objective and audience before moving into the concept, story, script, visual direction, shot planning, and production requirements.' },
  { q: 'Can you create UGC-style videos?', a: 'Yes. UGC-style content can be developed when an authentic, social-first format is appropriate for the brand, audience, and campaign objective.' },
  { q: 'Can video content support SEO and website conversions?', a: 'Yes. Relevant video can support website communication, product understanding, engagement, and conversion journeys when it is placed where it genuinely helps the user. Video should support the page rather than simply exist for decoration.' },
];

export default function VideoFAQ() {
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
              VIDEO PRODUCTION FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
            { text: 'Questions' }, { text: 'brands' }, { text: 'ask' }, { text: 'before' },
            { text: 'starting', italic: true }, { text: 'a' }, { text: 'video' }, { text: 'project.' }
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
