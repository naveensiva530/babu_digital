import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

import healthCareImg    from '../../assets/Services/Health Care.webp';
import realEstateImg    from '../../assets/Services/Real Estate.webp';
import educationImg     from '../../assets/Services/Education care.webp';
import itSaasImg        from '../../assets/Services/IT-SAAS.webp';
import beautyImg        from '../../assets/Services/Beauty & Salon.webp';

const industries = [
  {
    label:     "HEALTHCARE MARKETING",
    labelColor:"#F5A623",
    title:     "Health Care",
    desc:      "Build trust through clear, responsible, useful communication.",
    img:       healthCareImg,
  },
  {
    label:     "PROPERTY MARKETING",
    labelColor:"#F5A623",
    title:     "Real Estate",
    desc:      "Turn properties, projects, locations, and expertise into content people can discover and remember.",
    img:       realEstateImg,
  },
  {
    label:     "EDUCATION MARKETING",
    labelColor:"#F5A623",
    title:     "Education",
    desc:      "Create content that informs students, parents, professionals, and decision-makers.",
    img:       educationImg,
  },
  {
    label:     "TECH MARKETING",
    labelColor:"#F5A623",
    title:     "IT-Tech / SaaS",
    desc:      "Make complex products easier to understand through useful, visual, and educational content.",
    img:       itSaasImg,
  },
  {
    label:     "LIFESTYLE MARKETING",
    labelColor:"#F5A623",
    title:     "Beauty & Salon",
    desc:      "Use visual storytelling, social proof, community, and short-form content to make the brand more discoverable.",
    img:       beautyImg,
  },
];

export default function Industries() {
  const { sectionRef, ref, refArray } = useScrollAnimation((refs, section) => {
    // Header
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Industry cards
    if (refs.cards && refs.cards[0]) {
      fadeUp(refs.cards, {
        trigger: refs.cards[0],
        start: 'top 82%',
        duration: 0.5,
        stagger: 0.07,
        y: 50,
        scale: 0.95,
      });
    }
  });

  return (
    <section ref={sectionRef} className="w-full py-20 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple, #C8B6E2)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
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
              SOCIAL MEDIA BY INDUSTRY
            </span>
          </div>

          <div ref={ref('heading')}>
            <ScrollRevealHeading
              className="mb-6"
              maxW="900px"
              justify="center"
              words={[
                { text: "The" },
                { text: "audience" },
                { text: "changes.", italic: true },
                { text: "The" },
                { text: "strategy" },
                { text: "should" },
                { text: "too." }
              ]}
            />
          </div>

          <p
            ref={ref('paragraph')}
            className="text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[680px]"
            style={{ color: '#334155' }}
          >
            Different industries speak to different audiences, with different expectations. Our
            social media work adapts to the category, the customer, and the conversation that
            already exists around the brand.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-4 lg:gap-3 xl:gap-5 mb-8">
          {industries.map((ind, idx) => {
            // Middle card (index 2) is tallest, cards taper outward
            const heights = ['260px', '300px', '340px', '300px', '260px'];
            const cardHeight = heights[idx] || '280px';

            return (
              <div
                key={idx}
                ref={refArray('cards')}
                className="flex flex-col items-center group"
                style={{ flex: '1 1 0', maxWidth: '220px', minWidth: '160px' }}
              >
                {/* Oval Image Card */}
                <div
                  style={{
                    width: '100%',
                    height: cardHeight,
                    borderRadius: '120px',
                    overflow: 'hidden',
                    backgroundColor: '#E8DCFA',
                    position: 'relative',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(139, 92, 246, 0.22)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.12)';
                  }}
                >
                  <img
                    src={ind.img}
                    alt={ind.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Subtle purple overlay at bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, rgba(196, 168, 237, 0.5), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Text Below */}
                <div className="flex flex-col items-center text-center mt-6 px-2">
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-[0.12em] mb-2"
                    style={{ color: ind.labelColor }}
                  >
                    {ind.label}
                  </span>
                  <h3
                    className="text-[18px] md:text-[20px] font-extrabold mb-2 leading-tight text-white"
                  >
                    {ind.title}
                  </h3>
                  <p className="text-[12.5px] md:text-[13px] text-white/75 font-medium leading-relaxed max-w-[180px]">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
