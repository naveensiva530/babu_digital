import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import FAQModal from '../FAQ/FAQModal';
import { faqCategories } from '../FAQ/faqData';
import '../HomePage/common.css';
import {
  Search, ChevronRight, Home, Plus, Minus,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/Services_Provide/Social media marketing.webp';

/* ─────────────────────────────────────────
   HELPER: highlight search matches
───────────────────────────────────────── */
function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-amber-200 text-slate-900 rounded px-0.5 font-semibold">{part}</mark>
    ) : part
  );
}

/* ─────────────────────────────────────────
   FAQ ACCORDION ITEM (Services Style)
───────────────────────────────────────── */
function FAQItem({ faq, isOpen, onToggle, searchQuery }) {
  return (
    <div
      id={faq.id}
      className={`rounded-2xl border transition-all duration-300 hover:shadow-md overflow-hidden ${
        isOpen
          ? 'bg-[#eadefa] border-white shadow-sm'
          : 'bg-[#eadefa] border-white shadow-sm'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <h3 className="text-[17px] md:text-[18px] font-bold leading-snug" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
          {highlightText(faq.question, searchQuery)}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300"
          style={{ backgroundColor: isOpen ? 'var(--brand-purple, #8b5cf6)' : 'var(--accent-orange, #e08326)' }}>
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </div>
      </button>

      {/* Answer Area - ensuring it's always fully visible when open without clipping */}
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          display: isOpen ? 'block' : 'none'
        }}
      >
        <div className="px-6 pb-6 text-[15.5px] font-medium leading-relaxed text-[#1e2f57]">
          {faq.answer.split('\n\n').map((para, i) => (
            <p key={i} className={i > 0 ? "mt-4" : ""}>{highlightText(para, searchQuery)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN FAQ PAGE
───────────────────────────────────────── */
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState('faq-01');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return faqCategories.map((cat) => {
      if (activeCategory !== 'all' && cat.id !== activeCategory) return { ...cat, faqs: [] };
      if (!q) return cat;
      return {
        ...cat,
        faqs: cat.faqs.filter((faq) =>
          faq.question.toLowerCase().includes(q) ||
          faq.answer.toLowerCase().includes(q)
        )
      };
    }).filter(cat => cat.faqs.length > 0);
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    if (searchQuery.trim() && filteredCategories.length > 0 && filteredCategories[0].faqs.length > 0) {
      setOpenFaqId(filteredCategories[0].faqs[0].id);
    }
  }, [searchQuery, filteredCategories]);

  const allFaqCount = faqCategories.reduce((a, c) => a + c.faqs.length, 0);

  return (
    <div className="font-primary bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">

        {/* ── BANNER HERO (With White Curve at Bottom) ────────────────────────── */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{ minHeight: '420px', marginTop: '90px' }}
        >
          {/* Background Image & Gradient */}
          <div
            className="absolute inset-0 bg-[#111827]/45 z-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(135deg, rgba(109,40,217,0.85) 0%, rgba(139,92,246,0.80) 50%, rgba(167,139,250,0.75) 100%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto mb-10">
            {/* Heading */}
            <h1
              className="font-extrabold text-white mb-5 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}
            >
              FAQ
            </h1>

            {/* Breadcrumb (Contact Us Style) */}
            <div
              className="flex items-center gap-3 px-6 py-3 rounded-full mt-1"
              style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}
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
                FAQ
              </span>
            </div>
          </div>

          {/* White SVG Curve */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '80px' }}>
              <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* ── CONTENT AREA (Below Curve, White Background) ─────────────────────── */}
        <div className="w-full bg-white pb-24">
          <div className="max-w-[1000px] mx-auto px-4 md:px-8">
            
            {/* ── SEARCH & CATEGORY FILTERS (Mimicking Image 5 layout) ── */}
            <div className="flex flex-col items-center text-center pt-8 pb-14 border-b border-gray-100 mb-14">
              
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)' }}>
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span className="italic font-semibold uppercase tracking-widest text-orange-500" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px' }}>
                  Find Your Answer
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                What would you like to know?
              </h2>

              {/* Search Bar */}
              <div className="w-full max-w-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full overflow-hidden bg-white mb-10 border border-gray-100">
                <div className="relative flex items-center">
                  <Search className="absolute left-6 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions... (e.g. SEO, cost, social media)"
                    className="w-full pl-14 pr-32 py-4 bg-white text-slate-800 placeholder:text-slate-400 rounded-full text-[15.5px] font-medium outline-none"
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 text-[11px] font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-full transition-colors"
                    >
                      Clear
                    </button>
                  ) : (
                    <span className="absolute right-6 text-[12px] font-semibold text-slate-400 hidden sm:block">
                      {allFaqCount} answers
                    </span>
                  )}
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all ${
                    activeCategory === 'all'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  All Categories ({allFaqCount})
                </button>
                {faqCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat.id ? 'bg-white' : 'bg-gray-400'}`} />
                    {cat.navLabel}
                    <span className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-slate-500'
                    }`}>
                      {cat.faqs.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── FAQ LIST ── */}
            {filteredCategories.length > 0 ? (
              <div className="space-y-16">
                {filteredCategories.map((cat) => (
                  <div key={cat.id} id={cat.id} className="scroll-mt-32">
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)' }}>
                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                      </span>
                      <h2 className="text-2xl font-extrabold uppercase tracking-widest text-slate-400">
                        {cat.eyebrow}
                      </h2>

                    </div>

                    {/* Accordion List */}
                    <div className="flex flex-col gap-4">
                      {cat.faqs.map((faq) => (
                        <FAQItem
                          key={faq.id}
                          faq={faq}
                          isOpen={openFaqId === faq.id}
                          onToggle={() => setOpenFaqId(prev => prev === faq.id ? null : faq.id)}
                          searchQuery={searchQuery}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-5 text-2xl font-bold border border-orange-100">?</div>
                <h3 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>No results found</h3>
                <p className="text-slate-500 max-w-md mx-auto mb-7 text-[15px] leading-relaxed">
                  No questions matching "<span className="font-bold text-slate-700">{searchQuery}</span>". Try different keywords.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-6 py-3 bg-gray-100 text-slate-700 font-bold text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  View all FAQs
                </button>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-20 p-10 rounded-[2rem] flex flex-col items-center text-center shadow-lg" style={{ backgroundColor: 'var(--brand-navy, #1e2f57)' }}>
              <div className="text-[12px] font-bold uppercase tracking-widest text-orange-400 mb-3">Still have questions?</div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Let's find the right answer for your business.</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-md transition-all"
              >
                Ask Our Team
              </button>
            </div>
          </div>
        </div>

      </main>

      <FAQModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}
