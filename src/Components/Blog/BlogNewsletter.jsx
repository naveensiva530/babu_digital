import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../Components/HomePage/common.css';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail('');
    }
  };

  return (
    <section className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              STAY UPDATED
            </span>
          </div>

          <ScrollRevealHeading justify="center" maxW="600px" className="mx-auto mb-5" words={[
            { text: "Get" }, { text: "Practical" }, { text: "Digital", italic: true },
            { text: "Marketing" }, { text: "Insights" }
          ]} />

          <p className="text-[16px] font-medium leading-relaxed text-slate-600 mb-10 max-w-[520px] mx-auto">
            Receive useful marketing insights, strategies and digital updates from ADSSERV.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[520px] mx-auto mb-4">
            <div className="relative flex-1">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-5 py-4 rounded-full border border-gray-200 bg-slate-50 text-[15px] font-medium focus:outline-none focus:border-[var(--accent-orange)] focus:bg-white transition-all duration-300"
                style={{ color: 'var(--brand-navy)' }}
              />
            </div>
            <button type="submit" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-navy)] text-white text-[14px] font-bold rounded-full hover:bg-[var(--accent-orange)] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>

          <p className="text-[13px] font-medium text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
