import React, { useEffect, useRef } from 'react';
import { Mic } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import imgMain from '../../../assets/SocailMedia/Laptop.webp';

export default function CreativeDirection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);

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

      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.6)', delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                CREATIVE DIRECTION
              </span>
            </div>

            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "Creators" },
                { text: "know" },
                { text: "their" },
                { text: "audience." },
                { text: "We" },
                { text: "help" },
                { text: "connect" },
                { text: "that" },
                { text: "knowledge", italic: true },
                { text: "to" },
                { text: "the" },
                { text: "brand." }
              ]}
            />

            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <div className="flex flex-col gap-4 text-[14.5px] md:text-[15px] font-medium leading-[1.8] text-slate-600 mb-10 max-w-[550px]">
              <p>The best creator content rarely sounds like a press release.</p>
              <p>
                Instead of giving creators a rigid script, we establish what must be communicated,
                what should be avoided, what the audience needs to understand, and what action the
                campaign is designed to encourage.
              </p>
              <p>
                The creator can then bring their own voice, format, personality, and storytelling
                style into the content.
              </p>
            </div>

            <div ref={calloutRef} className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] max-w-[550px] border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Mic size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                That balance protects the brand without stripping away the reason people followed the creator in the first place.
              </p>
            </div>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img
              src={imgMain}
              alt="Creative Direction for Creator Campaigns"
              className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
