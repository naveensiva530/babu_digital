import React, { useRef } from 'react';
import { m, LazyMotion, domAnimation } from 'motion/react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

/* ─── Pin SVG ────────────────────────────────────────────── */
const Pin = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={style}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

/* ─── Feature card data ──────────────────────────────────── */
const features = [
  {
    num: '01',
    title: 'Responsive Design',
    desc: 'Layouts that adapt cleanly across desktop, tablet, and mobile devices.',
    pinColor: 'var(--accent-orange)',
    bg: 'rgba(224,131,38,0.08)',
    border: 'rgba(224,131,38,0.22)',
    text: 'var(--accent-orange)',
    rotate: 'rotate-[6deg]',
  },
  {
    num: '02',
    title: 'Clear Information Architecture',
    desc: 'Pages and navigation organised around how visitors actually find information.',
    pinColor: 'var(--brand-navy)',
    bg: 'rgba(30,47,87,0.06)',
    border: 'rgba(30,47,87,0.16)',
    text: 'var(--brand-navy)',
    rotate: '-rotate-[7deg]',
  },
  {
    num: '03',
    title: 'Conversion Paths',
    desc: 'Clear calls to action that guide users towards enquiries, bookings, purchases, registrations, or other intended actions.',
    pinColor: 'var(--brand-red-orange)',
    bg: 'rgba(239,88,46,0.08)',
    border: 'rgba(239,88,46,0.22)',
    text: 'var(--brand-red-orange)',
    rotate: 'rotate-[5deg]',
  },
  {
    num: '04',
    title: 'SEO Foundations',
    desc: 'Page structure, headings, metadata, URLs, internal linking, and other foundational elements considered during development.',
    pinColor: 'var(--brand-blue)',
    bg: 'rgba(64,107,158,0.08)',
    border: 'rgba(64,107,158,0.22)',
    text: 'var(--brand-blue)',
    rotate: '-rotate-[6deg]',
  },
  {
    num: '05',
    title: 'Performance',
    desc: 'Attention to page weight, image delivery, scripts, layout stability, and loading experience.',
    pinColor: 'var(--accent-orange)',
    bg: 'rgba(224,131,38,0.08)',
    border: 'rgba(224,131,38,0.22)',
    text: 'var(--accent-orange)',
    rotate: 'rotate-[8deg]',
  },
  {
    num: '06',
    title: 'Accessible Interfaces',
    desc: 'Interfaces designed with readable structure, keyboard usability, contrast, labels, and other accessibility considerations in mind.',
    pinColor: 'var(--brand-navy)',
    bg: 'rgba(30,47,87,0.06)',
    border: 'rgba(30,47,87,0.16)',
    text: 'var(--brand-navy)',
    rotate: '-rotate-[5deg]',
  },
  {
    num: '07',
    title: 'Content-Ready Structure',
    desc: 'A flexible page architecture that allows the business to expand its content and services without rebuilding everything from scratch.',
    pinColor: 'var(--brand-red-orange)',
    bg: 'rgba(239,88,46,0.08)',
    border: 'rgba(239,88,46,0.22)',
    text: 'var(--brand-red-orange)',
    rotate: 'rotate-[7deg]',
  },
  {
    num: '08',
    title: 'Analytics & Tracking',
    desc: 'Support for the measurement tools required to understand website behaviour and conversions.',
    pinColor: 'var(--brand-blue)',
    bg: 'rgba(64,107,158,0.08)',
    border: 'rgba(64,107,158,0.22)',
    text: 'var(--brand-blue)',
    rotate: '-rotate-[8deg]',
  },
];

/* ─── Card positions (scattered desktop layout) ──────────── */
const cardPositions = [
  { className: 'md:absolute md:top-0 md:left-[8%]' },
  { className: 'md:absolute md:top-[110px] md:right-[8%]' },
  { className: 'md:absolute md:top-[420px] md:left-[8%]' },
  { className: 'md:absolute md:top-[540px] md:right-[6%]' },
  { className: 'md:absolute md:top-[820px] md:left-[8%]' },
  { className: 'md:absolute md:top-[940px] md:right-[6%]' },
  { className: 'md:absolute md:top-[1220px] md:left-[8%]' },
  { className: 'md:absolute md:top-[1340px] md:right-[6%]' },
];

