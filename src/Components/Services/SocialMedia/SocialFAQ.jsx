import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What does a social media marketing agency do?",
    a: "A social media marketing agency develops and manages strategies that help brands use social platforms to build awareness, engage audiences, strengthen their presence, and support business goals. Services can include strategy, content, publishing, community management, campaigns, and performance analysis."
  },
  {
    q: "How can social media marketing help my business?",
    a: "Social media marketing can help a business increase brand visibility, build audience relationships, communicate its value, generate website traffic, support lead generation, and create ongoing opportunities for customer engagement. The right outcome depends on the business and its marketing objective."
  },
  {
    q: "How often should a business post on social media?",
    a: "There is no universal posting frequency that works for every business. A stronger approach is to choose a sustainable publishing rhythm based on audience behaviour, platform, content resources, objectives, and the quality of content that can consistently be produced."
  },
  {
    q: "Does ADSSERV create social media content?",
    a: "Yes. ADSSERV can support social media content strategy and content creation as part of its social media marketing services. The exact content scope depends on the agreed strategy, platforms, formats, and project requirements."
  },
  {
    q: "Which social media platforms should my business use?",
    a: "The right platforms depend on your audience, industry, content format, business objectives, and available resources. ADSSERV can assess these factors and recommend where your social media effort is most likely to be useful."
  },
  {
    q: "Can social media marketing generate leads?",
    a: "Yes. Social media can contribute to lead generation when content, audience targeting, offers, landing pages, calls to action, and conversion tracking work together. Social media should be treated as part of a broader customer journey rather than an isolated channel."
  },
  {
    q: "How do you measure social media marketing results?",
    a: "Measurement depends on the objective and can include reach, engagement, saves, shares, audience growth, profile actions, website traffic, leads, conversions, and content-level performance. The most useful metrics are the ones connected to the business goal."
  },
  {
    q: "How long does social media marketing take to work?",
    a: "There is no reliable universal timeline because results depend on the starting point, audience, industry, content quality, consistency, competition, platform, and objectives. Early signals can inform optimisation, while meaningful growth generally requires sustained execution and learning."
  },
  {
    q: "Can ADSSERV manage my social media accounts?",
    a: "ADSSERV can provide social media management as part of an agreed scope. This may include planning, content coordination, publishing, monitoring, community activity, reporting, and optimisation depending on the engagement."
  },
  {
    q: "How much does social media marketing cost?",
    a: "Social media marketing pricing depends on the number of platforms, content requirements, creative production, management scope, campaign requirements, and business objectives. ADSSERV can recommend a suitable scope after understanding what you need."
  }
];

export default function SocialFAQ() {
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
              SOCIAL MEDIA MARKETING FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
              { text: "Questions" },
              { text: "brands" },
              { text: "usually" },
              { text: "ask" },
              { text: "before" },
              { text: "getting" },
              { text: "started.", italic: true }
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
