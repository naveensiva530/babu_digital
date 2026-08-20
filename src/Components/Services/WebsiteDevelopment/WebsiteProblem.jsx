import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  "Slow pages.",
  "Confusing navigation.",
  "Weak messaging.",
  "Poor mobile experiences.",
  "Unclear calls to action.",
  "Content that says everything except what the visitor actually needs to know.",
];

export default function WebsiteProblem() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightTextRef = useRef(null);
  const cardRef = useRef(null);
  const problemRefs = useRef([]);
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
      gsap.fromTo(cardRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(problemRefs.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.4,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
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
                THE PROBLEM
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "A" },
                { text: "good-looking" },
                { text: "website", italic: true },
                { text: "isn't" },
                { text: "enough." }
              ]}
            />
            <p className="mt-6 text-[18px] md:text-[20px] font-bold leading-snug" style={{ color: 'var(--brand-navy)' }}>
              Your website has a job to do.
            </p>
          </div>

          <div ref={rightTextRef} className="lg:col-span-7 flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p>A website can look impressive and still make people work too hard to understand the business.</p>

            <div ref={cardRef} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-2">
              <ul className="flex flex-col gap-4">
                {problems.map((p, idx) => (
                  <li key={idx} ref={el => problemRefs.current[idx] = el} className="flex items-start gap-3">
                    <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                    <span className="text-[17px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p ref={finalRef} className="mt-4 font-bold" style={{ color: 'var(--brand-navy)' }}>
              We approach website development from both sides: what the user needs to experience and what the business needs the website to achieve.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}