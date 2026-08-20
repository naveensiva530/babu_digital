import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function ArticleCTA({ eyebrow, title, copy, primaryLabel, primaryLink, secondaryLabel, secondaryLink }) {
  return (
    <section className="w-full py-16 font-primary">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="relative bg-[var(--brand-navy)] rounded-[28px] px-8 md:px-12 py-12 md:py-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent-orange) 0%, transparent 70%)', transform: 'translate(25%, -25%)' }} />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest text-white/80" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '12px' }}>
                {eyebrow}
              </span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-extrabold text-white leading-tight mb-4">{title}</h2>
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/75 mb-8">{copy}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={primaryLink} className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent-orange)] text-white text-[14px] font-bold rounded-full hover:bg-white hover:text-[var(--brand-navy)] transition-all duration-300">
                <span>{primaryLabel}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to={secondaryLink} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white text-[14px] font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
