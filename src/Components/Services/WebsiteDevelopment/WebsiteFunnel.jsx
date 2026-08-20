import React, { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import imgStrategy from '../../../assets/SocailMedia/Educate.webp';
import imgWireframe from '../../../assets/SocailMedia/Connect.webp';
import imgDesign from '../../../assets/SocailMedia/Entertain.webp';
import imgDevelop from '../../../assets/SocailMedia/Build Trust.webp';
import imgSEO from '../../../assets/SocailMedia/Convert.webp';
import imgConvert from '../../../assets/SocailMedia/Connect.webp';
import imgLaunch from '../../../assets/SocailMedia/Educate.webp';

const stages = [
  { num: '01', title: 'Strategy', goal: 'GOAL: ALIGNMENT', desc: 'Define the purpose of the website, the audience, the offer, and the actions the site should drive.', img: imgStrategy },
  { num: '02', title: 'Wireframe', goal: 'GOAL: STRUCTURE', desc: 'Map every important page — what sits where, what the visitor sees first, and how the journey flows.', img: imgWireframe },
  { num: '03', title: 'Design', goal: 'GOAL: EXPERIENCE', desc: 'Translate the wireframe into a polished visual system that feels clear, modern, and on-brand.', img: imgDesign },
  { num: '04', title: 'Development', goal: 'GOAL: BUILD', desc: 'Build a fast, responsive, accessible site with clean code, real performance, and content that is easy to manage.', img: imgDevelop },
  { num: '05', title: 'SEO', goal: 'GOAL: DISCOVERABILITY', desc: 'Structure content, metadata, performance, and technical foundations so the site can be found organically.', img: imgSEO },
  { num: '06', title: 'Conversion', goal: 'GOAL: ACTION', desc: 'Refine messaging, calls to action, forms, and trust signals so visitors take the next intended step.', img: imgConvert },
  { num: '07', title: 'Launch', goal: 'GOAL: GO LIVE', desc: 'Test across devices, monitor behaviour, and keep improving the site based on real data after launch.', img: imgLaunch },
];

export default function WebsiteFunnel() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 40, scale: 0.92 },
          {
            opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: i * 0.05,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>

      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              FROM IDEA TO LIVE WEBSITE
            </span>
          </div>
          <ScrollRevealHeading maxW="800px"
            words={[
              { text: "A" },
              { text: "website" },
              { text: "is" },
              { text: "a" },
              { text: "journey.", italic: true }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el}
              className="relative flex bg-white rounded-[28px] p-6 gap-5 shadow-[0_10px_35px_rgba(139,92,246,0.07)] border border-white/80 hover:shadow-[0_16px_45px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden"
            >
              <div className="absolute top-4 left-5 w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold shadow-md z-10 flex-shrink-0"
                style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                {stage.num}
              </div>

              <div className="absolute top-3 right-4 w-[170px] h-[170px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <img src={stage.img} alt={stage.title} className="w-full h-full object-contain drop-shadow-lg" />
              </div>

              <div className="flex flex-col justify-end pt-[110px] w-full pr-[110px]">
                <span className="text-[10px] font-extrabold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
                  {stage.goal}
                </span>
                <h3 className="text-[26px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                  {stage.title}
                </h3>
                <p className="text-[13.5px] font-medium leading-relaxed text-slate-500">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
