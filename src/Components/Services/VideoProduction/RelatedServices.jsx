import React, { useEffect, useRef } from 'react';
import { Share2, Users, Megaphone, Palette, Monitor, ArrowRight } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import imgSocial from '../../../assets/SocailMedia/Connect.webp';
import imgInfluencer from '../../../assets/SocailMedia/Entertain.webp';
import imgPerf from '../../../assets/SocailMedia/Convert.webp';
import imgBrand from '../../../assets/SocailMedia/Build Trust.webp';
import imgWeb from '../../../assets/SocailMedia/Laptop.webp';

const relatedServices = [
  { title: 'Social Media Marketing', desc: 'Turn finished video assets into a consistent social content system.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', icon: Share2, img: imgSocial },
  { title: 'Influencer Marketing', desc: 'Combine creator-led content with broader campaign creative.', cta: 'Explore Influencer Marketing', href: '/services/influencer-marketing', icon: Users, img: imgInfluencer },
  { title: 'Performance Marketing', desc: 'Use video creative across relevant paid campaigns and testing strategies.', cta: 'Explore Performance Marketing', href: '/services/performance-marketing', icon: Megaphone, img: imgPerf },
  { title: 'Branding Solutions', desc: 'Keep visual content aligned with the wider brand identity.', cta: 'Explore Branding Solutions', href: '/services/branding-solutions', icon: Palette, img: imgBrand },
  { title: 'Website Development', desc: 'Give important video content the right digital home.', cta: 'Explore Website Development', href: '/services/website-development', icon: Monitor, img: imgWeb },
];

export default function RelatedServices() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, x: i % 2 === 0 ? -70 : 70, y: 30 }, { opacity: 1, x: 0, y: 0, duration: 0.45, ease: 'power3.out', delay: i * 0.04, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>MAKE THE CONTENT WORK HARDER</span>
          </div>
          <ScrollRevealHeading words={[
            { text: 'Connect' }, { text: 'video' }, { text: 'with' }, { text: 'the' },
            { text: 'rest', italic: true }, { text: 'of' }, { text: 'your' }, { text: 'digital' }, { text: 'strategy.' }
          ]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {relatedServices.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <a key={idx} href={svc.href} ref={el => cardRefs.current[idx] = el} className="relative overflow-hidden flex flex-col justify-between bg-white p-7 rounded-[28px] border border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 group h-[290px]">
                <div className="absolute right-[-15px] bottom-4 w-[160px] h-[160px] md:w-[170px] md:h-[170px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2 z-0">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-contain drop-shadow-xl" />
                </div>
                <div className="relative z-10 flex flex-col h-full w-[60%]">
                  <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center mb-5 text-white shadow-md" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                    <IconComponent size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[19px] font-extrabold mb-2.5 leading-tight" style={{ color: 'var(--brand-navy)' }}>{svc.title}</h3>
                  <p className="text-[12.5px] font-medium leading-[1.6] text-slate-500 mb-6 pr-2">{svc.desc}</p>
                  <div className="mt-auto inline-flex items-center gap-3 bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-full py-1.5 pl-4 pr-1.5 w-max transition-colors duration-300 group-hover:border-[var(--brand-purple)] group-hover:shadow-md">
                    <span className="text-[11px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>{svc.cta}</span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                      <ArrowRight size={13} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
