import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function BlogArticleHero({ post }) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '320px', marginTop: '90px' }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(30,47,87,0.82) 0%, rgba(139,92,246,0.55) 100%)' }} />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-[900px]">
          <span className="text-[11px] font-extrabold uppercase tracking-widest mb-4 text-white/90" style={{ color: 'var(--accent-orange)' }}>
            {post.category}
          </span>
          <h1 className="font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', textShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
            {post.title}
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '70px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <div className="w-full bg-white pt-8 pb-4 px-4 md:px-8 font-primary">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 px-5 py-3 rounded-full w-fit" style={{ background: '#f8fafc', boxShadow: '0 2px 12px rgba(30,47,87,0.06)' }}>
            <Link to="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: '#fb923c', fontWeight: 700, fontSize: '14px' }}>
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} /><span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
            <Link to="/blog" className="text-[14px] font-semibold transition-opacity hover:opacity-70" style={{ color: 'var(--brand-navy)' }}>Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
            <span className="text-[14px] font-medium text-slate-500 truncate max-w-[200px] sm:max-w-none">Article</span>
          </div>
          <p className="mt-6 text-[14px] font-semibold text-slate-400">{post.meta}</p>
        </div>
      </div>
    </>
  );
}
