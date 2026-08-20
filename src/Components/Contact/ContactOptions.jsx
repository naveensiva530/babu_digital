import React from 'react';
import { ArrowRight, Target, TrendingUp, HelpCircle } from 'lucide-react';
import { contactOptions } from './contactData';

export default function ContactOptions({ onSelectOption }) {
  const getIcon = (id) => {
    switch (id) {
      case 'project':
        return <Target className="w-6 h-6 text-orange-600" />;
      case 'growth':
        return <TrendingUp className="w-6 h-6 text-amber-600" />;
      case 'question':
      default:
        return <HelpCircle className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section className="w-full py-20 bg-slate-50 font-sans border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Standard Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
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
              Ways to Connect
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
            Choose the way that works for you.
          </h2>
        </div>

        {/* 3 Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectOption(card.presetService)}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 bg-slate-900 text-white text-xs font-extrabold rounded-md uppercase tracking-wider">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
                    {getIcon(card.id)}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-orange-600 font-extrabold text-sm group-hover:text-orange-700">
                <span>{card.cta}</span>
                <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
