import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

// Import the specific 3D illustration assets
import imgHealth from '../../../assets/Services_Provide/Health Care.webp';
import imgRealEstate from '../../../assets/Services_Provide/Real Estate.webp';
import imgEducation from '../../../assets/Services_Provide/Education.webp';
import imgTech from '../../../assets/Services_Provide/IT-Tech SAAS.webp';
import imgBeauty from '../../../assets/Services_Provide/Beauty & Salon.webp';

const industries = [
  {
    category: "HEALTHCARE MARKETING",
    title: "Health Care",
    desc: "Build trust through clear, responsible, useful communication.",
    img: imgHealth
  },
  {
    category: "PROPERTY MARKETING",
    title: "Real Estate",
    desc: "Turn properties, projects, locations, and expertise into content people can discover and remember.",
    img: imgRealEstate
  },
  {
    category: "EDUCATION MARKETING",
    title: "Education",
    desc: "Create content that informs students, parents, professionals, and decision-makers.",
    img: imgEducation
  },
  {
    category: "TECH MARKETING",
    title: "IT-Tech / SaaS",
    desc: "Make complex products easier to understand through useful, visual, and educational content.",
    img: imgTech
  },
  {
    category: "LIFESTYLE MARKETING",
    title: "Beauty & Salon",
    desc: "Use visual storytelling, social proof, community, and short-form content to make the brand more discoverable.",
    img: imgBeauty
  }
];

export default function SocialIndustries() {
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
        
        {/* Header Section */}
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
              SOCIAL MEDIA BY INDUSTRY
            </span>
          </div>
          
          <ScrollRevealHeading
            justify="center"
            words={[
              { text: "The" },
              { text: "audience" },
              { text: "changes." },
              { text: "The" },
              { text: "strategy", italic: true },
              { text: "should" },
              { text: "too." }
            ]}
          />
        </div>

        {/* 5-Column Pill Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[240px]"
            >
              
              {/* Image Pill Container */}
              <div
                className="w-full aspect-[1/1.5] rounded-full overflow-hidden mb-6 relative transition-all duration-500 group-hover:-translate-y-2"
                style={{ background: 'var(--accent-orange)' }}
              >
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle inner border for depth */}
                <div className="absolute inset-0 rounded-full pointer-events-none border-[6px] border-white/10 mix-blend-overlay"></div>
              </div>

              {/* Text Content */}
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
