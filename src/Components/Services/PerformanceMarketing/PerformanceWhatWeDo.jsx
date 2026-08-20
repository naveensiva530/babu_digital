import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Target } from 'lucide-react';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

// Import images for the slider
import img1 from '../../../assets/Services_Provide/Social media marketing.webp';
import img2 from '../../../assets/Services_Provide/Content Writing.webp';
import img3 from '../../../assets/Services_Provide/Instragram marketing.webp';
import img4 from '../../../assets/Services_Provide/Branding Solution.webp';
import img5 from '../../../assets/Services_Provide/video production.webp';
import img6 from '../../../assets/Services_Provide/Digital Consulting.webp';
import img7 from '../../../assets/Services_Provide/Performance marketing.webp';
import img8 from '../../../assets/Services_Provide/Seo services.webp';

const services = [
  {
    num: "01",
    title: "Google Ads",
    desc: "Search and other relevant Google advertising campaigns built around intent, targeting, messaging, and measurable actions.",
    img: img1
  },
  {
    num: "02",
    title: "Paid Social Advertising",
    desc: "Paid campaigns across relevant social platforms designed around audience, creative, offer, and campaign objective.",
    img: img2
  },
  {
    num: "03",
    title: "Search Advertising",
    desc: "Reach people actively searching for relevant products, services, solutions, or information.",
    img: img3
  },
  {
    num: "04",
    title: "Display & Remarketing",
    desc: "Reconnect with relevant audiences through carefully planned display or remarketing activity where appropriate.",
    img: img4
  },
  {
    num: "05",
    title: "Campaign Strategy",
    desc: "Plan the audience, offer, channels, budget, creative direction, landing experience, and measurement before launch.",
    img: img5
  },
  {
    num: "06",
    title: "Ad Creative & Copy",
    desc: "Develop campaign messaging and creative concepts designed to communicate the value of the offer clearly.",
    img: img6
  },
  {
    num: "07",
    title: "Landing Page Optimisation",
    desc: "Identify friction and opportunities across the page users reach after clicking an advertisement.",
    img: img7
  },
  {
    num: "08",
    title: "Conversion Tracking",
    desc: "Connect campaign activity with meaningful actions so performance can be evaluated beyond clicks and impressions.",
    img: img8
  },
  {
    num: "09",
    title: "Campaign Optimisation",
    desc: "Continuously review campaign data and make informed changes to targeting, budgets, creative, bidding, keywords, and other relevant variables.",
    img: img1
  }
];

export default function PerformanceWhatWeDo() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play the slider every 2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Heading & Text */}
          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: 'var(--brand-red-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                PERFORMANCE MARKETING SERVICES
              </span>
            </div>
            
            <ScrollRevealHeading
              className="mb-8"
              words={[
                { text: "Paid" },
                { text: "campaigns" },
                { text: "with" },
                { text: "a" },
                { text: "reason", italic: true },
                { text: "behind" },
                { text: "every" },
                { text: "decision." }
              ]}
            />
            
            <p 
              className="text-[17px] leading-relaxed text-slate-600 mt-6 mb-10 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              We look beyond the ad itself and consider the journey from first impression to meaningful action.
            </p>

            {/* General CTA */}
            <ButtonWithIcon>
              Explore Services
            </ButtonWithIcon>
          </div>

          {/* Right Side: Mobile Slider Mockup */}
          <div className="w-full lg:w-[420px] flex justify-center flex-shrink-0 relative z-20">
            
            {/* Background decorative blob behind phone */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full filter blur-[100px] opacity-30 pointer-events-none"
              style={{ background: 'var(--brand-red-orange)' }}
            ></div>

            {/* The Mobile Frame */}
            <div 
               className="relative w-[340px] h-[680px] bg-slate-900 rounded-[48px] border-[12px] shadow-2xl overflow-hidden flex flex-col z-10"
               style={{ 
                 borderColor: 'var(--brand-navy)',
                 boxShadow: '0 25px 60px rgba(30,47,87,0.35), inset 0 0 0 2px rgba(255,255,255,0.2)'
               }}
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 inset-x-0 flex justify-center z-50 pointer-events-none">
                <div className="w-28 h-7 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#111] border border-gray-800"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="absolute top-0 inset-x-0 flex justify-between items-center px-6 pt-4 pb-2 text-[12px] font-semibold text-[var(--brand-navy)] z-50 pointer-events-none">
                <span className="tracking-tighter">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Cellular */}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M1 9V7H3V9H1ZM5 9V5H7V9H5ZM9 9V3H11V9H9ZM13 9V1H15V9H13Z"/></svg>
                  {/* Wifi */}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M7 9C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7C7.55228 7 8 7.44772 8 8C8 8.55228 7.55228 9 7 9ZM1.80287 4.19713C4.67232 1.32768 9.32768 1.32768 12.1971 4.19713C12.5877 4.58765 12.5877 5.22081 12.1971 5.61134C11.8066 6.00186 11.1734 6.00186 10.7829 5.61134C8.68305 3.51151 5.28186 3.51151 3.21713 5.61134C2.82661 6.00186 2.19344 6.00186 1.80291 5.61134C1.41239 5.22081 1.41239 4.58765 1.80287 4.19713ZM4.63152 7.02578C5.93922 5.71808 8.06078 5.71808 9.36848 7.02578C9.75901 7.4163 9.75901 8.04947 9.36848 8.43999C8.97796 8.83052 8.34479 8.83052 7.95427 8.43999C7.42777 7.9135 6.57223 7.9135 6.04573 8.43999C5.65521 8.83052 5.02204 8.83052 4.63152 8.43999C4.24099 8.04947 4.24099 7.4163 4.63152 7.02578Z"/></svg>
                  {/* Battery */}
                  <div className="w-5 h-2.5 border border-current rounded-sm p-[1px] relative">
                    <div className="w-full h-full bg-current rounded-[1px]"></div>
                    <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1px] h-1 bg-current rounded-r-sm"></div>
                  </div>
                </div>
              </div>

              {/* Slider Track */}
              <div 
                className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${currentIdx * 100}%)` }}
              >
                {services.map((svc, idx) => (
                  <div key={idx} className="min-w-full h-full relative bg-white">
                    
                    {/* Top Pill / Badge */}
                    <div className="absolute top-16 left-5 z-40 bg-white border border-gray-200 text-[var(--brand-navy)] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Service {svc.num}
                    </div>

                    {/* Image Container (Vertical poster format) */}
                    <div className="absolute top-[88px] inset-x-5 bottom-[35%] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center">
                      <img 
                        src={svc.img} 
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Bottom Content (No Gradient) */}
                    <div className="absolute bottom-0 inset-x-0 h-[35%] flex flex-col justify-end p-6 pb-12 z-40 bg-white">
                      
                      {/* Avatars / Decor */}
                      <div className="flex -space-x-1.5 mb-4">
                        <div className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-[var(--accent-orange)]">
                          <Sparkles size={12} strokeWidth={2.5} />
                        </div>
                        <div className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-[var(--brand-navy)]">
                          <TrendingUp size={12} strokeWidth={2.5} />
                        </div>
                        <div className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-red-500">
                          <Target size={12} strokeWidth={2.5} />
                        </div>
                      </div>

                      <h3 className="text-[var(--brand-navy)] text-[26px] font-extrabold mb-2 tracking-tight leading-tight">
                        {svc.title}
                      </h3>
                      
                      <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 z-50 group shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 z-50 group shadow-lg"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Home indicator */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center z-50 pointer-events-none">
                <div className="w-32 h-[5px] bg-white/70 rounded-full"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
