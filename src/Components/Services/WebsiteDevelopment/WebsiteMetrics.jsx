import React from 'react';
import { m, LazyMotion, domAnimation } from 'motion/react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

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

const metrics = [
  {
    num: '01',
    title: 'Speed & Performance',
    desc: 'How quickly does the site load and respond across devices and connections?',
    pinColor: 'var(--accent-orange)',
    bg: 'rgba(224,131,38,0.08)',
    border: 'rgba(224,131,38,0.22)',
    text: 'var(--accent-orange)',
    rotate: 'rotate-[6deg]',
  },
  {
    num: '02',
    title: 'Mobile Experience',
    desc: 'Does the site work as well on a small screen as it does on a desktop?',
    pinColor: 'var(--brand-navy)',
    bg: 'rgba(30,47,87,0.06)',
    border: 'rgba(30,47,87,0.16)',
    text: 'var(--brand-navy)',
    rotate: '-rotate-[7deg]',
  },
  {
    num: '03',
    title: 'Accessibility',
    desc: 'Can the site be used by people with different abilities, devices, and needs?',
    pinColor: 'var(--brand-red-orange)',
    bg: 'rgba(239,88,46,0.08)',
    border: 'rgba(239,88,46,0.22)',
    text: 'var(--brand-red-orange)',
    rotate: 'rotate-[5deg]',
  },
  {
    num: '04',
    title: 'Search Visibility',
    desc: 'Can the right people find the site through organic search?',
    pinColor: 'var(--brand-blue)',
    bg: 'rgba(64,107,158,0.08)',
    border: 'rgba(64,107,158,0.22)',
    text: 'var(--brand-blue)',
    rotate: '-rotate-[6deg]',
  },
  {
    num: '05',
    title: 'Conversion',
    desc: 'Is the site helping visitors take the next intended action — enquiry, sign-up, purchase, or contact?',
    pinColor: 'var(--accent-orange)',
    bg: 'rgba(224,131,38,0.08)',
    border: 'rgba(224,131,38,0.22)',
    text: 'var(--accent-orange)',
    rotate: 'rotate-[8deg]',
  },
  {
    num: '06',
    title: 'Engagement',
    desc: 'Are visitors staying, exploring, and finding the site useful once they arrive?',
    pinColor: 'var(--brand-navy)',
    bg: 'rgba(30,47,87,0.06)',
    border: 'rgba(30,47,87,0.16)',
    text: 'var(--brand-navy)',
    rotate: '-rotate-[5deg]',
  },
];

const cardPositions = [
  { className: 'md:absolute md:top-0 md:left-[10%]' },
  { className: 'md:absolute md:top-[110px] md:right-[10%]' },
  { className: 'md:absolute md:top-[440px] md:left-[10%]' },
  { className: 'md:absolute md:top-[560px] md:right-[8%]' },
  { className: 'md:absolute md:top-[840px] md:left-[10%]' },
  { className: 'md:absolute md:top-[960px] md:right-[8%]' },
];

const CANVAS_HEIGHT = 1310;

function MetricCard({ card, position }) {
  return (
    <div
      className={`relative w-full md:w-[295px] transition-transform duration-300 hover:z-30 hover:scale-105 ${card.rotate} ${position.className}`}
    >
      <div
        className="bg-white p-2 rounded-[25px]"
        style={{ boxShadow: '0 10px 28px rgba(30,47,87,0.10)', border: '1px solid rgba(30,47,87,0.06)' }}
      >
        <div className="flex justify-center mb-5 mt-1">
          <Pin style={{ color: card.pinColor }} />
        </div>

        <div
          className="rounded-[15px] p-5 flex flex-col relative overflow-hidden"
          style={{ background: card.bg, border: `1.5px solid ${card.border}` }}
        >
          <span
            className="text-[40px] font-extrabold mb-4 leading-none"
            style={{
              color: card.text,
              fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
            }}
          >
            {card.num}
          </span>

          <h3
            className="text-[20px] font-extrabold leading-tight mb-3"
            style={{ color: 'var(--brand-navy)' }}
          >
            {card.title}
          </h3>

          <p
            className="text-[14px] leading-relaxed font-medium"
            style={{ color: 'var(--text-gray)' }}
          >
            {card.desc}
          </p>

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

export default function WebsiteMetrics() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full relative font-primary py-24 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>

        <div className="max-w-[1100px] mx-auto relative z-10">

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
                  MEASURING WEBSITE PERFORMANCE
                </span>
              </div>
              <ScrollRevealHeading
                words={[
                  { text: "A" },
                  { text: "live" },
                  { text: "website" },
                  { text: "is" },
                  { text: "the" },
                  { text: "start,", italic: true },
                  { text: "not" },
                  { text: "the" },
                  { text: "end." }
                ]}
              />
            </div>

            <div className="flex flex-col justify-center">
              <p
                className="text-[16px] md:text-[18px] font-medium leading-relaxed"
                style={{ color: 'var(--text-gray)' }}
              >
                Once a website is live, it should be evaluated against the goals it was built to achieve. Depending on the objective, we can monitor signals such as:
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[900px] mx-auto">
            <style>{`
              @media (min-width: 768px) {
                .ms-pinboard { height: ${CANVAS_HEIGHT}px; }
              }
            `}</style>

            <div className="ms-pinboard relative w-full flex flex-col space-y-8 md:space-y-0 md:block">

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

              {metrics.map((card, idx) => (
                <MetricCard key={idx} card={card} position={cardPositions[idx]} />
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center mt-20">
            <div
              className="max-w-[800px] text-center p-8 rounded-3xl text-white"
              style={{ background: 'var(--accent-orange)', boxShadow: '0 12px 36px rgba(224,131,38,0.25)' }}
            >
              <p className="text-[18px] md:text-[20px] font-bold leading-relaxed">
                The right metric depends on the website's purpose. We don't recommend treating traffic alone as the only measure of a website's success.
              </p>
            </div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
