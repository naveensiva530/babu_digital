import React from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { FaInstagram, FaTiktok, FaYoutube, FaGlobe, FaBullhorn } from 'react-icons/fa6';
import '../../../Components/HomePage/common.css';

const platforms = [
  { name: 'Instagram', handle: 'Reels & Stories', desc: 'Short-form storytelling, Reels, product content, brand moments, and social-first creative.', Icon: FaInstagram, color: '#E1306C', bg: '#fff0f5', stat: 'Social-first' },
  { name: 'TikTok', handle: '@brand', desc: 'Fast hooks, native-feeling storytelling, trends where relevant, creator-led concepts, and concise narratives.', Icon: FaTiktok, color: '#010101', bg: '#f5f5f5', stat: 'Native feel' },
  { name: 'YouTube', handle: 'Channel', desc: 'Longer-form storytelling, explainers, product demonstrations, brand content, and Shorts.', Icon: FaYoutube, color: '#FF0000', bg: '#fff5f5', stat: 'Long & Short' },
  { name: 'Websites', handle: 'Hero & Product', desc: 'Hero videos, product demonstrations, explainers, testimonials, and visual storytelling that support the website experience.', Icon: FaGlobe, color: '#1e2f57', bg: '#f0f5ff', stat: 'Web-ready' },
  { name: 'Paid Media', handle: 'Ad Creative', desc: 'Creative variations designed around advertising placements, audiences, messages, and testing requirements.', Icon: FaBullhorn, color: '#e08326', bg: '#fff8f0', stat: 'Ad-ready' },
];

const rowA = [...platforms, ...platforms];
const rowB = [...platforms.slice(2), ...platforms.slice(0, 2), ...platforms.slice(2), ...platforms.slice(0, 2)];

function PlatformCard({ platform }) {
  const { name, handle, desc, Icon, color, bg, stat } = platform;
  return (
    <div className="relative flex-shrink-0 w-[300px] rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(30,47,87,0.06)' }}>
      <div className="relative p-6 flex items-start justify-between" style={{ background: bg }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: color }}><Icon size={26} color="#fff" /></div>
        <span className="text-[12px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border" style={{ color: 'var(--brand-navy)', borderColor: 'rgba(30,47,87,0.12)', background: '#fff' }}>{stat}</span>
      </div>
      <div className="p-6 pt-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[18px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>{name}</h3>
          <span className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: color, fontSize: '9px', fontWeight: 900 }}>✓</span>
        </div>
        <p className="text-[12px] font-semibold mb-3" style={{ color }}>{handle}</p>
        <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--text-gray)' }}>{desc}</p>
      </div>
    </div>
  );
}

export default function PlatformFit() {
  return (
    <section className="w-full py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>ONE VIDEO DOESN'T ALWAYS FIT EVERYWHERE</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "The" }, { text: "platform" }, { text: "changes" }, { text: "the" },
              { text: "way", italic: true }, { text: "the" }, { text: "story" }, { text: "is" }, { text: "told." }
            ]} />
          </div>
          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 justify-center">
            <p>Every platform has its own format, pacing, and audience expectations.</p>
            <p className="font-bold" style={{ color: 'var(--brand-navy)' }}>We adapt the creative for where the content will actually live.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden mb-4" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
        <div className="flex gap-4" style={{ width: 'max-content', animation: 'marqueeLeft 40s linear infinite' }}>
          {rowA.map((p, i) => <PlatformCard key={i} platform={p} />)}
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
        <div className="flex gap-4" style={{ width: 'max-content', animation: 'marqueeRight 40s linear infinite' }}>
          {rowB.map((p, i) => <PlatformCard key={i} platform={p} />)}
        </div>
      </div>
      <style>{`@keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } } @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }`}</style>
    </section>
  );
}
