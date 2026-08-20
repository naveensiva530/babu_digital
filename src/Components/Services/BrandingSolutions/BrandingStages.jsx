import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from './ScrollRevealHeading';

const stages = [
  {
    title: "Startups",
    desc: "Build a clear identity from the beginning without creating unnecessary complexity.",
    image: "https://images.unsplash.com/photo-1559136555-e4616d9d15e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Growing Businesses",
    desc: "Bring consistency to an expanding digital presence, team, product range, or customer base.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Established Brands",
    desc: "Refine, modernise, or reposition an identity while protecting the recognition you've already built.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "New Products",
    desc: "Create a visual and messaging system that gives a new product its own presence while remaining connected to the parent brand.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
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
        <motion.h3 className="text-[26px] md:text-[32px] font-bold leading-[1.2] mb-4 tracking-tight" style={{ color: 'var(--brand-navy)', opacity, y }}>{step.title}</motion.h3>
        <motion.p className="text-[15px] md:text-[16px] leading-[1.7] font-medium" style={{ color: 'var(--text-gray, #475569)', opacity, y }}>{step.desc}</motion.p>
      </div>
      <div className={`relative w-full md:w-1/2 flex ${isReversed ? 'md:order-1 justify-end md:pr-12' : 'md:order-2 justify-start md:pl-12'}`}>
        <motion.div className="w-full md:w-[95%] lg:w-full aspect-[21/9] rounded-[24px] overflow-hidden bg-white shadow-xl ring-1 ring-black/5" style={{ opacity, y }}>
          <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </motion.div>
        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 ${isReversed ? 'right-0 w-12' : 'left-0 w-12'}`}>
          <motion.div className={`w-full h-full bg-[var(--accent-orange)] ${isReversed ? 'origin-right' : 'origin-left'}`} style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </div>
  );
};

export default function BrandingStages() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  return (
    <section className="w-full pt-20 pb-20 md:pt-24 md:pb-24 relative overflow-hidden bg-white font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              NOT EVERY BRAND NEEDS THE SAME THING
            </span>
          </div>
          <ScrollRevealHeading maxW="900px" words={[
            { text: "The" }, { text: "right" }, { text: "branding" }, { text: "depends" },
            { text: "on", italic: true }, { text: "where" }, { text: "the" }, { text: "business" }, { text: "is" }, { text: "going." }
          ]} />
        </div>

        <div className="relative w-full">
          <div className="hidden md:block absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 z-0">
            <motion.div className="w-full bg-[var(--accent-orange)] origin-top" style={{ height: '100%', scaleY: scrollYProgress }} />
            <motion.div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-orange)] shadow-[0_0_0_6px_#fff]" style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} />
          </div>
          <div className="flex flex-col relative z-10">
            {stages.map((item, index) => (
              <StepRow key={index} step={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
