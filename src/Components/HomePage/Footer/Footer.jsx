import React, { useRef, useEffect } from "react";
import { ArrowUp, ChevronRight, ArrowUpRight } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../common.css";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services/seo-services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  "Social Media Marketing",
  "Performance Marketing",
  "Website Development",
  "Influencer Marketing",
  "SEO Services",
  "Video Production",
  "Branding Solutions",
  "Digital Consulting",
  "Content Writing",
  "Instagram Marketing",
];

const industriesLinks = [
  "Health Care",
  "Real Estate",
  "Education",
  "IT-Tech / SaaS",
  "Beauty & Salon",
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative" style={{ fontFamily: "var(--font-primary)" }}>
      {/* ── MAIN FOOTER ─────────────────────────────────────────────── */}
      <div
        className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden"
        style={{ background: "var(--text-dark-blue)", color: "#fff" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-5" style={{ background: "var(--accent-orange)" }} />
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10">

          {/* ── Col 1: Brand (Span 4) ── */}
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold tracking-wide text-white">ADSSERV</span>
            </div>

            <p className="text-[14.5px] font-medium leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              ADSSERV is a Gen Z digital marketing agency helping brands grow through social media, SEO, paid advertising, websites, branding, content, creators, and digital strategy.
            </p>

            <div className="mt-4">
              <button className="group relative flex items-center justify-center gap-3 px-7 py-3.5 bg-[var(--accent-orange)] text-white text-[14.5px] font-bold rounded-full shadow-[0_10px_30px_rgba(224,131,38,0.2)] hover:shadow-[0_15px_40px_rgba(224,131,38,0.4)] hover:-translate-y-1 transition-all duration-300">
                <span>Start a Project</span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[var(--accent-orange)] group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

          {/* ── Col 2: Quick Links (Span 2) ── */}
          <div className="lg:col-span-2">
            <h3 className="text-[17px] font-bold mb-5 text-white">Quick Links</h3>
            <div className="w-8 h-[3px] mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-[14px] font-medium transition-all duration-200 group"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services (Span 4) ── */}
          <div className="lg:col-span-4">
            <h3 className="text-[17px] font-bold mb-5 text-white">Services</h3>
            <div className="w-8 h-[3px] mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[14px] font-medium transition-all duration-200 group"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-1 whitespace-nowrap">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Industries (Span 2) ── */}
          <div className="lg:col-span-2">
            <h3 className="text-[17px] font-bold mb-5 text-white">Industries</h3>
            <div className="w-8 h-[3px] mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="flex flex-col gap-3.5">
              {industriesLinks.map((industry) => (
                <li key={industry}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[14px] font-medium transition-all duration-200 group"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="max-w-[1200px] mx-auto mt-20 mb-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── BOTTOM STRIP ────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--accent-orange)" }}>
        {/* Back to top */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
            style={{ background: "var(--text-dark-blue)", border: "2px solid var(--accent-orange)", color: "#fff" }}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div
          className="max-w-[1200px] mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-[14.5px] font-medium"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          <p>© 2024 <span className="font-bold">ADSSERV</span>. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline transition-all">Privacy Policy</a>
            <a href="#" className="hover:underline transition-all">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
