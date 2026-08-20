import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function FAQModal({ isOpen, onClose, initialQuestion = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'General Inquiry',
    question: initialQuestion,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: 'General Inquiry',
      question: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header background decoration */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Question Submitted!
              </h3>
              <p className="text-slate-600 text-base max-w-md mb-8 leading-relaxed">
                Thank you for reaching out to ADSSERV. Our digital strategy team will review your question and get back to you shortly.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3.5 bg-slate-900 text-white font-bold text-sm rounded-full hover:bg-orange-600 transition-colors shadow-lg"
              >
                Close &amp; Return to FAQs
              </button>
            </div>
          ) : (
            <>
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
                  Get In Touch With ADSSERV
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                Ask Our Strategy Team
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Can't find what you are looking for? Tell us what you are trying to achieve and we'll help guide you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  >
                    <option value="General Inquiry">General Inquiry / Not Sure</option>
                    <option value="SEO & Organic Growth">SEO &amp; Organic Growth</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Paid & Performance Marketing">Paid &amp; Performance Marketing</option>
                    <option value="Website & Branding">Website &amp; Branding</option>
                    <option value="Complete Marketing Strategy">Complete Marketing Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Question or Goal *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    placeholder="Tell us what you are trying to achieve or ask your question..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 text-slate-600 font-bold text-sm hover:text-slate-900 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Question</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
