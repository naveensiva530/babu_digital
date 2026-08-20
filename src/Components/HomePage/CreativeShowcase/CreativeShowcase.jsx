import React, { useState } from 'react';
import '../common.css';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import jImage from '../../../assets/j.png';

const categories = [
  { title: "Social Content", desc: "Platform-native content built around audience behaviour." },
  { title: "Video", desc: "Short-form and campaign-focused visual storytelling." },
  { title: "Campaign Creative", desc: "Creative systems designed to support launches, promotions, awareness, and growth." },
  { title: "Branding", desc: "Visual identities and digital brand experiences that create recognition." },
];

export default function CreativeShowcase() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  return (
    <section className="w-full pt-20 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Content & Accordion */}
          <div className="flex flex-col pb-20 lg:pb-32">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="text-[13px] md:text-[14px] italic font-medium uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--text-dark-blue)' }}
              >
                THE CREATIVE SIDE
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-[32px] md:text-[42px] font-extrabold leading-[1.1] tracking-tight mb-4" style={{ color: 'var(--text-dark-blue)' }}>
              Make people stop scrolling.
            </h2>

            {/* Copy */}
            <p className="text-[14.5px] font-medium leading-relaxed mb-8" style={{ color: 'var(--text-gray)' }}>
              From social content and short-form video to campaign creative and brand systems, we build digital work designed to earn attention without begging for it.
            </p>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {categories.map((cat, i) => {
                const isOpen = openIndex === i;
                return (
                  <div 
                    key={i} 
                    className="bg-white rounded-[20px] p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] cursor-pointer transition-all duration-300 border border-gray-100"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isOpen ? 'bg-[var(--accent-orange)] text-white' : 'bg-[#1a233a] text-white'
                        }`}
                      >
                        {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                      </div>
                      <h3 
                        className={`text-[15px] font-bold transition-colors duration-300 ${
                          isOpen ? 'text-[var(--accent-orange)]' : 'text-[#1a233a]'
                        }`}
                      >
                        {cat.title}
                      </h3>
                    </div>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[150px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-[13.5px] font-medium text-gray-500 pl-10 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="group relative flex items-center gap-2 px-6 py-3 bg-[#1e2f57] text-white text-[14px] font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span>See Our Creative Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="relative w-full mt-8 lg:mt-0 flex justify-end items-end h-full">
            <img 
              src={jImage} 
              alt="Creative Digital Work" 
              className="w-full max-w-[600px] lg:max-w-none lg:w-[110%] h-auto object-contain transform lg:translate-x-[5%]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
