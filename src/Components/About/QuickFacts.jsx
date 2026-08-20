import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

const facts = [
  {
    num: "01",
    title: "Agency",
    desc: "Gen Z digital marketing and growth agency.",
    tag: "WHO WE ARE",
  },
  {
    num: "02",
    title: "Core focus",
    desc: "Creative, strategy, digital execution, and performance.",
    tag: "WHAT WE DO",
  },
  {
    num: "03",
    title: "Capabilities",
    desc: "Social media, paid advertising, SEO, websites, influencers, video, branding, consulting, content, and Instagram marketing.",
    tag: "WHAT WE COVER",
  },
  {
    num: "04",
    title: "Industries",
    desc: "Health Care, Real Estate, Education, IT-Tech / SaaS, and Beauty & Salon.",
    tag: "WHERE WE WORK",
  },
  {
    num: "05",
    title: "Approach",
    desc: "Audience-first, platform-aware, commercially focused, and continuously improving.",
    tag: "HOW WE WORK",
  }
];

export default function QuickFacts() {
  const { sectionRef, ref, refArray } = useScrollAnimation((refs, section) => {
    // Header
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Cards
    if (refs.cards && refs.cards[0]) {
      fadeUp(refs.cards, {
        trigger: refs.cards[0],
        start: 'top 82%',
        duration: 0.5,
        stagger: 0.06,
        y: 40,
        scale: 0.96,
      });
    }
  });

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 relative font-primary bg-white"
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Eyebrow */}
          <div ref={ref('eyebrow')} className="flex items-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
            >
              ADSSERV AT A GLANCE
            </span>
          </div>

          <div ref={ref('heading')}>
            <ScrollRevealHeading
              className="mb-6"
              maxW="800px"
              justify="center"
              words={[
                { text: "ADSSERV" },
                { text: "at", italic: true },
                { text: "a" },
                { text: "glance." }
              ]}
            />
          </div>

          <p
            ref={ref('paragraph')}
            className="text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[680px]"
            style={{ color: '#334155' }}
          >
            A snapshot of the agency — what we do, the work we cover, and the way we think
            about digital marketing for modern brands.
          </p>
        </div>

        {/* Fact cards grid — 5 across on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              ref={refArray('cards')}
              className="group relative flex flex-col p-7 rounded-3xl shadow-[0_8px_32px_rgba(11,31,82,0.08)] border border-slate-200 transition-all duration-300"
              style={{ backgroundColor: 'var(--bg-light-purple)' }}
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-[10.5px] font-extrabold uppercase tracking-[0.12em] px-2.5 py-1 rounded-md"
                  style={{
                    color: 'var(--accent-orange, #e08326)',
                    backgroundColor: 'rgba(224,131,38,0.10)',
                  }}
                >
                  {fact.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[22px] font-extrabold leading-snug mb-4"
                style={{ color: 'var(--brand-navy, #0b1f52)' }}
              >
                {fact.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-[2px] mb-5" style={{ backgroundColor: 'var(--accent-orange, #e08326)' }}></div>

              {/* Description */}
              <p className="text-[14.5px] font-medium leading-relaxed" style={{ color: '#475569' }}>
                {fact.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
