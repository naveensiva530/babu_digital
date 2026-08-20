import React from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaPinterestP,
  FaSnapchat,
  FaWhatsapp,
  FaAt,
} from 'react-icons/fa6';
import '../../../Components/HomePage/common.css';

/* ─── Platform data ─────────────────────────────────────── */
const platforms = [
  {
    name: 'Instagram',
    handle: '@yourbrand',
    desc: 'Visual storytelling, Reels, carousels, community, discovery, and brand presence.',
    Icon: FaInstagram,
    color: '#E1306C',
    bg: '#fff0f5',
    stat: '2.3B users',
  },
  {
    name: 'Facebook',
    handle: 'yourbrand',
    desc: 'Community, content distribution, local audiences, campaigns, and business communication.',
    Icon: FaFacebookF,
    color: '#1877F2',
    bg: '#f0f5ff',
    stat: '3.1B users',
  },
  {
    name: 'LinkedIn',
    handle: 'yourbrand',
    desc: 'Professional content, thought leadership, employer branding, and B2B visibility.',
    Icon: FaLinkedinIn,
    color: '#0A66C2',
    bg: '#f0f7ff',
    stat: '1B users',
  },
  {
    name: 'TikTok',
    handle: '@yourbrand',
    desc: 'Short-form storytelling, cultural relevance, discovery, and creator-led content.',
    Icon: FaTiktok,
    color: '#010101',
    bg: '#f5f5f5',
    stat: '1.7B users',
  },
  {
    name: 'YouTube',
    handle: 'YourBrand',
    desc: 'Long-form and short-form video, education, storytelling, search visibility.',
    Icon: FaYoutube,
    color: '#FF0000',
    bg: '#fff5f5',
    stat: '2.7B users',
  },
  {
    name: 'X (Twitter)',
    handle: '@yourbrand',
    desc: 'Real-time engagement, brand voice, trending conversations, and audience building.',
    Icon: FaXTwitter,
    color: '#000000',
    bg: '#f5f5f5',
    stat: '550M users',
  },
  {
    name: 'Pinterest',
    handle: '@yourbrand',
    desc: 'Visual discovery, inspiration boards, product pins, and purchase-driven audiences.',
    Icon: FaPinterestP,
    color: '#E60023',
    bg: '#fff0f0',
    stat: '518M users',
  },
  {
    name: 'Snapchat',
    handle: '@yourbrand',
    desc: 'Ephemeral content, AR experiences, younger audiences, and daily engagement.',
    Icon: FaSnapchat,
    color: '#FFFC00',
    bg: '#fffde8',
    stat: '750M users',
  },
  {
    name: 'WhatsApp',
    handle: '+91 XXXXX',
    desc: 'Direct customer communication, broadcast lists, and community group management.',
    Icon: FaWhatsapp,
    color: '#25D366',
    bg: '#f0fff5',
    stat: '2.9B users',
  },
  {
    name: 'Threads',
    handle: '@yourbrand',
    desc: 'Text-based engagement, community conversations, and brand personality.',
    Icon: FaAt,
    color: '#000000',
    bg: '#f5f5f5',
    stat: '200M users',
  },
];

/* ─── Split into two rows ───────────────────────────────── */
const rowA = [...platforms, ...platforms]; // duplicate for seamless loop
const rowB = [...platforms.slice(5), ...platforms.slice(0, 5), ...platforms.slice(5), ...platforms.slice(0, 5)];

/* ─── Individual Card ───────────────────────────────────── */
function PlatformCard({ platform }) {
  const { name, handle, desc, Icon, color, bg, stat } = platform;
  return (
    <div
      className="relative flex-shrink-0 w-[300px] rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden"
      style={{ boxShadow: '0 4px 20px rgba(30,47,87,0.06)' }}
    >
      {/* Top section with icon */}
      <div
        className="relative p-6 flex items-start justify-between"
        style={{ background: bg }}
      >
        {/* Platform icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
          style={{ background: color }}
        >
          <Icon size={26} color="#fff" />
        </div>

        {/* Stat badge */}
        <span
          className="text-[12px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border"
          style={{
            color: 'var(--brand-navy)',
            borderColor: 'rgba(30,47,87,0.12)',
            background: '#fff',
          }}
        >
          {stat}
        </span>

        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 -z-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      </div>

      {/* Bottom content */}
      <div className="p-6 pt-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[18px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>
            {name}
          </h3>
          {/* Verified dot */}
          <span
            className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0"
            style={{ background: color, fontSize: '9px', fontWeight: 900 }}
          >
            ✓
          </span>
        </div>
        <p className="text-[12px] font-semibold mb-3" style={{ color }}>
          {handle}
        </p>
        <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--text-gray)' }}>
          {desc}
        </p>

        {/* Dashed divider */}
        <div className="border-t border-dashed border-slate-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--brand-navy)' }}>
            We manage this
          </span>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: color }}
          >
            <span className="text-white font-black" style={{ fontSize: '10px' }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────── */
export default function Platforms() {
  return (
    <section className="w-full py-24 bg-white relative font-primary overflow-hidden">

      {/* Header */}
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                PLATFORM-AWARE MARKETING
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "Every" },
                { text: "platform" },
                { text: "has" },
                { text: "its" },
                { text: "own" },
                { text: "language.", italic: true }
              ]}
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 justify-center">
            <p>A strong social strategy doesn't mean publishing the exact same content everywhere.</p>
            <p>The audience, format, behaviour, culture, and expectations change from platform to platform.</p>
            <p className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              We adapt the content approach accordingly.
            </p>
          </div>
        </div>
      </div>

      {/* ── Marquee Row A — scrolls LEFT ─────────────── */}
      <div
        className="relative overflow-hidden mb-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'marqueeLeft 40s linear infinite',
          }}
        >
          {rowA.map((p, i) => (
            <PlatformCard key={i} platform={p} />
          ))}
        </div>
      </div>

      {/* ── Marquee Row B — scrolls RIGHT ────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'marqueeRight 40s linear infinite',
          }}
        >
          {rowB.map((p, i) => (
            <PlatformCard key={i} platform={p} />
          ))}
        </div>
      </div>

      {/* Keyframes injected inline */}
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
