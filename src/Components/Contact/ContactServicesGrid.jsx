import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Share2, TrendingUp, Layout, Palette, PenTool } from 'lucide-react';
import { servicesGrid } from './contactData';

export default function ContactServicesGrid() {
  const navigate = useNavigate();

  const getIcon = (id) => {
    switch (id) {
      case 'seo': return <Search className="w-6 h-6 text-orange-600" />;
      case 'social-media': return <Share2 className="w-6 h-6 text-purple-600" />;
      case 'performance': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'website': return <Layout className="w-6 h-6 text-blue-600" />;
      case 'branding': return <Palette className="w-6 h-6 text-amber-600" />;
      case 'content': default: return <PenTool className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section className="w-full py-24 bg-white font-sans border-b border-slate-100">
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
              Not Sure Where To Start?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
            Explore what we can help you with.
          </h2>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesGrid.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(item.path);
                window.scrollTo(0, 0);
              }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:bg-white hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-orange-50 border border-slate-200 flex items-center justify-center mb-6 transition-colors shadow-sm">
                  {getIcon(item.id)}
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-orange-600 font-bold text-xs uppercase tracking-wider group-hover:text-orange-700">
                <span>{item.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
