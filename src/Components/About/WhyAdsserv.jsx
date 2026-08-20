import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

import iconBuildTrust from '../../assets/SocailMedia/Build Trust.webp';
import iconConnect from '../../assets/SocailMedia/Connect.webp';
import iconConvert from '../../assets/SocailMedia/Convert.webp';
import iconEducate from '../../assets/SocailMedia/Educate.webp';
import iconEntertain from '../../assets/SocailMedia/Entertain.webp';

const differentiators = [
  {
    num: "01",
    title: "Audience-native thinking",
    desc: "We understand the platforms and digital behaviours shaping modern attention.",
    icon: iconBuildTrust,
  },
  {
    num: "02",
    title: "Connected services",
    desc: "Strategy, creative, content, technology, and performance work better instead of existing in separate silos.",
    icon: iconConnect,
  },
  {
    num: "03",
    title: "Business context",
    desc: "Marketing has to make sense for the business, not just look good on a portfolio page.",
    icon: iconConvert,
  },
  {
    num: "04",
    title: "Practical communication",
    desc: "Clear updates, clear priorities, clear reasoning.",
    icon: iconEducate,
  },
  {
    num: "05",
    title: "Continuous improvement",
    desc: "Launch is not the finish line. It's where useful learning begins.",
    icon: iconEntertain,
  }
];

export default function WhyAdsserv() {
  const { sectionRef, ref, refArray } = useScrollAnimation((refs, section) => {
    // Header
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Timeline items
    if (refs.items && refs.items[0]) {
      fadeUp(refs.items, {
        trigger: refs.items[0],
        start: 'top 82%',
        duration: 0.5,
        stagger: 0.07,
        y: 40,
        scale: 0.96,
      });
    }
  });

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden bg-white">
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28 items-start">
          <div ref={ref('eyebrow')} className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
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
                WHY ADSSERV?
              </span>
            </div>

            <div ref={ref('heading')}>
              <ScrollRevealHeading
                words={[
                  { text: "Young" },
                  { text: "enough", italic: true },
                  { text: "to" },
                  { text: "see" },
                  { text: "what's" },
                  { text: "changing." },
                  { text: "Focused" },
                  { text: "enough" },
                  { text: "to" },
                  { text: "make" },
                  { text: "it" },
                  { text: "useful." }
                ]}
              />
            </div>
          </div>

          <div
            ref={ref('paragraph')}
            className="flex flex-col gap-6 text-[15px] md:text-[16px] font-medium leading-relaxed pt-2 lg:pt-14"
            style={{ color: '#334155' }}
          >
            <p>
              Being Gen Z doesn't automatically make a marketing agency good.
            </p>
            <p className="font-extrabold" style={{ color: 'var(--brand-navy, #0b1f52)' }}>
              What matters is what that perspective produces.
            </p>
            <p>
              At ADSSERV, our audience understanding informs the work, while strategy, creative discipline, technology, and performance thinking keep it grounded.
            </p>
            <p>
              We're interested in what's next—but we don't chase every trend just because it's new.
            </p>
          </div>
        </div>

        {/* Bottom Section: Timeline Sequence */}
        <div className="relative pt-10 pb-8">

          {/* Dashed line connecting all items */}
          <div className="hidden md:block absolute top-[55px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-purple-300 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {differentiators.map((diff, idx) => (
              <div key={idx} ref={refArray('items')} className="flex flex-col items-center">

                {/* Icon Wrapper */}
                <div className="w-[110px] h-[110px] bg-[#D8B4FE] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(107,33,168,0.25)] border-[4px] border-[#E8DCFA] relative z-20 mb-[-16px]">
                  {/* Small connection dots on the dashed line */}
                  <div className="hidden md:block absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-purple-400 transform -translate-y-1/2 shadow-sm border border-white"></div>

                  {/* Icon image */}
                  <img src={diff.icon} alt={diff.title} className="w-[70%] h-[70%] object-contain drop-shadow-md rounded-full" />

                  {/* Number tag */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#8b5cf6] text-white text-[12px] font-bold px-4 py-1 rounded-full shadow-md">
                    {diff.num}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white w-full pt-10 pb-8 px-5 rounded-2xl shadow-[0_8px_30px_rgba(107,33,168,0.08)] border border-purple-200 text-center flex-grow flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(107,33,168,0.15)]">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] mb-3 block" style={{ color: 'var(--accent-orange, #F5A623)' }}>
                    Differentiator {diff.num}
                  </span>
                  <h3 className="text-[17px] font-extrabold mb-3 leading-snug max-w-[150px]" style={{ color: 'var(--brand-navy, #0b1f52)' }}>
                    {diff.title}
                  </h3>
                  <p className="text-[12.5px] font-medium leading-relaxed text-slate-500">
                    {diff.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
