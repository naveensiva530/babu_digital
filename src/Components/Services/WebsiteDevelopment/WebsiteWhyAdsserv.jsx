import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const points = [
  "We start with the business, the audience, and the intended outcome.",
  "Every recommendation is justified.",
  "Structure, copy, and design are treated as one conversation.",
  "Performance, accessibility, and SEO aren't afterthoughts.",
  "The website is built to be updated — not rebuilt.",
  "We keep working with you after launch.",
];

export default function WebsiteWhyAdsserv() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const paraRefs = useRef([]);
  const listItemRefs = useRef([]);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 60, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.06, delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(listItemRefs.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.85,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                WHY WEBSITE DEVELOPMENT WITH ADSSERV
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "We" },
                { text: "build" },
                { text: "websites" },
                { text: "around" },
                { text: "what" },
                { text: "matters.", italic: true }
              ]}
            />
          </div>

          <div ref={rightRef} className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p ref={el => paraRefs.current[0] = el}>
              A website is one of the few assets that keeps working for the business long after the project is delivered.
            </p>
            <p ref={el => paraRefs.current[1] = el}>
              How well it works depends on how it's built — and why.
            </p>
            <p ref={el => paraRefs.current[2] = el}>A website developed with ADSSERV is shaped by:</p>

            <ul className="flex flex-col gap-3 mt-1 mb-2 pl-1">
              {points.map((p, i) => (
                <li
                  key={i}
                  ref={el => listItemRefs.current[i] = el}
                  className="flex items-start gap-3"
                >
                  <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5 leading-none">•</span>
                  <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{p}</span>
                </li>
              ))}
            </ul>

            <p ref={finalRef} className="font-bold mt-2" style={{ color: 'var(--brand-navy)' }}>
              The result is a website that doesn't just look the part — it does its part.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
