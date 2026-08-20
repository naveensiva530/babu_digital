import React from 'react';
import { Globe, Search, Share2, Megaphone, Mail } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

const platforms = [
  { name: 'Website', desc: 'Explain clearly. Build confidence. Drive action.', icon: Globe, color: '#1e2f57' },
  { name: 'Search', desc: 'Answer relevant questions with useful, structured information.', icon: Search, color: '#059669' },
  { name: 'Social', desc: 'Capture attention quickly and give people a reason to engage.', icon: Share2, color: '#E1306C' },
  { name: 'Advertising', desc: 'Communicate the offer quickly and clearly.', icon: Megaphone, color: '#e08326' },
  { name: 'Email', desc: 'Move the relationship forward with relevant, purposeful messaging.', icon: Mail, color: '#6366f1' },
];

const rowA = [...platforms, ...platforms];

function PlatformCard({ platform }) {
  const { name, desc, icon: Icon, color } = platform;
  return (
    <div className="relative flex-shrink-0 w-[280px] rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(30,47,87,0.06)' }}>
      <div className="relative p-5 flex items-start gap-4" style={{ background: `${color}08` }}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0" style={{ background: color }}>
          <Icon size={22} color="#fff" />
        </div>
        <div>
          <h3 className="text-[17px] font-extrabold mb-1" style={{ color: 'var(--brand-navy)' }}>{name}</h3>
          <p className="text-[13px] leading-relaxed text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContentFit() {
  return (
    <section className="w-full py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <ScrollRevealHeading maxW="800px" words={[
            { text: "One" }, { text: "voice." }, { text: "Different", italic: true }, { text: "platforms." }
          ]} />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">
            Your brand should still feel like your brand whether someone finds you through Google, reads your website, sees an Instagram post or lands on a campaign page. We adapt the writing to the platform without losing the core message.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="flex gap-5 animate-marquee-left w-max">
          {rowA.map((platform, idx) => (
            <PlatformCard key={idx} platform={platform} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
