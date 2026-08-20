import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

import iconBuildTrust from '../../assets/SocailMedia/Build Trust.webp';
import iconConnect from '../../assets/SocailMedia/Connect.webp';
import iconConvert from '../../assets/SocailMedia/Convert.webp';
import iconEducate from '../../assets/SocailMedia/Educate.webp';
import iconEntertain from '../../assets/SocailMedia/Entertain.webp';
import iconLaptop from '../../assets/SocailMedia/Laptop.webp';

const principles = [
  {
    num: "01",
    title: "Relevance over noise",
    desc: "More content isn't automatically better. The right message reaching the right audience at the right moment matters more.",
    icon: iconBuildTrust,
  },
  {
    num: "02",
    title: "Ideas need execution",
    desc: "A clever concept means very little if it can't be produced, distributed, measured, and improved.",
    icon: iconConnect,
  },
  {
    num: "03",
    title: "Creative and performance belong together",
    desc: "Creative work should earn attention. Performance data should tell us what to learn from that attention.",
    icon: iconConvert,
  },
  {
    num: "04",
    title: "Platforms are not interchangeable",
    desc: "A piece of content shouldn't feel like it was copied from one platform and dropped onto another without thought.",
    icon: iconEducate,
  },
  {
    num: "05",
    title: "Clarity beats jargon",
    desc: "If the strategy cannot be explained clearly, it probably isn't clear enough yet.",
    icon: iconEntertain,
  },
  {
    num: "06",
    title: "Keep learning",
    desc: "Audiences evolve. Platforms change. Technology moves. We treat learning as part of the work, not something that happens after it.",
    icon: iconLaptop,
  }
];

export default function WhatWeBelieve() {
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
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div className="flex flex-col items-center text-center mb-16">
          <div ref={ref('eyebrow')} className="flex items-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '13px',
                color: 'var(--accent-orange, #e08326)',
              }}
            >
              OUR POINT OF VIEW
            </span>
          </div>

          <div ref={ref('heading')}>
            <ScrollRevealHeading
              className="mb-8"
              maxW="800px"
              justify="center"
              words={[
                { text: "Attention" },
                { text: "is" },
                { text: "earned", italic: true },
                { text: "not" },
                { text: "requested." }
              ]}
            />
          </div>

          <div
            ref={ref('paragraph')}
            className="max-w-[800px] text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 flex flex-col gap-6"
          >
            <p className="text-center">People don't owe a brand their attention.</p>
            <p className="text-center">Every post, page, ad, video, search result, and campaign has to give someone a reason to stay.</p>
            <p className="text-center">That's why we don't believe in creating content simply because a calendar says something<br className="hidden md:block" /> needs to be posted. We look for the idea, message, experience, or opportunity that makes<br className="hidden md:block" /> the communication worth someone's time.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              ref={refArray('cards')}
              className="flex flex-col p-8 rounded-3xl shadow-[0_8px_32px_rgba(11,31,82,0.08)] border border-slate-200 hover:shadow-[0_12px_40px_rgba(11,31,82,0.12)] transition-all duration-300 group"
              style={{ backgroundColor: 'var(--bg-light-purple)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 relative transition-colors duration-300 overflow-hidden border"
                  style={{ backgroundColor: '#ffffff', borderColor: 'rgba(11,31,82,0.08)' }}
                >
                  <img src={p.icon} alt={p.title} className="w-12 h-12 object-contain" />
                </div>
                <span className="text-[14px] font-medium text-slate-500 tracking-wide">Principle {p.num}</span>
              </div>
              <h3 className="text-[21px] font-extrabold leading-snug mb-5" style={{ color: 'var(--brand-navy)' }}>{p.title}</h3>
              <div className="w-full h-px bg-slate-200 mb-5 relative">
                <div className="absolute left-0 top-0 w-12 h-px bg-[#3B82F6]"></div>
              </div>
              <p className="text-[15px] font-medium leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
