import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Target, Laptop } from 'lucide-react';

const audiences = [
  "Build a digital presence from scratch",
  "Replace an outdated, slow website",
  "Launch a service, product, or campaign that needs dedicated pages",
  "Improve the conversions coming from paid traffic, organic search, or social",
  "Organise content, pages, and structure for a growing business",
];

export default function WebsiteWhoThisIsFor() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardRef = useRef(null);
  const itemRefs = useRef([]);
  const finalRef = useRef(null);
  const calloutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 100, scale: 0.92 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(itemRefs.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.4)', delay: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(calloutRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.7,
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
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                WHO THIS IS FOR
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "You" },
                { text: "need" },
                { text: "a" },
                { text: "website,", italic: true }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 max-w-[550px]">
              <p>Most teams don't need "a website." They need a website that does a job.</p>
              <p>That usually looks like one of the following:</p>

              <div ref={cardRef} className="bg-[var(--bg-light-purple)] p-6 rounded-2xl border border-white shadow-sm">
                <ul className="flex flex-col gap-3">
                  {audiences.map((a, idx) => (
                    <li key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3">
                      <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                      <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p ref={finalRef} className="font-bold mt-2" style={{ color: 'var(--brand-navy)' }}>
                If your website currently exists only to exist, that's the problem we solve.
              </p>
            </div>
          </div>

          <div ref={rightRef} className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-12">
            <div className="relative w-full max-w-[420px]">
              <div className="bg-gradient-to-br from-purple-100 to-orange-50 rounded-[36px] p-8 shadow-2xl border border-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center" style={{ color: 'var(--accent-orange)' }}>
                    <Laptop size={28} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--accent-orange)' }}>A signal</div>
                    <div className="text-[18px] font-extrabold leading-tight" style={{ color: 'var(--brand-navy)' }}>You need more than a website.</div>
                  </div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 text-[14px] font-medium leading-relaxed" style={{ color: '#334155' }}>
                  When traffic exists but enquiries don't arrive, the problem is usually the website.
                </div>
              </div>

              <div ref={calloutRef} className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[280px]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                  <Target size={20} color="#fff" strokeWidth={2.4} />
                </div>
                <p className="text-[13.5px] font-bold leading-snug" style={{ color: 'var(--brand-navy)' }}>
                  Built for businesses ready to treat their website seriously.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
