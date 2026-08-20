import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

import imgHealth from '../../../assets/Services_Provide/Health Care.webp';
import imgRealEstate from '../../../assets/Services_Provide/Real Estate.webp';
import imgEducation from '../../../assets/Services_Provide/Education.webp';
import imgTech from '../../../assets/Services_Provide/IT-Tech SAAS.webp';
import imgBeauty from '../../../assets/Services_Provide/Beauty & Salon.webp';

const industries = [
  {
    category: 'HEALTHCARE WEBSITES',
    title: 'Health Care',
    desc: 'Websites that communicate trust, clarity, services, and credibility for healthcare brands and practitioners.',
    img: imgHealth,
  },
  {
    category: 'REAL ESTATE WEBSITES',
    title: 'Real Estate',
    desc: 'Property-focused websites that turn listings, locations, and agent expertise into discoverable digital experiences.',
    img: imgRealEstate,
  },
  {
    category: 'EDUCATION WEBSITES',
    title: 'Education',
    desc: 'Websites that inform students, parents, professionals, and decision-makers with clear programs and outcomes.',
    img: imgEducation,
  },
  {
    category: 'TECHNOLOGY WEBSITES',
    title: 'IT-Tech / SaaS',
    desc: 'Websites that translate complex products into clear use cases, features, pricing, and conversion paths.',
    img: imgTech,
  },
  {
    category: 'LIFESTYLE WEBSITES',
    title: 'Beauty & Salon',
    desc: 'Visually-driven websites that help lifestyle, beauty, and salon brands attract, book, and retain clients.',
    img: imgBeauty,
  },
];

export default function WebsiteIndustries() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          x: 1000,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power4.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
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
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '13px',
                color: 'var(--accent-orange)',
              }}
            >
              WEBSITES BY INDUSTRY
            </span>
          </div>

          <ScrollRevealHeading
            justify="center"
            words={[
              { text: "Different" },
              { text: "industries." },
              { text: "Different", italic: true },
              { text: "websites." }
            ]}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[240px]"
            >

              <div
                className="w-full aspect-[1/1.5] rounded-full overflow-hidden mb-6 relative transition-all duration-500 group-hover:-translate-y-2"
                style={{ background: 'var(--accent-orange)' }}
              >
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-full pointer-events-none border-[6px] border-white/10 mix-blend-overlay"></div>
              </div>

              <div className="flex flex-col items-center px-1">
                <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-1.5 transition-colors duration-300 group-hover:opacity-80" style={{ color: 'var(--accent-orange)' }}>
                  {ind.category}
                </span>

                <h3 className="text-[18px] md:text-[21px] font-extrabold mb-2.5 leading-tight transition-colors duration-300" style={{ color: 'var(--brand-navy)' }}>
                  {ind.title}
                </h3>

                <p className="text-[12.5px] md:text-[13.5px] font-medium leading-[1.6] text-slate-500">
                  {ind.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
