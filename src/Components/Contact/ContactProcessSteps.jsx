import React from 'react';
import { processSteps } from './contactData';
import { MessageSquare, Search, PhoneCall, Sparkles } from 'lucide-react';

export default function ContactProcessSteps() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <MessageSquare className="w-5 h-5 text-orange-600" />;
      case 1: return <Search className="w-5 h-5 text-amber-600" />;
      case 2: return <PhoneCall className="w-5 h-5 text-indigo-600" />;
      case 3: default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="w-full py-24 bg-slate-50 font-sans border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
              The Next Step
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
            From first message to clear direction.
          </h2>
        </div>

        {/* 4 Steps Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 bg-slate-900 text-white text-xs font-extrabold rounded-md uppercase tracking-wider">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Phase 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
