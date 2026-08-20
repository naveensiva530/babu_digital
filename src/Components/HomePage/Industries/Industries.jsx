import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { TextRotate } from '../../../Components/ui/text-rotate';
import '../common.css';

import healthImg from "../../../assets/Services/Health Care.webp";
import realEstateImg from "../../../assets/Services/Real Estate.webp";
import educationImg from "../../../assets/Services/Education care.webp";
import saasImg from "../../../assets/Services/IT-SAAS.webp";
import beautyImg from "../../../assets/Services/Beauty & Salon.webp";

const industries = [
  {
    category: "Healthcare Marketing",
    title: "Health Care",
    subtitle: "Building trust in a sensitive space.",
    image: healthImg,
    path: "/services/health-care",
  },
  {
    category: "Property Marketing",
    title: "Real Estate",
    subtitle: "Turning properties into digital stories.",
    image: realEstateImg,
    path: "/services/real-estate",
  },
  {
    category: "Education Marketing",
    title: "Education",
    subtitle: "Connecting institutions with students.",
    image: educationImg,
    path: "/services/education",
  },
  {
    category: "Tech Marketing",
    title: "IT-Tech / SaaS",
    subtitle: "Making technology easy to choose.",
    image: saasImg,
    path: "/services/it-tech-saas",
  },
  {
    category: "Lifestyle Marketing",
    title: "Beauty & Salon",
    subtitle: "Visual brands that command attention.",
    image: beautyImg,
    path: "/services/beauty-and-salon",
  },
];

export default function Industries() {
  return (
    <section
      className="w-full pt-20 pb-32 relative overflow-hidden"
      style={{ background: 'var(--bg-light-purple)', fontFamily: 'var(--font-primary)' }}
    >
      {/* Top Curve Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px]" style={{ display: 'block' }}>
          <path d="M0,0 L1440,0 L1440,0 Q720,120 0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="w-full px-[10px] relative z-20">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3 mb-20 text-center">
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[16px] italic font-medium text-[#1a233a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              INDUSTRY EXPERIENCE
            </span>
          </div>

          <LayoutGroup>
            <motion.div
              layout
              className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-[36px] md:text-[50px] font-extrabold leading-[1.1] tracking-tight text-center flex-wrap"
              style={{ color: 'var(--text-dark-blue)' }}
            >
              <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }} className="whitespace-nowrap">
                Context changes
              </motion.span>
              <TextRotate
                texts={['everything. ✦', 'the approach.', 'the audience.', 'the message.', 'the outcome.']}
                mainClassName="text-white px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md"
                style={{ background: 'var(--text-dark-blue)' }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.div>
          </LayoutGroup>

          <p
            className="text-[15px] font-medium mt-4 max-w-[680px] leading-relaxed"
            style={{ color: 'var(--text-gray)' }}
          >
            A marketing idea that works for a beauty brand may make no sense for a healthcare business. We adapt the strategy to the audience, buying journey, competition, and communication requirements of the industry.
          </p>
        </div>

        {/* Single row of pill cards — all equal size */}
        <div className="flex flex-row items-start justify-between gap-4 md:gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', paddingTop: '20px' }}>
          {industries.map((item, index) => {
            return (
              <motion.a
                key={index}
                href={item.path}
                className="flex-1 min-w-[140px] flex flex-col items-center group"
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Pill Image — same size for all */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    width: '100%',
                    maxWidth: 230,
                    height: 340,
                    borderRadius: '44%',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 10px 32px rgba(30,47,87,0.14)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease',
                    }}
                    className="group-hover:scale-[1.06]"
                  />
                  {/* Bottom gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(30,47,87,0.50) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }} />
                </motion.div>

                {/* Text Below */}
                <div className="flex flex-col items-center text-center mt-5 px-1 w-full">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1"
                    style={{ color: 'var(--brand-orange)' }}
                  >
                    {item.category}
                  </span>
                  <span
                    className="text-[16px] md:text-[17px] font-bold leading-tight"
                    style={{ color: 'var(--text-dark-blue)' }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="text-[12px] mt-1 font-medium leading-snug max-w-[150px]"
                    style={{ color: 'var(--text-gray)' }}
                  >
                    {item.subtitle}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
