import { useEffect, useRef } from 'react';
import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightTextRef = useRef(null);
  const cardRef = useRef(null);
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

      // Highlight box scales in
      gsap.fromTo(cardRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
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
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
              >
                MORE THAN A DIGITAL AGENCY
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "We" },
                { text: "understand", italic: true },
                { text: "the" },
                { text: "internet" },
                { text: "because" },
                { text: "we're" },
                { text: "part" },
                { text: "of" },
                { text: "it." }
              ]}
            />
          </div>

          <div ref={rightTextRef} className="lg:col-span-7 flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p>The way people discover brands has changed.</p>
            <p>
              Attention moves through feeds, search results, creators, communities, websites, conversations,
              and recommendations. Trends can change in days. A campaign can travel across platforms
              before a traditional marketing plan has caught up.
            </p>
            <p className="font-bold text-[18px] md:text-[20px]" style={{ color: 'var(--brand-navy)' }}>
              ADSSERV was built for that environment.
            </p>
            <p>
              Our Gen Z perspective isn't about adding slang to a campaign or making everything look trendy.
              It's about understanding how modern audiences behave, what makes them stop, what makes them care,
              and what makes them move.
            </p>
            <p>
              We combine that understanding with the fundamentals that still matter: strong positioning,
              clear communication, thoughtful creative, useful technology, measurable performance, and
              disciplined execution.
            </p>

            {/* Highlight Box */}
            <div ref={cardRef} className="mt-2 p-8 md:p-10 rounded-3xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'white' }}>
              <p className="text-[20px] md:text-[26px] font-bold leading-snug">
                Modern audience thinking.<br />
                <span style={{ color: 'var(--brand-yellow)' }}>Serious marketing execution.</span>
              </p>
            </div>

            <p ref={finalRef} className="mt-4 font-bold" style={{ color: 'var(--brand-navy)' }}>
              This is what defines ADSSERV.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
