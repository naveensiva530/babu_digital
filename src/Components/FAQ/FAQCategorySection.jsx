import React, { useState } from 'react';
import { Plus, Minus, Share2, Check, ThumbsUp, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQCategorySection({ 
  category, 
  openFaqId, 
  onToggleFaq, 
  searchQuery,
  onOpenModal 
}) {
  const [copiedId, setCopiedId] = useState(null);
  const [feedback, setFeedback] = useState({});

  const handleCopyLink = (faqId, e) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${faqId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(faqId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (faqId, isHelpful, e) => {
    e.stopPropagation();
    setFeedback((prev) => ({ ...prev, [faqId]: isHelpful }));
  };

  // Helper to highlight matching search term
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-amber-300 text-slate-900 rounded-sm px-1 py-0.5 font-bold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (!category.faqs || category.faqs.length === 0) return null;

  return (
    <section id={category.id} className="w-full py-16 border-b border-slate-100 last:border-0 scroll-mt-36 font-sans">
      
      {/* Category Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <span
            className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
            style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
          >
            <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="italic font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
          >
            {category.eyebrow}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
          {category.title}
        </h2>
        {category.description && (
          <p className="mt-4 text-[16px] md:text-[18px] font-medium leading-relaxed max-w-2xl" style={{ color: '#334155' }}>
            {category.description}
          </p>
        )}
      </div>

      {/* Accordion Cards Grid */}
      <div className="space-y-4">
        {category.faqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          const userFeedback = feedback[faq.id];

          return (
            <div
              key={faq.id}
              id={faq.id}
              className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                isOpen
                  ? 'bg-gradient-to-b from-slate-50 to-white border-orange-200 shadow-xl shadow-orange-500/5 ring-1 ring-orange-500/20'
                  : 'bg-slate-50/70 hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {/* Question Header Bar */}
              <button
                onClick={() => onToggleFaq(faq.id)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-slate-900 text-white text-xs font-extrabold rounded-md uppercase tracking-wider">
                      {faq.number}
                    </span>
                    {faq.tags && faq.tags.length > 0 && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                        • {faq.tags[0]}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                    isOpen ? 'text-orange-600' : 'text-slate-900'
                  }`}>
                    {highlightText(faq.question, searchQuery)}
                  </h3>
                </div>

                {/* Expand / Collapse Icon Button */}
                <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isOpen
                      ? 'bg-orange-600 text-white rotate-180 scale-105'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5" strokeWidth={2.5} />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer Content Body */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-slate-100 mt-2">
                  
                  {/* Answer Text */}
                  <div className="text-slate-700 text-base sm:text-lg leading-relaxed space-y-4 pt-6 font-normal">
                    {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {highlightText(paragraph, searchQuery)}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  {faq.tags && faq.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Topics:</span>
                      {faq.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold rounded-full transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Accordion Footer Action Bar */}
                  <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500 bg-slate-100/60 p-4 rounded-xl">
                    
                    {/* Share Link */}
                    <button
                      onClick={(e) => handleCopyLink(faq.id, e)}
                      className="flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer"
                      title="Copy direct link to this FAQ"
                    >
                      {copiedId === faq.id ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4 text-slate-400" />
                          <span>Share Question</span>
                        </>
                      )}
                    </button>

                    {/* Feedback */}
                    <div className="flex items-center gap-3">
                      <span>Was this answer clear?</span>
                      <button
                        onClick={(e) => handleFeedback(faq.id, true, e)}
                        className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                          userFeedback === true
                            ? 'bg-emerald-500 text-white font-bold'
                            : 'bg-white hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Yes</span>
                      </button>
                      <button
                        onClick={(e) => handleFeedback(faq.id, false, e)}
                        className={`px-2.5 py-1 rounded-md transition-all ${
                          userFeedback === false
                            ? 'bg-rose-500 text-white font-bold'
                            : 'bg-white hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        No
                      </button>
                    </div>

                    {/* Need more info? */}
                    <button
                      onClick={onOpenModal}
                      className="text-orange-600 font-bold hover:underline ml-auto sm:ml-0"
                    >
                      Need custom detail? Ask us →
                    </button>

                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
