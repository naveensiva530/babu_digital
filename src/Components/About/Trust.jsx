import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

import client1 from '../../assets/clients/client1.webp';
import client2 from '../../assets/clients/client2.webp';
import client3 from '../../assets/clients/client3.webp';
import client4 from '../../assets/clients/client4.webp';
import client5 from '../../assets/clients/client5.webp';
import client6 from '../../assets/clients/client6.webp';
import client7 from '../../assets/clients/client7.webp';
import client8 from '../../assets/clients/client8.webp';
import client9 from '../../assets/clients/client9.webp';
import client10 from '../../assets/clients/client10.webp';
import client11 from '../../assets/clients/client11.webp';
import client12 from '../../assets/clients/client12.webp';

const clientLogos = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12];
const rowA = [...clientLogos, ...clientLogos];

export default function Trust() {
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    // Header
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Marquee row container
    if (refs.marquee) {
      fadeUp(refs.marquee, {
        trigger: refs.marquee,
        start: 'top 88%',
        duration: 0.5,
        y: 25,
      });
    }
  });

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
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
              BUILT ON REAL PARTNERSHIPS
            </span>
          </div>

          <div ref={ref('heading')}>
            <ScrollRevealHeading
              className="mb-6"
              maxW="800px"
              justify="center"
              words={[
                { text: "Good" },
                { text: "work", italic: true },
                { text: "starts" },
                { text: "with" },
                { text: "good" },
                { text: "collaboration." }
              ]}
            />
          </div>

          <p
            ref={ref('paragraph')}
            className="text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[650px]"
            style={{ color: '#334155' }}
          >
            We value the relationships behind the work as much as the work itself. Brands we've partnered with across strategy, creative, content, and performance.
          </p>
        </div>

        {/* Marquee — bare logos (no white box) */}
        <div ref={ref('marquee')} className="relative w-full overflow-hidden py-6">
          <div className="flex gap-16 animate-trust-marquee w-max items-center">
            {rowA.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[140px] h-[70px] flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt=""
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trust-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-trust-marquee {
          animation: trust-marquee 40s linear infinite;
        }
        .animate-trust-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
