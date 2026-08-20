import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is performance marketing?",
    a: "Performance marketing refers to paid advertising campaigns designed around specific, measurable business outcomes — such as leads, sales, sign-ups, or enquiries. Unlike brand advertising, which focuses on awareness, performance marketing is structured to make every part of the campaign accountable against a defined objective."
  },
  {
    q: "How much should I spend on paid advertising?",
    a: "Budget depends on the industry, competition, audience, offer, platform, campaign objective, and expected cost per lead or acquisition. We help businesses think through budget relative to their goals rather than suggesting an arbitrary starting number."
  },
  {
    q: "How long does it take to see results from paid advertising?",
    a: "Paid advertising can generate immediate activity, but meaningful optimisation typically requires a period of data collection — usually several weeks at a minimum. The timeline depends on budget, volume, audience, and campaign structure."
  },
  {
    q: "Which advertising platform should I use?",
    a: "The right platform depends on where your audience is, what they are doing when they are there, what your offer requires, and what your campaign objective is. We evaluate these factors before recommending a channel rather than defaulting to a single platform."
  },
  {
    q: "What is a good cost per lead?",
    a: "A good cost per lead depends on the value of the customer, the close rate of leads, the sales cycle, and the business margin. There is no universal benchmark — the metric has to be evaluated in the context of the business it belongs to."
  },
  {
    q: "Can you guarantee results from paid advertising?",
    a: "No responsible agency can guarantee specific advertising results because outcomes depend on variables that include audience behaviour, offer, competition, creative, budget, and platform algorithm changes. What we can guarantee is that decisions will be based on evidence rather than guesswork."
  },
  {
    q: "Do I need a good landing page?",
    a: "Yes. The landing page is a critical part of campaign performance. A well-structured advertisement sending people to a poor landing page will underperform regardless of how good the targeting or creative is. We consider the landing experience as part of the campaign review."
  },
  {
    q: "What does ADSSERV measure in a performance campaign?",
    a: "The metrics we focus on depend on the campaign objective. Common measurements include impressions, CTR, CPC, conversion rate, cost per lead, cost per acquisition, ROAS, and lead quality. We are less interested in vanity metrics and more interested in the ones connected to the business outcome."
  },
  {
    q: "How often will I receive campaign reports?",
    a: "Regular reporting is part of how we work. The format and frequency depend on the engagement, but you will always have visibility into what is being tested, what the data shows, and what decisions are being made."
  },
  {
    q: "Can I run paid advertising alongside my existing marketing?",
    a: "Yes. Paid advertising can complement organic search, social media, email, and content marketing. We can structure campaign activity to support specific parts of the customer journey without conflicting with existing marketing activity."
  }
];

export default function PerformanceFAQ() {
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
              PERFORMANCE MARKETING FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
              { text: "Questions" },
              { text: "about" },
              { text: "paid", italic: true },
              { text: "advertising." }
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
