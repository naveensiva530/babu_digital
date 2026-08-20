import React from 'react';
import { Compass, Filter, Sparkles } from 'lucide-react';

export default function FAQQuickNav({ 
  categories, 
  activeCategory, 
  onSelectCategory,
  onResetFilter,
  searchQuery 
}) {
  return (
    <section id="quick-navigation" className="w-full bg-white py-12 border-y border-gray-100 sticky top-[90px] z-30 backdrop-blur-xl bg-white/95 transition-all font-primary shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            {/* Standard Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
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
                Find Your Answer
              </span>
            </div>
            
            {/* H2 Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
              What would you like to know?
            </h2>
          </div>

          {/* All Questions Button / Clear Filters */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-5 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'all' && !searchQuery
                  ? 'bg-[var(--accent-orange)] text-white shadow-md'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200 hover:text-slate-900'
              }`}
            >
              All Categories (29)
            </button>
            {searchQuery && (
              <button
                onClick={onResetFilter}
                className="px-4 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100 transition-all"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Slider/Grid */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-3 rounded-2xl text-[14.5px] font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer border ${
                  isActive
                    ? 'bg-[var(--brand-navy)] text-white border-transparent shadow-md transform -translate-y-0.5'
                    : 'bg-white text-slate-600 border-gray-200 hover:bg-gray-50 hover:text-slate-900 hover:border-gray-300'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[var(--accent-orange)]' : 'bg-slate-400'}`} />
                <span>{cat.navLabel}</span>
                <span 
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-slate-500'
                  }`}
                >
                  {cat.faqs.length}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
