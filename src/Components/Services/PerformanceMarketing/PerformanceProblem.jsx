import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const questions = [
  "The problem may be the audience.",
  "It may be the offer.",
  "It may be the creative.",
  "It may be the landing page.",
  "It may be the conversion journey.",
  "Or the campaign may simply be optimising for the wrong signal."
];

export default function PerformanceProblem() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightTextRef = useRef(null);
  const cardRef = useRef(null);
  const questionRefs = useRef([]);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column slides in from left
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -70 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Right text block fades up
      gsap.fromTo(rightTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Card scales in
      gsap.fromTo(cardRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );

      // Questions stagger from left one by one
      gsap.fromTo(questionRefs.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.4,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );

      // Final paragraph fade in
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.9,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
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
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                PAID MEDIA WITHOUT A PLAN
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "From" },
                { text: "impression", italic: true },
                { text: "to" },
                { text: "conversion." }
              ]}
            />
          </div>

          <div ref={rightTextRef} className="lg:col-span-7 flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p>A campaign can generate impressions, clicks, and even enquiries without creating the business outcome you actually need.</p>
            <p className="font-bold text-[18px] md:text-[20px]" style={{ color: 'var(--brand-navy)' }}>
              Performance marketing has to start from the business outcome, not the channel.
            </p>

            <div ref={cardRef} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-2">
              <ul className="flex flex-col gap-4">
                {questions.map((q, idx) => (
                  <li key={idx} ref={el => questionRefs.current[idx] = el} className="flex items-start gap-3">
                    <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                    <span className="text-[17px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p ref={finalRef} className="mt-4 font-bold" style={{ color: 'var(--brand-navy)' }}>
              We look beyond the ad itself and consider the journey from first impression to meaningful action.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
