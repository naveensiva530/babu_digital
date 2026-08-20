import { useEffect, useRef, useState } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { Plus, Minus } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites take between 4 and 10 weeks depending on size, complexity, and how quickly content and approvals move. A landing page can be ready sooner. Larger platforms take longer."
  },
  {
    q: "Do you only build websites from scratch?",
    a: "We build new websites, redesign existing ones, and extend websites that are already performing well but need new pages, new sections, or new functionality."
  },
  {
    q: "Will my website be SEO-ready?",
    a: "Yes. SEO fundamentals — page structure, headings, URLs, metadata, internal linking, performance, image optimisation, and mobile experience — are considered during development, not added afterwards."
  },
  {
    q: "Can you write the content too?",
    a: "Yes. We offer content development as part of the engagement, from full website copy to landing pages, service pages, and section rewrites."
  },
  {
    q: "How do we measure success after launch?",
    a: "We treat a website launch as the start of the work, not the end. We agree on what success looks like for the website before launch, then review how the website is performing against traffic, behaviour, and conversion goals."
  },
  {
    q: "Do you work with specific platforms?",
    a: "We work with the platform that best fits the brief. That may be a flexible framework, a no-code solution, or a custom build — depending on what the website needs to do and how it needs to grow."
  },
  {
    q: "Do you provide support after the website launches?",
    a: "Yes. We continue to support, optimise, and evolve the website as the business grows. We can also hand over cleanly to an internal team when the time is right."
  },
];

export default function WebsiteFAQ() {
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
              FREQUENT QUESTIONS
            </span>
          </div>
          <ScrollRevealHeading maxW="700px"
            words={[
              { text: "Answers" },
              { text: "to" },
              { text: "common" },
              { text: "questions.", italic: true }
            ]}
          />
          <p className="mt-6 text-[16px] md:text-[17px] font-medium leading-relaxed max-w-[680px]" style={{ color: '#334155' }}>
            Before working together, these tend to be the questions that come up most often.
          </p>
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
