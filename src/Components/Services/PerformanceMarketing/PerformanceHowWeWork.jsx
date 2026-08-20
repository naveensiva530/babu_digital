import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceHowWeWork() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left heading slides in from left
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Right paragraphs stagger up
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', stagger: 0.06, delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary border-b border-gray-100">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                WHY PERFORMANCE MARKETING WITH ADSSERV
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "Less" },
                { text: "obsession" },
                { text: "with" },
                { text: "vanity" },
                { text: "metrics.", italic: true },
                { break: true },
                { text: "More" },
                { text: "attention" },
                { text: "to" },
                { text: "the" },
                { text: "actual" },
                { text: "journey." }
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p ref={el => paraRefs.current[0] = el}>
              ADSSERV approaches paid marketing as a connected system.
            </p>
            <p ref={el => paraRefs.current[1] = el}>
              The advertisement matters.
            </p>
            <p ref={el => paraRefs.current[2] = el}>
              The audience matters.
            </p>
            <p ref={el => paraRefs.current[3] = el}>
              The offer matters.
            </p>
            <p ref={el => paraRefs.current[4] = el}>
              The landing page matters.
            </p>
            <p ref={el => paraRefs.current[5] = el}>
              The tracking matters.
            </p>
            <p ref={el => paraRefs.current[6] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              And the business outcome matters most.
            </p>
            <p ref={el => paraRefs.current[7] = el}>
              Our Gen Z perspective also influences how we think about creative: modern audiences move quickly, ignore repetitive advertising, and expect brands to communicate clearly.
            </p>
            <p ref={el => paraRefs.current[8] = el}>
              That doesn't mean chasing every trend.
            </p>
            <p ref={el => paraRefs.current[9] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              It means making the message relevant enough to deserve attention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}