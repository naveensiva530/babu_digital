import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What is content writing?", a: "Content writing is the creation of written material for websites, blogs, landing pages, social media, advertisements and other digital channels. Effective content is created around a specific audience, purpose and desired outcome." },
  { q: "What does a content writing service include?", a: "Depending on the project, content writing can include website copy, SEO content, blogs, landing pages, service pages, product content, social media copy, advertising copy and brand messaging." },
  { q: "Can content writing help SEO?", a: "Yes. Useful, well-structured content can support SEO by addressing relevant topics, search intent and audience questions while strengthening a website's topical coverage. Content is one part of a broader SEO strategy." },
  { q: "Can you write website content?", a: "Yes. We can create or refine content for pages such as Home, About, Services, industry pages, landing pages and other important website sections." },
  { q: "Can you write content for SaaS and technology companies?", a: "Yes. Technical products can be translated into clearer language that communicates both functionality and business value without unnecessarily removing important technical detail." },
  { q: "Can content writing improve conversions?", a: "It can. Clear messaging can reduce confusion, answer objections and guide visitors toward an appropriate next action. Conversion performance also depends on the offer, audience, website experience and other factors." },
  { q: "Do you provide blog writing?", a: "Yes. Blog content can be planned around audience questions, relevant search opportunities, business expertise and the role each article plays within the wider content strategy." },
  { q: "How do you make content sound like our brand?", a: "We first understand your positioning, audience, personality, communication style and goals. Those inputs guide the vocabulary, structure, messaging and tone used throughout the content." },
  { q: "Can you update existing website content?", a: "Yes. Existing content can be reviewed for clarity, relevance, search intent, messaging, structure and conversion opportunities before being rewritten or improved." },
];

export default function ContentFAQ() {
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
              FAQ
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
            { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "about" },
            { text: "content", italic: true }, { text: "writing" }
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
