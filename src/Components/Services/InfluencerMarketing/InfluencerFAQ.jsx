import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is influencer marketing?",
    a: "Influencer marketing is a marketing approach where brands collaborate with creators who have an established audience and influence within a particular community or niche. Campaigns can support objectives such as awareness, engagement, traffic, content creation, leads, or sales."
  },
  {
    q: "How does influencer marketing work?",
    a: "A typical influencer campaign starts with an objective and audience, followed by creator research, selection, campaign briefing, content creation, publishing, and performance measurement. The exact process depends on the campaign, platform, creators, and commercial arrangement."
  },
  {
    q: "How do I choose the right influencer for my brand?",
    a: "The right influencer should have an audience, content style, platform presence, and communication style that fit the campaign. Follower count is only one factor; relevance, engagement, audience quality, location, content fit, and campaign objectives should also be considered."
  },
  {
    q: "Do you work with micro influencers?",
    a: "Yes, micro influencers can be valuable when a campaign needs a focused or highly relevant audience. The appropriate creator size depends on the campaign objective, target audience, platform, budget, and desired reach."
  },
  {
    q: "How much does influencer marketing cost?",
    a: "Influencer marketing costs vary according to creator size, platform, content format, number of deliverables, campaign duration, usage rights, production requirements, exclusivity, and creator commercial terms. A campaign scope is needed before an accurate budget can be determined."
  },
  {
    q: "Can influencer marketing generate sales?",
    a: "It can contribute to sales when the creator, offer, audience, content, landing experience, and conversion path are aligned. Results depend on many factors, so influencer marketing should not be presented as a guaranteed sales channel."
  },
  {
    q: "Can influencer content be used in paid ads?",
    a: "Creator content can sometimes be reused in paid advertising, but the brand needs appropriate usage rights and permissions. Paid usage, duration, platforms, whitelisting or creator-authorised advertising arrangements should be agreed before the content is used commercially."
  },
  {
    q: "What platforms can influencer campaigns run on?",
    a: "Campaigns can be developed for platforms such as Instagram, YouTube, TikTok, and other relevant creator ecosystems. The appropriate platform depends on where the target audience spends time and which content format suits the campaign."
  },
  {
    q: "Do influencers create the content themselves?",
    a: "Creators can produce content using their own style and audience knowledge while working within an agreed campaign brief. The strongest collaborations usually provide clear brand requirements without making the creator's content feel overly scripted."
  },
  {
    q: "How do you measure influencer marketing?",
    a: "Measurement depends on the campaign objective and available data. Common indicators include reach, impressions, views, engagement, clicks, website traffic, leads, conversions, content performance, and other agreed campaign outcomes."
  }
];

export default function InfluencerFAQ() {
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
              INFLUENCER MARKETING FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
              { text: "Questions" },
              { text: "brands" },
              { text: "ask" },
              { text: "before" },
              { text: "working", italic: true },
              { text: "with" },
              { text: "creators." }
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
