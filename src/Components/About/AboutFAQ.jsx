import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is ADSSERV?",
    a: "ADSSERV is a Gen Z digital marketing agency helping brands and businesses build stronger digital presence through strategy, creative, technology, content, and performance-focused marketing."
  },
  {
    q: "Why is ADSSERV called a Gen Z digital marketing agency?",
    a: "The positioning reflects ADSSERV's understanding of the platforms, behaviours, content formats, and cultural patterns influencing modern digital audiences. It is not simply a visual style; that perspective is intended to influence how marketing decisions are made."
  },
  {
    q: "What services does ADSSERV provide?",
    a: "ADSSERV provides social media marketing, performance marketing, website development, influencer marketing, SEO services, video production, branding solutions, digital consulting, content writing, and Instagram marketing."
  },
  {
    q: "What types of businesses does ADSSERV work with?",
    a: "ADSSERV works with brands, startups, growing businesses, established companies, SaaS and technology businesses, local businesses, creators, and other organisations that need digital marketing support."
  },
  {
    q: "Does ADSSERV only work with Gen Z audiences?",
    a: "No. ADSSERV's Gen Z perspective refers to how the agency approaches modern digital behaviour and culture. The actual target audience depends on each client's business, market, product, and customer profile."
  },
  {
    q: "Can ADSSERV provide only one service?",
    a: "Yes. A business can engage ADSSERV for an individual service such as SEO, social media marketing, performance marketing, website development, or another capability, depending on its needs."
  },
  {
    q: "How does ADSSERV approach new clients?",
    a: "ADSSERV begins by understanding the business, audience, objectives, existing digital presence, and challenges. That information is then used to determine the most appropriate strategy, services, priorities, and execution plan."
  },
  {
    q: "How can I contact ADSSERV?",
    a: "Use the Start a Project or Contact option to share your requirements. ADSSERV can then discuss your business, objectives, scope, and potential next steps."
  }
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fades up
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      // FAQ items stagger slide up one by one
      gsap.fromTo(faqRefs.current,
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out', stagger: 0.05,
          scrollTrigger: { trigger: faqRefs.current[0], start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
            >
              ABOUT ADSSERV
            </span>
          </div>

          <ScrollRevealHeading
            words={[
              { text: "A" },
              { text: "few", italic: true },
              { text: "things" },
              { text: "you" },
              { text: "might" },
              { text: "want" },
              { text: "to" },
              { text: "know." }
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
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="text-[17px] md:text-[19px] font-bold"
                    style={{ color: isOpen ? 'var(--accent-orange)' : 'var(--brand-navy)' }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ background: isOpen ? 'var(--accent-orange)' : 'var(--brand-navy)', color: 'white' }}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                  </div>
                </div>

                {/* Answer always in DOM for SEO crawlability */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[16px] font-medium leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
