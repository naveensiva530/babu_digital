import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollRevealHeading({ words, className = "", style = {}, maxW = "900px", justify = "flex-start" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 85%", "end 50%"] });
  const animatedWords = words.filter(w => !w.break);
  let animIndex = 0;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`} style={{ maxWidth: maxW }}>
      <h2 className="font-extrabold leading-[1.08] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontFamily: "'Inter', sans-serif", color: 'var(--brand-navy, #1e2f57)', justifyContent: justify, ...style }}>
        {words.map((word, i) => {
          if (word.break) return <div key={`br-${i}`} className="w-full basis-full h-0" />;
          const start = animIndex / animatedWords.length;
          const end = start + (1 / animatedWords.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
          animIndex++;
          if (word.italic) {
            return <motion.em key={i} style={{ opacity, fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', color: 'var(--accent-orange, #e08326)' }}>{word.text}</motion.em>;
          }
          return <motion.span key={i} style={{ opacity }}>{word.text}</motion.span>;
        })}
      </h2>
    </div>
  );
}
