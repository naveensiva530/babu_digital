import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

import iconBuildTrust from '../../assets/SocailMedia/Build Trust.webp';
import iconConnect from '../../assets/SocailMedia/Connect.webp';
import iconConvert from '../../assets/SocailMedia/Convert.webp';
import iconEducate from '../../assets/SocailMedia/Educate.webp';
import iconEntertain from '../../assets/SocailMedia/Entertain.webp';
import iconLaptop from '../../assets/SocailMedia/Laptop.webp';

const audiences = [
  {
    num: "01",
    title: "Startups & emerging brands",
    desc: "Build a strong digital foundation and establish a clear presence from the beginning.",
    icon: iconBuildTrust,
  },
  {
    num: "02",
    title: "Growing businesses",
    desc: "Bring more structure, consistency, and performance thinking into digital marketing.",
    icon: iconConnect,
  },
  {
    num: "03",
    title: "Established brands",
    desc: "Refresh digital communication and connect existing brand value with modern audience behaviour.",
    icon: iconConvert,
  },
  {
    num: "04",
    title: "SaaS & technology companies",
    desc: "Make complex products easier to understand, discover, evaluate, and choose.",
    icon: iconEducate,
  },
  {
    num: "05",
    title: "Local businesses",
    desc: "Build stronger visibility and meaningful connections within the markets they serve.",
    icon: iconEntertain,
  },
  {
    num: "06",
    title: "Creators & personal brands",
    desc: "Turn expertise, personality, and audience attention into a stronger digital presence.",
    icon: iconLaptop,
  }
];

export default function WhoWeWorkWith() {
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
      <div className="max-w-[1250px] w-full mx-auto px-4 md:px-8 relative z-10">

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
            THE BRANDS WE HELP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div ref={ref('heading')}>
            <ScrollRevealHeading
              words={[
                { text: "We" },
                { text: "work", italic: true },
                { text: "with" },
                { text: "ambition" },
                { text: "at" },
                { text: "different" },
                { text: "stages." }
              ]}
            />
          </div>

          <div
            ref={ref('paragraph')}
            className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed pt-2"
            style={{ color: '#334155' }}
          >
            <p>
              A startup doesn't have the same problem as an established brand. A SaaS company doesn't communicate like a salon. A creator doesn't build an audience like a real estate business.
            </p>
            <p className="font-bold" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
              We don't force them into the same playbook.
            </p>
            <p>
              Our work can support:
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="bg-[#EAE2F3] gap-[1px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[32px] overflow-hidden border border-[#EAE2F3] shadow-sm">
          {audiences.map((aud, idx) => (
            <div key={idx} ref={refArray('cards')} className="bg-[#F9F7FC] flex flex-col xl:flex-row items-start gap-5 p-8 lg:p-10 transition-colors duration-300 hover:bg-white group">

              {/* Icon */}
              <div
                className="w-[85px] h-[85px] rounded-full flex-shrink-0 flex items-center justify-center p-3 transition-colors duration-300 border"
                style={{ backgroundColor: '#EBE0F8', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)', borderColor: 'rgba(11,31,82,0.05)' }}
              >
                <img
                  src={aud.icon}
                  alt={aud.title}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col flex-grow w-full pt-1">

                {/* Top Label Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#F5A623] text-white text-[12px] font-extrabold px-2.5 py-0.5 rounded-[6px] leading-tight shadow-sm">
                    {aud.num}
                  </div>
                  <div className="flex-grow h-[1px] bg-[#D6C5EA]"></div>
                  <div className="flex gap-[4px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-extrabold leading-[1.2] mb-3" style={{ color: 'var(--brand-navy, #0b1f52)' }}>
                  {aud.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] md:text-[14.5px] leading-relaxed text-slate-600 font-medium">
                  {aud.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
