import { useEffect, useRef } from 'react';
import { Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import imgMain from '../../../assets/SocailMedia/Laptop.webp';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceWhoThisIsFor() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left block slides from left
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Right image slides from right + slight scale
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Callout pill pops in
      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.6)', delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Paragraphs stagger up
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', stagger: 0.06, delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div ref={leftRef} className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                AD CREATIVE
              </span>
            </div>

            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "Good" },
                { text: "targeting" },
                { text: "still" },
                { text: "needs" },
                { text: "a" },
                { text: "message", italic: true },
                { text: "worth" },
                { text: "noticing." }
              ]}
            />

            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            {/* Body copy */}
            <div className="flex flex-col gap-3 text-[16px] md:text-[17px] font-medium leading-[1.7] text-slate-600 mb-8 max-w-[550px]">
              <p ref={el => paraRefs.current[0] = el}>
                People don't interact with advertisements simply because the targeting is technically correct.
              </p>
              <p ref={el => paraRefs.current[1] = el}>
                The creative has to earn attention.
              </p>
              <p ref={el => paraRefs.current[2] = el}>
                The message has to make sense.
              </p>
              <p ref={el => paraRefs.current[3] = el}>
                The offer has to feel relevant.
              </p>
              <p ref={el => paraRefs.current[4] = el}>
                And the next step has to be clear.
              </p>
            </div>

            {/* Callout pill */}
            <div
              ref={calloutRef}
              className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] max-w-[550px] border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Target size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                We consider the relationship between audience, hook, message, visual, offer, call to action, and landing experience rather than treating ad creative as decoration.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img
              src={imgMain}
              alt="Ad creative illustration"
              className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}