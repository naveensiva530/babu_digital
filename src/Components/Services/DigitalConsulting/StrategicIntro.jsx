import React, { useEffect, useRef } from 'react';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function StrategicIntro() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <ScrollRevealHeading words={[
              { text: "You" }, { text: "don't" }, { text: "need" }, { text: "more" },
              { text: "marketing.", italic: true }, { text: "You" }, { text: "need" },
              { text: "better" }, { text: "decisions." }
            ]} />
          </div>
          <div ref={rightRef} className="flex flex-col gap-6">
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
              SEO, social media, paid advertising, content, websites and creators can all play a role in growth. The problem starts when they're treated as separate activities with no clear connection to the business goal.
            </p>
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
              Our digital consulting approach looks at the bigger picture first. We examine your current digital presence, audience, channels, customer journey and opportunities, then turn what we find into practical priorities your team can actually act on.
            </p>
            <div className="mt-2">
              <ButtonWithIcon>Find Your Next Move</ButtonWithIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
