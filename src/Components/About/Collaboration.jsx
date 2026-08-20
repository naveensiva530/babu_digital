import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

const collaborations = [
  {
    num: "01",
    title: "Listen first",
    desc: "Understand your business, audience, current situation, objectives, and constraints."
  },
  {
    num: "02",
    title: "Ask better questions",
    desc: "Challenge assumptions when necessary and identify the problem behind the request."
  },
  {
    num: "03",
    title: "Build the right direction",
    desc: "Turn what we learn into a practical strategy and prioritised plan."
  },
  {
    num: "04",
    title: "Make the work",
    desc: "Create, build, launch, publish, test, and execute."
  },
  {
    num: "05",
    title: "Share what we learn",
    desc: "Use performance, feedback, and audience signals to identify opportunities for improvement."
  },
  {
    num: "06",
    title: "Keep moving",
    desc: "The goal isn't to produce one perfect campaign. It's to build a stronger digital presence over time."
  }
];

export default function Collaboration() {
  const { sectionRef, ref, refArray } = useScrollAnimation((refs, section) => {
    // Header
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Items
    if (refs.items && refs.items[0]) {
      fadeUp(refs.items, {
        trigger: refs.items[0],
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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div ref={ref('eyebrow')} className="lg:w-1/2">
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
                HOW WE COLLABORATE
              </span>
            </div>

            <div ref={ref('heading')}>
              <ScrollRevealHeading
                words={[
                  { text: "Clear" },
                  { text: "thinking.", italic: true },
                  { text: "Clear" },
                  { text: "communication." },
                  { text: "Better" },
                  { text: "work." }
                ]}
              />
            </div>
          </div>

          <div
            ref={ref('paragraph')}
            className="lg:w-1/2 flex flex-col justify-end gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed"
            style={{ color: '#334155' }}
          >
            <p>
              We believe the agency-client relationship should feel like a collaboration, not a black box.
            </p>
            <p>
              You should understand what we're solving, why we're solving it, what we're doing next, and what we're learning along the way.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {collaborations.map((col, idx) => (
            <div key={idx} ref={refArray('items')} className="flex gap-4">
              <div className="text-[20px] font-extrabold mt-1" style={{ color: 'var(--accent-orange)' }}>
                {col.num}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>{col.title}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-slate-600">{col.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
