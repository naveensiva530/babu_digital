import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const landingPoints = [
  "the offer",
  "the value proposition",
  "the page message",
  "the call to action",
  "trust signals",
  "mobile usability",
  "form friction",
  "page speed",
  "conversion tracking",
];

export default function PerformanceWhyAdsserv() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const paraRefs = useRef([]);
  const listItemRefs = useRef([]);

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

      // List items stagger in
      gsap.fromTo(listItemRefs.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.04, delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary border-b border-gray-100">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                THE CLICK ISN'T THE FINISH LINE
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "We" },
                { text: "care" },
                { text: "about" },
                { text: "what" },
                { text: "happens", italic: true },
                { text: "after" },
                { text: "the" },
                { text: "ad." }
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p ref={el => paraRefs.current[0] = el}>
              An advertisement can win the click and still lose the customer.
            </p>
            <p ref={el => paraRefs.current[1] = el}>
              That's why campaign performance has to be considered alongside the landing experience.
            </p>
            <p ref={el => paraRefs.current[2] = el}>
              We look for clarity around:
            </p>

            {/* Bulleted list of landing-page elements */}
            <ul className="flex flex-col gap-2 mt-1 mb-2 pl-1">
              {landingPoints.map((point, i) => (
                <li
                  key={i}
                  ref={el => listItemRefs.current[i] = el}
                  className="flex items-center gap-3"
                >
                  <span className="text-[var(--accent-orange)] font-bold text-[18px] leading-none">•</span>
                  <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{point}</span>
                </li>
              ))}
            </ul>

            <p ref={el => paraRefs.current[3] = el} className="font-bold mt-2" style={{ color: 'var(--brand-navy)' }}>
              The objective is simple: make the transition from advertisement to action feel logical.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}