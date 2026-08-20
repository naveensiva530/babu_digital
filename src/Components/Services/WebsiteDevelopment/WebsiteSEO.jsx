import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const seoPoints = [
  "logical page architecture",
  "crawlable content",
  "heading structure",
  "URLs",
  "internal linking",
  "metadata",
  "image optimisation",
  "mobile experience",
  "technical performance",
];

export default function WebsiteSEO() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
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
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', stagger: 0.06, delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(listItemRefs.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.04, delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.9,
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
                SEO-READY DEVELOPMENT
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "SEO", italic: true },
                { text: "shouldn't" },
                { text: "be" },
                { text: "added" },
                { text: "after" },
                { text: "launch." }
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p ref={el => paraRefs.current[0] = el}>
              A website's visual design and search visibility should not have to fight each other.
            </p>
            <p ref={el => paraRefs.current[1] = el}>
              We consider SEO fundamentals during the planning and development process — including:
            </p>

            <ul className="flex flex-col gap-2 mt-1 mb-2 pl-1">
              {seoPoints.map((point, i) => (
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

            <p ref={el => paraRefs.current[2] = el} className="font-bold mt-2">
              The goal is not to make a website look "optimised."
            </p>
            <p ref={finalRef} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              The goal is to build a useful website that search engines and people can understand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}