import { useEffect, useRef } from 'react';
import { Target } from 'lucide-react';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgMain from '../../../assets/SocailMedia/Laptop.webp';
import imgEducate from '../../../assets/SocailMedia/Educate.webp';
import imgEntertain from '../../../assets/SocailMedia/Entertain.webp';
import imgTrust from '../../../assets/SocailMedia/Build Trust.webp';
import imgConnect from '../../../assets/SocailMedia/Connect.webp';
import imgConvert from '../../../assets/SocailMedia/Convert.webp';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { num: "Stage 01", title: "Audience",        desc: "Who should see the message?",                          img: imgEducate },
  { num: "Stage 02", title: "Message",         desc: "What should make them pay attention?",                 img: imgEntertain },
  { num: "Stage 03", title: "Offer",           desc: "Why should they take the next step?",                  img: imgTrust },
  { num: "Stage 04", title: "Click",           desc: "Where does the advertisement send them?",              img: imgConnect },
  { num: "Stage 05", title: "Experience",      desc: "Does the landing page make the next action clear?",    img: imgConvert },
  { num: "Stage 06", title: "Conversion",      desc: "What meaningful action should be recorded?",           img: imgEducate },
  { num: "Stage 07", title: "Optimisation",    desc: "What does the data tell us to change?",                img: imgEntertain }
];

export default function PerformanceCreative() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left block slides from left
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Right image slides from right + slight scale
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Callout pill pops in
      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.6)', delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      // Stage cards stagger up with scale bounce
      gsap.fromTo(cardRefs.current,
        { opacity: 0, y: 60, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.42, ease: 'back.out(1.3)', stagger: 0.06,
          scrollTrigger: { trigger: cardRefs.current[0], start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 mb-20 items-center">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                FROM IMPRESSION TO CONVERSION
              </span>
            </div>
            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "The" }, { text: "campaign", italic: true }, { text: "is" },
                { text: "only" }, { text: "one" }, { text: "part" }, { text: "of" }, { text: "the" }, { text: "equation." }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>
            <div className="flex flex-col gap-4 text-[14.5px] md:text-[15px] font-medium leading-[1.8] text-slate-600 mb-10 max-w-[550px]">
              <p>
                Performance marketing is a system — not a single ad.
                Every step from the first impression to the final action has to work together for the campaign to actually deliver the result the business needs.
              </p>
            </div>

            <div ref={calloutRef} className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] max-w-[550px] border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Target size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                We consider the relationship between audience, hook, message, visual, offer, call to action, and landing experience rather than treating ad creative as decoration.
              </p>
            </div>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img
              src={imgMain}
              alt="Performance funnel illustration"
              className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* 7 Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-4">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="relative flex flex-col items-center text-center p-4 pb-10 pt-6 bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-400 group border border-transparent hover:border-gray-100"
            >
              <div className="w-[110px] h-[110px] mb-3 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src={stage.img} alt={stage.title} className="w-full h-full object-contain drop-shadow-xl" />
              </div>
              <span
                className="text-[10.5px] font-extrabold uppercase tracking-[0.08em] mb-1.5"
                style={{ color: 'var(--brand-purple, #8b5cf6)' }}
              >
                {stage.num}
              </span>
              <h3
                className="text-[18px] font-extrabold mb-2 leading-tight"
                style={{ color: 'var(--accent-orange)' }}
              >
                {stage.title}
              </h3>
              <div className="w-[70%] border-b-2 border-dotted border-gray-200 mt-auto pt-3 mb-1"></div>
              <p className="text-[12.5px] font-medium leading-snug text-slate-500">
                {stage.desc}
              </p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-[0_8px_16px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                {idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}