const CANVAS_HEIGHT = 1690;

/* ─── Individual card ────────────────────────────────────── */
function FeatureCard({ card, position }) {
  return (
    <div
      className={`relative w-full md:w-[295px] transition-transform duration-300 hover:z-30 hover:scale-105 ${card.rotate} ${position.className}`}
    >
      <div
        className="bg-white p-2 rounded-[25px]"
        style={{ boxShadow: '0 10px 28px rgba(30,47,87,0.10)', border: '1px solid rgba(30,47,87,0.06)' }}
      >
        {/* Pin */}
        <div className="flex justify-center mb-5 mt-1">
          <Pin style={{ color: card.pinColor }} />
        </div>

        {/* Inner card */}
        <div
          className="rounded-[15px] p-5 flex flex-col relative overflow-hidden"
          style={{ background: card.bg, border: `1.5px solid ${card.border}` }}
        >
          {/* Number */}
          <span
            className="text-[40px] font-extrabold mb-4 leading-none"
            style={{
              color: card.text,
              fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
            }}
          >
            {card.num}
          </span>

          {/* Title */}
          <h3
            className="text-[20px] font-extrabold leading-tight mb-3"
            style={{ color: 'var(--brand-navy)' }}
          >
            {card.title}
          </h3>

          {/* Description */}
          <p
            className="text-[14px] leading-relaxed font-medium"
            style={{ color: 'var(--text-gray)' }}
          >
            {card.desc}
          </p>

          {/* Corner dot grid */}
          <div
            className="absolute -bottom-2 -right-2 w-16 h-16 opacity-20"
            style={{
              backgroundImage: `radial-gradient(${card.text} 1.5px, transparent 1.5px)`,
              backgroundSize: '8px 8px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export default function WebsiteFeatures() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full relative font-primary py-24 px-4 md:px-8 overflow-hidden bg-white">


        <div className="max-w-[1100px] mx-auto relative z-10">

          {/* Header — two column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
                >
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
                >
                  WHAT'S BUILT INTO THE EXPERIENCE
                </span>
              </div>
              <ScrollRevealHeading
                words={[
                  { text: "More" },
                  { text: "than" },
                  { text: "visuals.", italic: true }
                ]}
              />
            </div>

            <div className="flex flex-col justify-center">
              <p
                className="text-[16px] md:text-[18px] font-medium leading-relaxed"
                style={{ color: 'var(--text-gray)' }}
              >
                The details users notice — and the ones they don't — work together to shape how the website feels, performs, and supports the business behind it.
              </p>
            </div>
          </div>

          {/* Pinboard canvas */}
          <div className="relative w-full max-w-[900px] mx-auto">
            <style>{`
              @media (min-width: 768px) {
                .wf-pinboard { height: ${CANVAS_HEIGHT}px; }
              }
            `}</style>

            <div className="wf-pinboard relative w-full flex flex-col space-y-8 md:space-y-0 md:block">

              {/* Animated dashed SVG path */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 900 ${CANVAS_HEIGHT}`}
                preserveAspectRatio="none"
              >
                <m.path
                  d={`
                    M 265 150
                    C 450 150, 500 260, 660 260
                    C 800 260, 450 370, 265 450
                    C 265 560, 500 660, 690 660
                    C 855 660, 450 760, 265 840
                    C 265 960, 500 1060, 700 1060
                    C 800 1060, 450 1170, 265 1250
                    C 265 1360, 500 1460, 690 1460
                    C 800 1460, 450 1560, 265 1640
                  `}
                  stroke="rgba(30,47,87,0.15)"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  fill="none"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -140 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </svg>

              {/* Cards */}
              {features.map((card, idx) => (
                <FeatureCard key={idx} card={card} position={cardPositions[idx]} />
              ))}
            </div>
          </div>

          {/* Bottom callout */}
          <div className="w-full flex justify-center mt-20">
            <div
              className="max-w-[800px] text-center p-8 rounded-3xl text-white"
              style={{ background: 'var(--accent-orange)', boxShadow: '0 12px 36px rgba(224,131,38,0.25)' }}
            >
              <p className="text-[18px] md:text-[20px] font-bold leading-relaxed">
                The right feature set depends on the website's purpose. We don't recommend treating visual polish or page count as the only measure of a successful build.
              </p>
            </div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
