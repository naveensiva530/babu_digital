import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgEducate from '../../../assets/SocailMedia/Educate.webp';
import imgEntertain from '../../../assets/SocailMedia/Entertain.webp';
import imgTrust from '../../../assets/SocailMedia/Build Trust.webp';
import imgConnect from '../../../assets/SocailMedia/Connect.webp';
import imgConvert from '../../../assets/SocailMedia/Convert.webp';
import imgLaptop from '../../../assets/SocailMedia/Laptop.webp';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", title: "Business Websites",          desc: "Professional websites designed to communicate what your business does clearly and give visitors a reason to take action.", img: imgEducate },
  { num: "02", title: "Landing Pages",              desc: "Focused pages designed around a specific campaign, offer, audience, or conversion objective.", img: imgEntertain },
  { num: "03", title: "Corporate Websites",         desc: "Websites for organisations that need clear information architecture, credibility, and scalable content.", img: imgTrust },
  { num: "04", title: "Startup Websites",           desc: "Lean, flexible websites that help emerging businesses explain their proposition and establish a credible digital presence.", img: imgConnect },
  { num: "05", title: "SaaS & Technology Websites", desc: "Product-focused experiences that make complex technology easier to understand, evaluate, and explore.", img: imgConvert },
  { num: "06", title: "Service Business Websites",  desc: "Websites that organise multiple services into clear journeys so visitors can quickly find the solution relevant to them.", img: imgLaptop },
  { num: "07", title: "Website Redesigns",          desc: "Rework outdated websites around modern UX, clearer content, responsive design, stronger performance, and better conversion paths.", img: imgEducate },
  { num: "08", title: "Conversion-Focused Pages",   desc: "Pages structured to reduce confusion, strengthen trust, and make the intended next action obvious.", img: imgEntertain },
];

export default function WebsiteWhatWeDo() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 40, scale: 0.92 },
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: i * 0.04,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              WHAT WE BUILD
            </span>
          </div>
          <ScrollRevealHeading maxW="800px"
            words={[
              { text: "From" },
              { text: "first" },
              { text: "click" },
              { text: "to" },
              { text: "final", italic: true },
              { text: "conversion." }
            ]}
          />
          <p className="mt-6 text-[16px] md:text-[17px] font-medium leading-relaxed max-w-[680px]" style={{ color: '#334155' }}>
            Website development services designed around real business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="relative flex bg-white rounded-[28px] p-6 gap-5 shadow-[0_10px_35px_rgba(139,92,246,0.07)] border border-gray-100 hover:shadow-[0_16px_45px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden"
            >
              <div className="absolute top-4 left-5 w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold shadow-md z-10 flex-shrink-0"
                style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                {s.num}
              </div>

              <div className="absolute top-3 right-4 w-[140px] h-[140px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <img src={s.img} alt={s.title} className="w-full h-full object-contain drop-shadow-lg" />
              </div>

              <div className="flex flex-col justify-end pt-[90px] w-full pr-[90px]">
                <span className="text-[10px] font-extrabold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
                  Service {s.num}
                </span>
                <h3 className="text-[22px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                  {s.title}
                </h3>
                <p className="text-[13px] font-medium leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}