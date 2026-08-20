import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgMain from '../../../assets/SocailMedia/Laptop.webp';
import imgEducate from '../../../assets/SocailMedia/Educate.webp';
import imgEntertain from '../../../assets/SocailMedia/Entertain.webp';
import imgTrust from '../../../assets/SocailMedia/Build Trust.webp';
import imgConnect from '../../../assets/SocailMedia/Connect.webp';
import imgConvert from '../../../assets/SocailMedia/Convert.webp';

gsap.registerPlugin(ScrollTrigger);

const questions = [
  "Who is visiting?",
  "What are they looking for?",
  "What needs to convince them?",
  "What should they do next?",
  "What needs to happen after they submit an enquiry?",
];

const steps = [
  { num: "01", title: "Discover",  desc: "Understand the business, audience, objectives, existing website, competitors, and priorities.", img: imgEducate },
  { num: "02", title: "Plan",      desc: "Create the sitemap, page hierarchy, content direction, user journeys, and functional requirements.", img: imgTrust },
  { num: "03", title: "Design",    desc: "Develop a visual system and interface that reflects the brand while keeping usability at the centre.", img: imgEntertain },
  { num: "04", title: "Build",     desc: "Develop responsive pages with clean structure, appropriate functionality, and a strong technical foundation.", img: imgConnect },
  { num: "05", title: "Optimise",  desc: "Review performance, mobile usability, accessibility, SEO fundamentals, forms, navigation, and conversion paths.", img: imgConvert },
  { num: "06", title: "Launch",    desc: "Test the website across key devices and browsers before taking it live.", img: imgEducate }
];

export default function WebsiteApproach() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);
  const cardRef = useRef(null);
  const questionRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.6)', delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(questionRefs.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.4,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -50 : 50;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 30, scale: 0.96 },
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.3)', delay: i * 0.05,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* TOP: 2-col intro */}
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
                OUR APPROACH
              </span>
            </div>
            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "Strategy" },
                { text: "before" },
                { text: "screens.", italic: true }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mb-6 max-w-[550px]" style={{ color: '#334155' }}>
              Before thinking about colours, animations, or visual effects, we look at the purpose of the website.
            </p>

            {/* Questions card */}
            <div ref={cardRef} className="p-7 rounded-2xl shadow-sm max-w-[550px]" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
              <ul className="flex flex-col gap-3">
                {questions.map((q, idx) => (
                  <li key={idx} ref={el => questionRefs.current[idx] = el} className="flex items-start gap-3">
                    <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                    <span className="text-[15px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-[16px] font-bold leading-relaxed max-w-[550px]" style={{ color: 'var(--brand-navy)' }}>
              Those answers shape the structure, content, design, development, and conversion journey.
            </p>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img
              src={imgMain}
              alt="Strategy before screens"
              className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* 6 step cards — Image format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-8 border-t border-gray-200 pt-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className={`flex flex-col group relative ${
                idx % 3 !== 0 ? 'lg:border-l lg:border-gray-200 lg:pl-8' : ''
              } ${
                idx % 2 !== 0 ? 'md:border-l md:border-gray-200 md:pl-8 lg:border-none lg:pl-0' : ''
              } ${
                (idx % 3 !== 0 && idx % 2 !== 0) ? 'lg:border-l lg:border-gray-200 lg:pl-8' : ''
              }`}
            >
              {/* Step label (Eyebrow) */}
              <span
                className="text-[15px] font-bold tracking-wide mb-6"
                style={{ color: 'var(--accent-orange, #e08326)' }}
              >
                Step {step.num}
              </span>

              {/* Icon and Text row */}
              <div className="flex items-start gap-5">
                {/* Circular icon holder with white bg and shadow */}
                <div
                  className="flex-shrink-0 w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: '0 8px 24px rgba(30,47,87,0.06)',
                  }}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-[42px] h-[42px] object-contain drop-shadow-sm"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col pt-1">
                  <h3
                    className="text-[20px] font-extrabold leading-tight mb-2"
                    style={{ color: 'var(--brand-navy, #1e2f57)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: '#475569' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}