import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: '01', title: 'Digital Strategy', desc: 'Clarify your digital objectives, priorities, channels and overall direction.' },
  { num: '02', title: 'Digital Audits', desc: 'Review your existing digital presence to uncover technical, strategic, content and conversion gaps.' },
  { num: '03', title: 'Marketing Strategy', desc: 'Connect your marketing activity with your audience, positioning, business goals and acquisition priorities.' },
  { num: '04', title: 'Competitor Analysis', desc: 'Understand how competitors position themselves, attract attention and use digital channels so you can identify opportunities to differentiate.' },
  { num: '05', title: 'Customer Journey Analysis', desc: 'Map the journey from awareness to consideration, enquiry, purchase or another desired action.' },
  { num: '06', title: 'Channel Strategy', desc: 'Determine where your audience is most relevant and which channels deserve attention based on your objectives.' },
  { num: '07', title: 'Conversion Opportunities', desc: 'Identify friction and missed opportunities across landing pages, websites, forms, calls to action and customer journeys.' },
  { num: '08', title: 'Measurement & KPIs', desc: 'Define what should be measured so your team can understand performance and make better decisions.' },
  { num: '09', title: 'Digital Roadmaps', desc: 'Turn strategic recommendations into an organised sequence of actions rather than an overwhelming list of tasks.' },
];

export default function ConsultingServices() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', delay: i * 0.04, scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>CONSULTING SERVICES</span>
          </div>
          <ScrollRevealHeading maxW="800px" words={[
            { text: "What" }, { text: "we" }, { text: "can" }, { text: "help" },
            { text: "you", italic: true }, { text: "figure" }, { text: "out" }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            The exact scope depends on your business, but digital consulting can cover the areas that influence your online growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-[13px] font-extrabold mb-3 block" style={{ color: 'var(--brand-purple, #8b5cf6)', fontFamily: "'Playfair Display', Georgia, serif" }}>{svc.num}</span>
              <h3 className="text-[18px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>{svc.title}</h3>
              <p className="text-[14px] font-medium leading-relaxed text-slate-600">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
