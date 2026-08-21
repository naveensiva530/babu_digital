import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../Components/ui/button-with-icon';
import '../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlogFinalCTA() {
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

      // Eyebrow fades in first
      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      )
      // Heading dramatically scales + fades
      .fromTo(headingRef.current,
        { opacity: 0, scale: 0.88, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.3'
      )
      // Paragraphs slide up
      .fromTo(paraRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.5'
      )
      // Buttons pop in together
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.4'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 relative font-primary overflow-hidden bg-white border-t border-gray-100">
      {/* Subtle bg decoration */}
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
            READY TO TAKE THE NEXT STEP?
          </span>
        </div>

        <h2 ref={headingRef} className="text-[44px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8 max-w-[900px]" style={{ color: 'var(--accent-orange)' }}>
          Have a Digital Marketing Challenge?
        </h2>

        <div ref={paraRef} className="flex flex-col gap-3 mb-12">
          <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            Whether you need better search visibility, stronger social media, more effective campaigns or a clearer digital strategy, tell us what you are trying to achieve.
          </p>
          <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            We'll help you figure out what should happen next.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <Link to="/contact">
            <ButtonWithIcon>Talk to Our Team</ButtonWithIcon>
          </Link>
          <Link to="/services">
            <ButtonWithIcon outline={true}>Explore Our Services</ButtonWithIcon>
          </Link>
        </div>

      </div>
    </section>
  );
}
