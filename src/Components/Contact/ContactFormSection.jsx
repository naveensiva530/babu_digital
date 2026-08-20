import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { contactDetails, enquiryFormData } from './contactData';

export default function ContactFormSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    website: '',
    serviceInterest: preselectedService || 'SEO Services',
    projectDetails: '',
    consent: true,
  });

  // Update when preselectedService prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the privacy consent to submit your enquiry.");
      return;
    }
    setLoading(true);
    setStatus(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
    }, 1000);
  };

  return (
    <section id="enquiry-form-section" className="w-full py-24 bg-white font-sans scroll-mt-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Contact Details Card (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Standard Eyebrow */}
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
                  {contactDetails.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                {contactDetails.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Connect directly with our team to discuss your goals, request a consultation, or ask any preliminary questions.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-orange-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Direct Email</div>
                  <a 
                    href={`mailto:${contactDetails.email}`} 
                    className="text-lg font-extrabold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                  <div className="text-xs text-slate-500 mt-1">Typical reply within 2 - 4 business hours.</div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-orange-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Business Line</div>
                  <a 
                    href={`tel:${contactDetails.phone}`} 
                    className="text-lg font-extrabold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    {contactDetails.phone}
                  </a>
                  <div className="text-xs text-slate-500 mt-1">Available for project inquiries and client support.</div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-orange-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Global Studio Location</div>
                  <div className="text-base font-bold text-slate-900 leading-snug">
                    {contactDetails.location}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-orange-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Working Hours</div>
                  <div className="text-base font-bold text-slate-900">
                    {contactDetails.workingHours}
                  </div>
                </div>
              </div>

            </div>

            {/* Security Assurance Badge */}
            <div className="p-5 rounded-2xl text-white flex items-center gap-3 shadow-md" style={{ backgroundColor: 'var(--brand-navy, #1e2f57)' }}>
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-white/90 leading-relaxed font-medium">
                {enquiryFormData.microcopy}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Enquiry Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl relative">
              
              <div className="mb-8">
                {/* Standard Eyebrow */}
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
                    {enquiryFormData.eyebrow}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                  {enquiryFormData.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  {enquiryFormData.supportingCopy}
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Enquiry Received!
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed max-w-md mx-auto">
                    {enquiryFormData.successMessage}
                  </p>
                  <button
                    onClick={() => {
                      setStatus(null);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        company: '',
                        website: '',
                        serviceInterest: 'SEO Services',
                        projectDetails: '',
                        consent: true,
                      });
                    }}
                    className="px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field 01 & 02 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="Your business email"
                        className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 03 & 04 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Company / Business
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company or business name"
                        className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 05: What can we help with? */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      What can we help with? *
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    >
                      {enquiryFormData.servicesOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    {/* Quick selection chips */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['SEO Services', 'Social Media Marketing', 'Performance Marketing', 'Website Development'].map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceInterest: chip })}
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                            formData.serviceInterest === chip
                              ? 'bg-orange-600 text-white font-bold'
                              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          + {chip}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 06: Tell us about your project */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="What are you trying to achieve, and what would you like help with?"
                      className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Form Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                    />
                    <label htmlFor="consent-checkbox" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                      {enquiryFormData.consent}
                    </label>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{enquiryFormData.errorMessage}</span>
                    </div>
                  )}

                  {/* Form CTA Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-base rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <span>{enquiryFormData.cta}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
