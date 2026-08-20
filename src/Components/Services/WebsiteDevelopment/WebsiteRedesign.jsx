import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const signs = [
  "Visitors land on the homepage and leave.",
  "Mobile users get a worse experience than desktop users.",
  "Content is scattered, outdated, or has stopped reflecting the business.",
  "Pages take too long to load.",
  "Navigation makes sense to the team, but not to the visitor.",
  "Enquiries feel like they should be higher.",
  "The website no longer matches the business direction.",
];

export default function WebsiteRedesign() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardRef = useRef(null);
  const itemRefs = useRef([]);
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
        { opacity: 0, x: 80, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(itemRefs.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, delay: 0.4,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                FOR WHEN THE WEBSITE EXISTS, BUT ISN'T WORKING
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "Sometimes" },
                { text: "the", italic: true },
                { text: "website" },
                { text: "needs" },
                { text: "a" },
                { text: "fresh" },
                { text: "start." }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mb-6 max-w-[550px]" style={{ color: '#334155' }}>
              Not every website needs a redesign. But if any of these feel familiar, it probably does.
            </p>

            <div ref={cardRef} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 max-w-[550px]">
              <ul className="flex flex-col gap-3">
                {signs.map((s, idx) => (
                  <li key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3">
                    <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                    <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p ref={finalRef} className="mt-6 text-[16px] font-bold leading-relaxed max-w-[550px]" style={{ color: 'var(--brand-navy)' }}>
              A redesign isn't about changing colours. It's about rebuilding the website around what the business needs today — and what it's going to need tomorrow.
            </p>
          </div>

          <div ref={rightRef} className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 mt-8 lg:mt-0">
            <p>What often changes during a redesign:</p>

            <ul className="flex flex-col gap-3 pl-4">
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>The way pages are organised.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How information is prioritised.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How the website performs on mobile and on slower connections.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How clear the calls to action are.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How the website supports search visibility.</span></li>
            </ul>

            <p className="mt-2 font-bold" style={{ color: 'var(--brand-navy)' }}>
              The goal is a website that feels more useful from the moment it loads — and easier to grow from the moment it goes live.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
