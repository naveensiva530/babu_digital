import React, { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const factors = [
  { title: "Audience relevance", desc: "Does the creator reach people who could realistically care about the brand?" },
  { title: "Content fit", desc: "Does their existing content style make sense for the campaign?" },
  { title: "Engagement quality", desc: "Does the audience actually interact with the creator's content?" },
  { title: "Platform fit", desc: "Is the creator strong on the platform where the campaign needs to happen?" },
  { title: "Location", desc: "Does the audience or creator location matter for the campaign?" },
  { title: "Brand alignment", desc: "Can the creator work with the brand without making the collaboration feel unnatural?" },
];

export default function TrustMatters() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightTextRef = useRef(null);
  const cardRefs = useRef([]);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -70 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(rightTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(cardRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.06, delay: 0.3,
          scrollTrigger: { trigger: cardRefs.current[0], start: 'top 85%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.7,
          scrollTrigger: { trigger: finalRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div ref={leftRef} className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
                CREATOR SELECTION
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "We'd" },
                { text: "rather" },
                { text: "find" },
                { text: "the" },
                { text: "right", italic: true },
                { text: "audience" },
                { text: "than" },
                { text: "the" },
                { text: "biggest" },
                { text: "number." }
              ]}
            />
          </div>

          <div ref={rightTextRef} className="lg:col-span-7 flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p>Creator selection should consider more than follower count.</p>
            <p className="font-bold text-[18px] md:text-[20px]" style={{ color: 'var(--brand-navy)' }}>
              We look at factors such as:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {factors.map((factor, idx) => (
                <div
                  key={idx}
                  ref={el => cardRefs.current[idx] = el}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <h4 className="text-[16px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{factor.title}</h4>
                  <p className="text-[14px] font-medium leading-relaxed text-slate-600">{factor.desc}</p>
                </div>
              ))}
            </div>

            <p ref={finalRef} className="mt-4 font-bold" style={{ color: 'var(--brand-navy)' }}>
              Where platform or third-party data is available, it should be reviewed before final selection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
