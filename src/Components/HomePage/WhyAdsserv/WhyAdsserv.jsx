import React from 'react';
import { Zap, Target, Layers, Briefcase, MessageSquare, RefreshCw } from 'lucide-react';
import '../common.css';

const differences = [
  { title: "Gen Z thinking", desc: "We understand how modern audiences discover, consume, share, ignore, and respond to digital content.", icon: Zap, color: "#e08326" },
  { title: "Creative meets performance", desc: "Ideas matter. So do the numbers. We bring creative execution and measurable thinking into the same conversation.", icon: Target, color: "#7c3aed" },
  { title: "Platform-native execution", desc: "Content should fit the environment it appears in—not look like one idea copied ten times.", icon: Layers, color: "#3a7eb7" },
  { title: "Business-aware marketing", desc: "Attention is useful only when it connects to something meaningful for the business.", icon: Briefcase, color: "#1a7974" },
  { title: "Less jargon. More clarity.", desc: "You shouldn't need a marketing dictionary to understand what your agency is doing.", icon: MessageSquare, color: "#d97c23" },
  { title: "Always learning", desc: "Platforms change. Audiences change. Markets change. Good digital work keeps learning.", icon: RefreshCw, color: "#c6538c" },
];

const DifferenceCard = ({ title, desc, color, Icon }) => {
  return (
    <div 
      className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md group"
      style={{ borderColor: 'rgba(0,0,0,0.06)' }}
    >
      <div className="relative">
        {/* Icon Container */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          <Icon size={24} strokeWidth={2.5} />
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-2">
          <h3 
            className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--brand-orange)]" 
            style={{ color: 'var(--text-dark-blue)' }}
          >
            {title}
          </h3>
          <p 
            className="font-medium leading-relaxed line-clamp-3" 
            style={{ color: 'var(--text-gray)', fontSize: '14.5px' }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function WhyAdsserv() {
  return (
    <section className="w-full py-32 relative bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        {/* Intro */}
        <div className="flex flex-col items-start justify-start text-left mb-16 max-w-[800px]">
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[14px] md:text-[16px] italic font-medium uppercase tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--text-dark-blue)' }}
            >
              THE DIFFERENCE
            </span>
          </div>

          <h2 className="text-[40px] md:text-[54px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: 'var(--text-dark-blue)' }}>
            We'd rather be useful than sound impressive.
          </h2>

          <div className="text-[16px] md:text-[18px] font-medium leading-relaxed" style={{ color: '#546b8d' }}>
            <p className="mb-2">
              There are enough agencies that promise everything, use the same words, and make every business sound like a "market leader." That's not particularly interesting.
            </p>
            <p>
              ADSSERV takes a different approach: understand the audience, understand the platform, understand the business problem, then make the work earn its place.
            </p>
          </div>
        </div>

        {/* Integration Card Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {differences.map((diff, i) => (
            <DifferenceCard 
              key={i}
              title={diff.title}
              desc={diff.desc}
              color={diff.color}
              Icon={diff.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
