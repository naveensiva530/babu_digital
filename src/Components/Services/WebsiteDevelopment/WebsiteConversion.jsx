import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgLaptop from '../../../assets/SocailMedia/Laptop.webp';

gsap.registerPlugin(ScrollTrigger);

const conversionPoints = [
  "Clear messaging",
  "Logical page hierarchy",
  "Visible trust signals",
  "Strong calls to action",
  "Frictionless forms",
  "Mobile-friendly layouts",
  "Honest, useful content",
  "Performance that holds attention",
];

export default function WebsiteConversion() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const cardRef = useRef(null);
  const pointRefs = useRef([]);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.3)',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(pointRefs.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, delay: 0.4,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.8,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                CONVERSION-FOCUSED BUILD
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "Design" },
                { text: "with" },
                { text: "intent.", italic: true }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mb-6 max-w-[550px]" style={{ color: '#334155' }}>
              A website shouldn't just exist. It should work.
            </p>

            <div ref={cardRef} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 max-w-[550px]">
              <ul className="flex flex-col gap-3">
                {conversionPoints.map((p, idx) => (
                  <li key={idx} ref={el => pointRefs.current[idx] = el} className="flex items-start gap-3">
                    <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                    <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p ref={finalRef} className="mt-6 text-[16px] md:text-[17px] font-bold leading-relaxed max-w-[550px]" style={{ color: 'var(--brand-navy)' }}>
              A website is only useful if it gets the visitor where they should be — and earns that next step.
            </p>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center">
            <img src={imgLaptop} alt="Conversion focused build" className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
