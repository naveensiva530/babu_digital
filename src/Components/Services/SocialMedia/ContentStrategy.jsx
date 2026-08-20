import React, { useEffect, useRef } from 'react';
import { Target } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import imgMain from '../../../assets/SocailMedia/Laptop.webp';
import imgEducate from '../../../assets/SocailMedia/Educate.webp';
import imgEntertain from '../../../assets/SocailMedia/Entertain.webp';
import imgTrust from '../../../assets/SocailMedia/Build Trust.webp';
import imgConnect from '../../../assets/SocailMedia/Connect.webp';
import imgConvert from '../../../assets/SocailMedia/Convert.webp';

const contentTypes = [
  { num: "01", title: "Educate", desc: "Make something complicated easier to understand.", img: imgEducate },
  { num: "02", title: "Entertain", desc: "Give people something worth watching, sharing, or remembering.", img: imgEntertain },
  { num: "03", title: "Build Trust", desc: "Show expertise, people, process, proof, perspective, and personality.", img: imgTrust },
  { num: "04", title: "Connect", desc: "Create conversations and make the brand feel human.", img: imgConnect },
  { num: "05", title: "Convert", desc: "Give interested audiences a clear next step when the timing is right.", img: imgConvert }
];

export default function ContentStrategy() {
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

      // Cards stagger up with scale bounce
      gsap.fromTo(cardRefs.current,
        { opacity: 0, y: 70, scale: 0.9 },
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
            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "Not" }, { text: "every" }, { text: "post" }, { text: "needs" },
                { text: "to" }, { text: "sell." }, { text: "Every" }, { text: "post" },
                { text: "needs" }, { text: "a" }, { text: "reason.", italic: true }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>
            <div className="flex flex-col gap-4 text-[14.5px] md:text-[15px] font-medium leading-[1.8] text-slate-600 mb-10 max-w-[550px]">
              <p>
                A healthy social presence needs different types of content. Some content builds awareness. Some explains what you do. Some proves that you know what you're talking about. Some creates conversation. Some makes the brand memorable. And some gives people a reason to take the next step.
              </p>
            </div>

            <div ref={calloutRef} className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] max-w-[550px] border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Target size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                We build content mixes around those different roles rather than forcing every post to make the same pitch.
              </p>
            </div>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img src={imgMain} alt="Content Strategy Illustration" className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>

        {/* 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {contentTypes.map((type, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el}
              className="relative flex flex-col items-center text-center p-4 pb-8 pt-2 bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-400 group border border-transparent hover:border-gray-100"
            >
              <div className="w-[160px] h-[160px] mb-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src={type.img} alt={type.title} className="w-full h-full object-contain drop-shadow-xl" />
              </div>
              <h3 className="text-[18px] font-extrabold mb-1.5" style={{ color: 'var(--accent-orange)' }}>{type.title}</h3>
              <p className="text-[12.5px] font-medium leading-snug text-slate-500">{type.desc}</p>
              <div className="w-[70%] border-b-2 border-dotted border-gray-200 mt-auto pt-4 mb-1"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold shadow-[0_8px_16px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                {type.num}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
