import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

import imgNano from '../../../assets/SocailMedia/Connect.webp';
import imgMicro from '../../../assets/SocailMedia/Educate.webp';
import imgMid from '../../../assets/SocailMedia/Entertain.webp';
import imgMacro from '../../../assets/SocailMedia/Build Trust.webp';
import imgNiche from '../../../assets/SocailMedia/Convert.webp';

const creatorTypes = [
  {
    num: "01",
    category: "NANO CREATORS",
    title: "Nano Creators",
    desc: "Smaller communities can be useful when relevance, authenticity, local reach, or niche audience fit matters.",
    img: imgNano
  },
  {
    num: "02",
    category: "MICRO CREATORS",
    title: "Micro Creators",
    desc: "Creators with focused audiences can help brands reach specific communities without relying entirely on mass reach.",
    img: imgMicro
  },
  {
    num: "03",
    category: "MID-TIER CREATORS",
    title: "Mid-Tier Creators",
    desc: "Useful for campaigns that need a broader audience while maintaining a defined content identity.",
    img: imgMid
  },
  {
    num: "04",
    category: "MACRO CREATORS",
    title: "Macro Creators",
    desc: "Larger creators can support campaigns where scale, awareness, and broad visibility are important.",
    img: imgMacro
  },
  {
    num: "05",
    category: "NICHE CREATORS",
    title: "Niche Creators",
    desc: "Specialist creators can help brands communicate with audiences built around particular interests, industries, lifestyles, or communities.",
    img: imgNiche
  }
];

export default function CreatorTypes() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: 1000, scale: 0.9 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.3, ease: 'power4.out', stagger: 0.04,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              NOT EVERY CAMPAIGN NEEDS THE BIGGEST CREATOR
            </span>
          </div>

          <ScrollRevealHeading
            justify="center"
            words={[
              { text: "Different" },
              { text: "creators" },
              { text: "can" },
              { text: "play" },
              { text: "different", italic: true },
              { text: "roles." }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-8 border-t border-gray-200 pt-10">
          {creatorTypes.map((type, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className={`flex flex-col group relative ${
                idx % 3 !== 0 ? 'lg:border-l lg:border-gray-200 lg:pl-8' : ''
              } ${
                idx % 2 !== 0 ? 'md:border-l md:border-gray-200 md:pl-8 lg:border-none lg:pl-0' : ''
              } ${
                (idx % 3 !== 0 && idx % 2 !== 0) ? 'lg:border-l lg:border-gray-200 lg:pl-8' : ''
              }`}
            >
              {/* Step label (Eyebrow) */}
              <span
                className="text-[15px] font-bold tracking-wide mb-6 uppercase"
                style={{ color: 'var(--accent-orange, #e08326)' }}
              >
                {type.category}
              </span>

              {/* Icon and Text row */}
              <div className="flex items-start gap-5">
                {/* Circular icon holder with white bg and shadow */}
                <div
                  className="flex-shrink-0 w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: '0 8px 24px rgba(30,47,87,0.06)',
                  }}
                >
                  <img
                    src={type.img}
                    alt={type.title}
                    className="w-[42px] h-[42px] object-contain drop-shadow-sm"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col pt-1">
                  <h3
                    className="text-[20px] font-extrabold leading-tight mb-2"
                    style={{ color: 'var(--brand-navy, #1e2f57)' }}
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: '#475569' }}
                  >
                    {type.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-[17px] md:text-[19px] font-bold max-w-[700px] mx-auto" style={{ color: 'var(--brand-navy)' }}>
          The right creator tier depends on the campaign — not the ego attached to the follower count.
        </p>
      </div>
    </section>
  );
}
