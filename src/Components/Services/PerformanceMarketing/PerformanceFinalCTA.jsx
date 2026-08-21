import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ButtonWithIcon from '../../../Components/ui/button-with-icon';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceFinalCTA() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      )
      .fromTo(headingRef.current,
        { opacity: 0, scale: 0.88, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.3'
      )
      .fromTo(paraRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.4'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 relative font-primary overflow-hidden bg-white border-t border-gray-100">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full opacity-[0.04] blur-[100px]" style={{ background: 'var(--brand-navy)' }}></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full opacity-[0.05] blur-[80px]" style={{ background: 'var(--accent-orange)' }}></div>
      </div>

      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">

        <div ref={eyebrowRef} className="flex items-center gap-2 mb-6">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="text-[14px] md:text-[15px] italic font-medium uppercase tracking-wider"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy)' }}
          >
            READY TO START?
          </span>
        </div>

        <h2 ref={headingRef} className="text-[44px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8 max-w-[900px]" style={{ color: 'var(--accent-orange)' }}>
          Let's build a campaign around what you actually want to achieve.
        </h2>

        <div ref={paraRef} className="flex flex-col gap-3 mb-12">
          <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            Tell us your business objective, your target audience, your budget, and what you've tried before.
          </p>
          <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            We'll tell you whether paid advertising makes sense, and what a focused strategy might look like.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <ButtonWithIcon>Plan My Campaign</ButtonWithIcon>
          <ButtonWithIcon outline={true}>Talk to ADSSERV</ButtonWithIcon>
        </div>

      </div>
    </section>
  );
}
