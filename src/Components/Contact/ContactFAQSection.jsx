import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { contactFaqs } from './contactData';

export default function ContactFAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full py-24 bg-white font-sans border-b border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
              Contact FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
            Questions before getting in touch?
          </h2>
        </div>

        {/* Accordion Cards (Purple Style) */}
        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border bg-[#eadefa] border-white shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <h3 className="text-[17px] md:text-[18px] font-bold leading-snug text-[#1e2f57]">
                    {faq.question}
                  </h3>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300"
                    style={{ backgroundColor: isOpen ? 'var(--brand-purple, #8b5cf6)' : 'var(--accent-orange, #e08326)' }}
                  >
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Answer Area */}
                <div
                  className="transition-all duration-500 ease-in-out"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <div className="px-6 pb-6 text-[15.5px] font-medium leading-relaxed text-[#1e2f57]">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
