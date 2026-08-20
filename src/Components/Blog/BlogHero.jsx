import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, ChevronRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function BlogHero({ searchQuery, onSearchChange }) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: '420px', marginTop: '90px' }}>
        <div
          className="absolute inset-0 bg-[#111827]/50 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1499750310107-5fef28c666d8?auto=format&fit=crop&q=80&w=1200)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(30,47,87,0.75) 0%, rgba(139,92,246,0.45) 100%)' }} />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto mb-10">
          <h1 className="font-extrabold text-white mb-5 tracking-tight leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}>
            Blog
          </h1>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full mt-1" style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}>
            <Link to="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: '#fb923c', fontWeight: 700, fontSize: '16px' }}>
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} /><span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[16px] font-semibold" style={{ color: '#1e2f57' }}>Blog</span>
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '80px', transform: 'scaleX(-1)' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </>
  );
}
