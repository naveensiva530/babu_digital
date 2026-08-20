import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  "Most web designers look at the brief. We look at the business.",
  "Most web designers start with a homepage. We start with the audience.",
  "Most web designers focus on how the page looks. We focus on whether the page will work.",
  "Most web designers hand it over when it's \"done.\" We treat a website as a living project that needs to keep up with the business.",
  "Our work doesn't stop at launch. It continues through optimisation, updates, content additions, and the next stage of growth.",
  "That difference shapes everything.",
  "It shapes what we recommend.",
  "It shapes how we build.",
  "It shapes how we measure success.",
  "And it shapes what you walk away with.",
];

export default function WebsiteHowWeWork() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const paraRefs = useRef([]);
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
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.07, delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 1.1,
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
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                HOW WE WORK
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "Less" },
                { text: "decoration." },
                { text: "More" },
                { text: "direction.", italic: true }
              ]}
            />
          </div>

          <div ref={rightRef} className="flex flex-col gap-4 text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                ref={el => paraRefs.current[i] = el}
                className={p === "That difference shapes everything." || p === "It shapes what we recommend." || p === "It shapes how we build." || p === "It shapes how we measure success." || p === "And it shapes what you walk away with." ? "font-bold" : ""}
                style={p === "That difference shapes everything." || p === "It shapes what we recommend." || p === "It shapes how we build." || p === "It shapes how we measure success." || p === "And it shapes what you walk away with." ? { color: 'var(--brand-navy)' } : {}}
              >
                {p}
              </p>
            ))}
            <p ref={finalRef} className="mt-4 font-bold" style={{ color: 'var(--brand-navy)' }}>
              Our focus is on building websites that continue working long after the project closes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
