import React, { useEffect, useRef } from 'react';
import '../common.css';
import { useInView, animate } from 'framer-motion';

const stats = [
  { value: 50, suffix: "+", label: "Projects / campaigns delivered" },
  { value: 10, suffix: "+", label: "Brands or businesses served" },
  { value: 5, suffix: "M+", label: "Relevant audience reach / impressions" },
  { value: 98, suffix: "%", label: "Verified result or outcome" },
];

function Counter({ from, to, suffix, duration = 2.5 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, duration, isInView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Numbers() {
  return (
    <section className="w-full pt-24 pb-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Eyebrow matching the requested format */}
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="text-[14px] md:text-[15px] italic font-medium uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy)' }}
              >
                PROOF, NOT NOISE
              </span>
            </div>
            
            <h2 className="text-[36px] md:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-8" style={{ color: 'var(--brand-navy)' }}>
              Show the work. Then show the numbers.
            </h2>
            
            <p className="text-[16px] font-medium leading-relaxed mb-4 text-slate-700">
              The strongest numbers are the ones we can explain.
            </p>
            <p className="text-[16px] font-medium leading-relaxed text-slate-700">
              Instead of filling the page with impressive-looking statistics, we use verified project, campaign, audience, traffic, engagement, lead, or business results where the data genuinely exists.
            </p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col border-l-2 pl-6 py-2 transition-colors duration-500 hover:border-[#f97316]" style={{ borderColor: 'rgba(30, 47, 87, 0.2)' }}>
                <div className="text-[48px] md:text-[60px] font-extrabold mb-2 leading-none" style={{ color: 'var(--brand-navy)' }}>
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-wide text-slate-600 pr-4">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
