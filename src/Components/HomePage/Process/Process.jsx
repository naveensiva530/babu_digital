import React, { useRef } from 'react';
import { LayoutGroup, motion, useScroll, useTransform } from 'motion/react';
import { TextRotate } from '../../../Components/ui/text-rotate';
import { ArrowUpRight } from 'lucide-react';
import '../common.css';
import processImg from '../../../assets/k (2).png';

export default function Process() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);

  return (
    <section ref={sectionRef} className="w-full pt-24 md:pt-32 bg-[#fff] relative z-0" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10 pb-[150px] md:pb-[200px]">

        <div className="flex flex-col items-center justify-center gap-3 mb-16 md:mb-20">
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[16px] italic font-medium text-[#1a233a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              OUR APPROACH
            </span>
          </div>

          {/* Heading with TextRotate */}
          <LayoutGroup>
            <motion.div
              layout
              className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-[36px] md:text-[50px] font-extrabold leading-[1.1] tracking-tight text-center flex-wrap"
              style={{ color: 'var(--text-dark)' }}
            >
              <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }} className="whitespace-nowrap">
                We don't start with
              </motion.span>
              <TextRotate
                texts={['a content calendar. ✦', 'an assumption.', 'a template.', 'random tactics.', 'a guess.']}
                mainClassName="text-white px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md"
                style={{ background: 'var(--text-dark-blue)' }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.div>
          </LayoutGroup>

          <div className="text-[15px] text-gray-500 font-medium mt-3 max-w-[680px] text-center leading-relaxed">
            <p className="mb-4 text-gray-800 font-bold text-lg">We start with the question behind it.</p>
            <ul className="mb-4 text-left inline-block space-y-1">
              <li>• Who are you trying to reach?</li>
              <li>• What do they care about?</li>
              <li>• What are they already seeing?</li>
              <li>• Why should they notice you?</li>
              <li>• What needs to happen after they do?</li>
            </ul>
            <p className="mb-4">
              From there, we choose the right channels, messages, creative formats, and measurement approach.
            </p>
            <p className="text-gray-800 font-bold">
              Because more marketing isn't automatically better marketing.
            </p>
          </div>

          <button className="know-more-btn mt-6" onClick={() => window.location.href = '/contact'}>
            <span>See How We Work</span>
            <div className="know-more-icon">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        <div className="relative w-full max-w-[1100px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-10 gap-y-12 items-center">

          {/* Left Column - 3 Cards */}
          <div className="flex flex-col gap-12 md:gap-16 w-full z-20">
            {/* 1. Understand */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full max-w-[320px] mr-auto">
              <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] w-[100px] h-[80px] rounded-full bg-[#3a7eb7] z-0 flex items-center justify-start pl-4 text-white text-[28px] font-bold shadow-md">1</div>
              <div className="relative z-10 bg-white rounded-[30px] py-5 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[110px]">
                <div className="flex-1 pr-3">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">Understand</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Get clear on the audience, business, market, competitors, positioning, and opportunity.</p>
                </div>
              </div>
            </motion.div>

            {/* 3. Create */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="relative w-full max-w-[320px] mr-auto">
              <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] w-[100px] h-[80px] rounded-full bg-[#d97c23] z-0 flex items-center justify-start pl-4 text-white text-[28px] font-bold shadow-md">3</div>
              <div className="relative z-10 bg-white rounded-[30px] py-5 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[110px]">
                <div className="flex-1 pr-3">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">Create</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Turn strategy into content, campaigns, experiences, and creative people engage with.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Learn */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="relative w-full max-w-[320px] mr-auto">
              <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] w-[100px] h-[80px] rounded-full bg-[#8a4baf] z-0 flex items-center justify-start pl-4 text-white text-[28px] font-bold shadow-md">5</div>
              <div className="relative z-10 bg-white rounded-[30px] py-5 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[110px]">
                <div className="flex-1 pr-3">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">Learn</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Read signals, understand what worked, identify what didn't, and use learning.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block w-[180px] lg:w-[220px] h-[400px] flex-shrink-0" />

          {/* Right Column - 3 Cards */}
          <div className="flex flex-col gap-12 md:gap-16 w-full z-20">
            {/* 2. Define */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative w-full max-w-[320px] ml-auto">
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] w-[100px] h-[80px] rounded-full bg-[#1a7974] z-0 flex items-center justify-end pr-4 text-white text-[28px] font-bold shadow-md">2</div>
              <div className="relative z-10 bg-white rounded-[30px] py-5 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[110px]">
                <div className="flex-1 text-right pl-3">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">Define</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Decide what the marketing needs to achieve and how each channel contributes.</p>
                </div>
              </div>
            </motion.div>

            {/* 4. Launch */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="relative w-full max-w-[320px] ml-auto">
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] w-[100px] h-[80px] rounded-full bg-[#4e5e4d] z-0 flex items-center justify-end pr-4 text-white text-[28px] font-bold shadow-md">4</div>
              <div className="relative z-10 bg-white rounded-[30px] py-5 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[110px]">
                <div className="flex-1 text-right pl-3">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">Launch</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Put the work into the right channels with the right audience, timing, and execution.</p>
                </div>
              </div>
            </motion.div>

            {/* 6. Improve */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="relative w-full max-w-[320px] ml-auto">
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] w-[100px] h-[80px] rounded-full bg-[#c6538c] z-0 flex items-center justify-end pr-4 text-white text-[28px] font-bold shadow-md">6</div>
              <div className="relative z-10 bg-white rounded-[30px] py-5 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[110px]">
                <div className="flex-1 text-right pl-3">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">Improve</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Digital doesn't stand still. Neither should the strategy.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-[20px] md:bottom-[40px] left-1/2 -translate-x-1/2 w-full max-w-[380px] md:max-w-[400px] flex justify-center items-end z-10 pointer-events-none">
        <motion.img
          src={processImg}
          alt="Process Character"
          style={{ y }}
          className="w-full h-auto object-contain object-bottom block"
        />
      </div>


    </section>
  );
}
