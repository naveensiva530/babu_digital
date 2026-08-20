import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

const audiences = [
  { title: 'Startups', desc: 'Clear positioning and content that explains a new product or service without making it unnecessarily complicated.', image: 'https://images.unsplash.com/photo-1559136555-e4616d9d15e2?auto=format&fit=crop&q=80&w=800' },
  { title: 'SaaS & Technology', desc: 'Content that turns technical features, workflows and capabilities into understandable business value.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { title: 'Local Businesses', desc: 'Useful, relevant content that helps potential customers discover your business and understand why they should choose you.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
  { title: 'Growing Brands', desc: 'A consistent content approach across websites, search, social media and campaigns as the brand expands.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
];

const StepRow = ({ step, index }) => {
  const isReversed = index % 2 !== 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <div ref={ref} className="relative w-full flex flex-col md:flex-row gap-8 md:gap-0 items-center py-6 md:py-10 group">
      <div className={`w-full md:w-1/2 flex flex-col justify-center ${isReversed ? 'md:order-2 md:pl-16 lg:pl-20' : 'md:order-1 md:pr-16 lg:pr-20'}`}>
        <span className="text-[13px] font-extrabold mb-2 block" style={{ color: 'var(--brand-purple, #8b5cf6)', fontFamily: "'Playfair Display', Georgia, serif" }}>Card {String(index + 1).padStart(2, '0')}</span>
        <motion.h3 className="text-[26px] md:text-[32px] font-bold leading-[1.2] mb-4 tracking-tight" style={{ color: 'var(--brand-navy)', opacity, y }}>{step.title}</motion.h3>
        <motion.p className="text-[15px] md:text-[16px] leading-[1.7] font-medium" style={{ color: 'var(--text-gray, #475569)', opacity, y }}>{step.desc}</motion.p>
      </div>
      <div className={`relative w-full md:w-1/2 flex ${isReversed ? 'md:order-1 justify-end md:pr-12' : 'md:order-2 justify-start md:pl-12'}`}>
        <motion.div className="w-full md:w-[95%] lg:w-full aspect-[21/9] rounded-[24px] overflow-hidden bg-white shadow-xl ring-1 ring-black/5" style={{ opacity, y }}>
          <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </motion.div>
      </div>
    </div>
  );
};

export default function AudienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  return (
    <section className="w-full pt-20 pb-20 md:pt-24 md:pb-24 relative overflow-hidden bg-white font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>WRITTEN FOR THE PEOPLE YOU WANT TO REACH</span>
          </div>
          <ScrollRevealHeading maxW="900px" words={[
            { text: "Different" }, { text: "audiences" }, { text: "need" }, { text: "different" },
            { text: "reasons", italic: true }, { text: "to" }, { text: "care." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            A startup founder, a SaaS buyer, a local customer and a social media follower do not read content with the same expectations. We adapt the message to the audience, platform, buying stage and business objective while keeping the underlying brand voice consistent.
          </p>
        </div>
        <div className="flex flex-col relative z-10">
          {audiences.map((item, index) => (
            <StepRow key={index} step={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
