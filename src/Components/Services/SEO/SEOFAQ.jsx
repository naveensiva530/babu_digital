import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What is SEO?", a: "SEO, or search engine optimisation, is the process of improving a website and its content so search engines can understand it and relevant users can discover it through organic search. Effective SEO combines technical optimisation, content, search intent, authority, user experience, and ongoing measurement." },
  { q: "How long does SEO take to work?", a: "SEO timelines vary based on competition, website condition, authority, search demand, content quality, technical issues, and the amount of work being implemented. Some improvements can be visible relatively quickly, while meaningful organic growth often requires consistent work over time." },
  { q: "How much do SEO services cost?", a: "SEO costs depend on the website's size, market, competition, technical requirements, content needs, target locations, and scope of work. A proper recommendation should be based on the business's current situation and objectives rather than a one-size-fits-all package." },
  { q: "Can you guarantee first-page Google rankings?", a: "No legitimate SEO provider can guarantee a specific Google ranking because search results are influenced by algorithms, competitors, search behaviour, location, and many other factors. SEO should instead focus on improving the website's relevance, technical quality, authority, and ability to satisfy search intent." },
  { q: "What does an SEO audit include?", a: "An SEO audit can examine technical SEO, crawling, indexing, site architecture, on-page optimisation, content, internal linking, performance, structured data, local visibility, authority, competitors, and search opportunities. The scope depends on the website and audit objectives." },
  { q: "Does SEO still matter with AI search?", a: "Yes. Search is expanding into AI-generated answers and conversational experiences, but discoverability still depends on useful information, clear entities, strong technical foundations, relevant content, and credible signals. SEO and AEO/GEO can therefore work together rather than being treated as separate worlds." },
  { q: "What is the difference between SEO and paid advertising?", a: "SEO focuses primarily on earning organic visibility in search results, while paid advertising uses advertising platforms to purchase targeted placements. They can support each other, but they require different strategies, budgets, measurement models, and timelines." },
  { q: "Can SEO generate leads?", a: "SEO can contribute to lead generation when relevant search visibility connects users with useful pages, compelling offers, clear conversion paths, and a strong overall website experience. Lead volume depends on search demand, competition, offer quality, website performance, and other business factors." },
  { q: "Do you provide local SEO?", a: "Yes, local SEO can be part of the service for businesses that genuinely serve specific geographic markets. The work can include local search optimisation, Google Business Profile support, location pages, local content, citations, reviews, and measurement where appropriate." },
  { q: "Can SEO help a new website?", a: "Yes. Starting SEO during website planning and development can help establish stronger information architecture, crawlability, page structure, content targeting, internal linking, metadata, and technical foundations before the site grows." },
  { q: "Do you provide AEO and GEO?", a: "ADSSERV can structure content for answer-oriented and generative search experiences by using clear questions, direct answers, entity relationships, useful supporting information, structured content, and strong topical context. These practices complement rather than replace core SEO." },
];

export default function SEOFAQ() {
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
              SEO FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
            { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "before" },
            { text: "investing", italic: true }, { text: "in" }, { text: "SEO." }
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
