import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp, scaleIn } from '../Services/SocialMedia/useScrollAnimation';

const questions = [
  "What are they looking for?",
  "What do they already know?",
  "What do they believe?",
  "What could make them curious?",
  "What could make them trust the brand?",
  "And what should happen after they engage?"
];

export default function HowWeThink() {
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    // Left column
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Glass card scale-in
    if (refs.glassCard) {
      scaleIn(refs.glassCard, {
        trigger: refs.glassCard,
        start: 'top 82%',
        duration: 0.6,
      });
    }
    // Question items (collected after mount)
    setTimeout(() => {
      const qEls = document.querySelectorAll('[data-how-we-think-q]');
      if (qEls.length) {
        fadeUp(qEls, {
          trigger: qEls[0],
          start: 'top 85%',
          duration: 0.4,
          stagger: 0.05,
          y: 20,
        });
      }
    }, 0);
  });

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple, #C8B6E2)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left Column Content */}
          <div ref={ref('eyebrow')} className="flex flex-col pr-0 lg:pr-8">
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
                THE AGENCY MINDSET
              </span>
            </div>

            <div ref={ref('heading')}>
              <ScrollRevealHeading
                className="mb-8"
                words={[
                  { text: "Start" },
                  { text: "with", italic: true },
                  { text: "people." },
                  { text: "Then" },
                  { text: "build" },
                  { text: "the" },
                  { text: "marketing." }
                ]}
              />
            </div>

            <div ref={ref('paragraph')}>
              <p className="text-[16px] md:text-[18px] font-medium leading-relaxed mb-6" style={{ color: '#334155' }}>
                Before choosing a platform, format, campaign objective, or content style,
                we need to understand the person on the other side of the screen.
              </p>

              <p className="text-[16px] md:text-[18px] font-bold mb-8" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                These questions shape the strategy.
              </p>

              <p className="text-[16px] md:text-[18px] font-bold leading-relaxed max-w-[540px]" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                The result is marketing built around behaviour rather than assumptions.
              </p>
            </div>
          </div>

          {/* Right Column Content - Glass Panel */}
          <div className="relative mt-8 lg:mt-0">
            {/* The Glassmorphism Card */}
            <div
              ref={ref('glassCard')}
              className="p-8 md:p-12 rounded-[40px] backdrop-blur-xl relative z-10 w-full max-w-[550px] ml-auto"
              style={{
                background: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(255,255,255,0.55)',
                boxShadow: '0 20px 60px rgba(11,31,82,0.18), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}
            >
              <p
                className="uppercase tracking-widest font-semibold mb-6"
                style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Questions we ask first
              </p>
              <ul className="flex flex-col gap-5 md:gap-6">
                {questions.map((q, idx) => (
                  <li key={idx} data-how-we-think-q className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ backgroundColor: 'var(--accent-orange, #F5A623)' }}
                    >
                      <span className="text-white text-[16px] font-extrabold leading-none">?</span>
                    </div>
                    <span
                      className="text-[17px] md:text-[19px] font-bold leading-snug"
                      style={{ color: 'var(--brand-navy, #1e2f57)' }}
                    >
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
