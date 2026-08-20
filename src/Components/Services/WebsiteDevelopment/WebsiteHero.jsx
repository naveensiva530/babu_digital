import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../../components/ui/button-with-icon';
import { ArrowUpRight, Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/Services_Provide/Website Development.webp';
import ScrollRevealHeading from './ScrollRevealHeading';

export default function WebsiteHero() {
  return (
    <>
      {/* ── BANNER HERO ─────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: '420px', marginTop: '90px' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[#111827]/45 z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />

        {/* Purple/violet overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(135deg, rgba(109,40,217,0.55) 0%, rgba(139,92,246,0.50) 50%, rgba(167,139,250,0.45) 100%)',
          }}
        />

        {/* Decorative blobs */}
        <div
          className="absolute z-[2]"
          style={{
            top: '-40px', left: '-40px', width: '220px', height: '220px',
            borderRadius: '50%', background: 'rgba(196,181,253,0.18)',
            filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute z-[2]"
          style={{
            bottom: '-30px', right: '-30px', width: '180px', height: '180px',
            borderRadius: '50%', background: 'rgba(167,139,250,0.20)',
            filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse',
          }}
        />

        {/* Center text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="font-extrabold text-white mb-5 tracking-tight leading-tight"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              textShadow: '0 4px 24px rgba(80,0,180,0.25)',
            }}
          >
            Website Development
          </h1>

          {/* Breadcrumb */}
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full mt-1"
            style={{
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(80,0,180,0.12)',
            }}
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: '#fb923c', fontWeight: 700, fontSize: '16px' }}
            >
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[16px] font-semibold" style={{ color: '#1e2f57' }}>
              Website Development
            </span>
          </div>
        </div>

        {/* Curved white bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '80px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>

        <style>{`
          @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
          }
          @keyframes floatBlob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.08) translate(10px, -10px); }
          }
        `}</style>
      </div>

      {/* ── EDITORIAL CONTENT SECTION ───────────────────────────── */}
      <section className="w-full bg-white pt-16 pb-20 px-4 md:px-8" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="max-w-[1200px] mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '13px',
                color: 'var(--accent-orange, #e08326)',
              }}
            >
              Website Development
            </span>
          </div>

          <ScrollRevealHeading
            className="mb-10"
            words={[
              { text: "Website" },
              { text: "Development", italic: true },
              { text: "Built" },
              { text: "to" },
              { text: "Be" },
              { text: "Seen," },
              { text: "Used" },
              { text: "and" },
              { text: "Remembered" }
            ]}
          />

          <div className="flex flex-col md:flex-row gap-8 lg:gap-20 mb-12">
            {/* Left column */}
            <div className="flex-1">
              <p
                className="leading-relaxed font-medium"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#334155' }}
              >
                Your website is not just the place people go to find your business.
              </p>
              <p
                className="leading-relaxed font-bold mt-3"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--brand-navy, #1e2f57)' }}
              >
                It is where they decide whether to trust you, understand what you offer, and take the next step.
              </p>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <p
                className="leading-relaxed mb-10"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: '#475569' }}
              >
                ADSSERV creates modern websites that bring together thoughtful design, clear content,
                responsive development, SEO foundations, and conversion-focused user experiences — so the
                site looks right and works for the business behind it.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ButtonWithIcon>
                  Start My Website
                </ButtonWithIcon>

                <button
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 font-bold rounded-full border-2 transition-all duration-300"
                  style={{
                    color: 'var(--brand-navy, #1e2f57)',
                    borderColor: 'rgba(30,47,87,0.20)',
                    fontSize: '15px',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brand-navy, #1e2f57)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(30,47,87,0.20)'; }}
                >
                  <span>View Our Services</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}