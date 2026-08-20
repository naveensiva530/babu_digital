import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

import imgStartup from '../../../assets/SocailMedia/Educate.webp';
import imgLocal from '../../../assets/SocailMedia/Connect.webp';
import imgSaaS from '../../../assets/SocailMedia/Laptop.webp';
import imgEducation from '../../../assets/SocailMedia/Entertain.webp';
import imgHealthcare from '../../../assets/SocailMedia/Build Trust.webp';
import imgRealEstate from '../../../assets/SocailMedia/Convert.webp';

const businesses = [
  { category: "STARTUP SEO", title: "Startups", desc: "Build a scalable search foundation around the products, problems, audiences, and markets that matter.", img: imgStartup },
  { category: "LOCAL SEO", title: "Local Businesses", desc: "Improve visibility for relevant location-based searches and high-intent local journeys.", img: imgLocal },
  { category: "SAAS SEO", title: "SaaS & Technology", desc: "Build topical authority around products, use cases, problems, comparisons, and commercial search journeys.", img: imgSaaS },
  { category: "EDUCATION SEO", title: "Education", desc: "Develop search visibility around courses, programmes, information needs, institutions, and relevant decision journeys.", img: imgEducation },
  { category: "HEALTHCARE SEO", title: "Healthcare", desc: "Create clear, trustworthy content while treating accuracy, user needs, and applicable compliance considerations seriously.", img: imgHealthcare },
  { category: "REAL ESTATE SEO", title: "Real Estate", desc: "Target relevant property, location, service, and market searches without relying on thin location pages.", img: imgRealEstate },
];

export default function SEOForBusinesses() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, { opacity: 0, x: 1000, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, duration: 0.3, ease: 'power4.out', stagger: 0.04, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>THE STRATEGY DEPENDS ON THE BUSINESS</span>
          </div>
          <ScrollRevealHeading justify="center" words={[
            { text: "A" }, { text: "local" }, { text: "business" }, { text: "doesn't" },
            { text: "need", italic: true }, { text: "the" }, { text: "same" }, { text: "SEO" },
            { text: "plan" }, { text: "as" }, { text: "a" }, { text: "SaaS" }, { text: "company." }
          ]} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {businesses.map((biz, idx) => (
            <div key={idx} ref={el => cardsRef.current[idx] = el} className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[200px]">
              <div className="w-full aspect-[1/1.5] rounded-full overflow-hidden mb-6 relative transition-all duration-500 group-hover:-translate-y-2" style={{ background: 'var(--accent-orange)' }}>
                <img src={biz.img} alt={biz.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 rounded-full pointer-events-none border-[6px] border-white/10 mix-blend-overlay"></div>
              </div>
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent-orange)' }}>{biz.category}</span>
              <h3 className="text-[17px] md:text-[19px] font-extrabold mb-2.5 leading-tight" style={{ color: 'var(--brand-navy)' }}>{biz.title}</h3>
              <p className="text-[12px] md:text-[13px] font-medium leading-[1.6] text-slate-500">{biz.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
