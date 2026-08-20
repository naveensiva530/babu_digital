// src/components/Services.jsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import "../common.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import all service images from assets/Services folder
import socialMediaImg from "../../../assets/Services/Social Media Marketing.webp";
import performanceImg from "../../../assets/Services/Performance marketing.webp";
import websiteDevImg from "../../../assets/Services/Website Development.webp";
import influencerImg from "../../../assets/Services/Influncer Marketing.webp";
import seoImg from "../../../assets/Services/SEO.webp";
import videoImg from "../../../assets/Services/Video Production.webp";
import brandingImg from "../../../assets/Services/Branding Solution.webp";
import consultingImg from "../../../assets/Services/Digital consulting.webp";
import contentImg from "../../../assets/Services/Content Writing.webp";
import instagramImg from "../../../assets/Services/Instragram marketing.webp";
import healthImg from "../../../assets/Services/Health Care.webp";
import realEstateImg from "../../../assets/Services/Real Estate.webp";
import educationImg from "../../../assets/Services/Education care.webp";
import saasImg from "../../../assets/Services/IT-SAAS.webp";
import beautyImg from "../../../assets/Services/Beauty & Salon.webp";

gsap.registerPlugin(ScrollTrigger);

import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Megaphone,
  UserCog,
  PersonStanding,
  Globe,
} from "lucide-react";

const services = [
  {
    num: "01", tag: "MARKETING", title: "Social Media\nMarketing", icon: Globe,
    image: socialMediaImg, desc: "Build a social presence with strategy, content, community, and platform-native creative.", cta: "Explore Social Media Marketing", path: "/services/social-media-marketing"
  },
  {
    num: "02", tag: "ADS", title: "Performance\nMarketing", icon: ArrowUpRight,
    image: performanceImg, desc: "Put paid campaigns, targeting, creative testing, and conversion thinking behind your growth goals.", cta: "Explore Performance Marketing", path: "/services/performance-marketing"
  },
  {
    num: "03", tag: "WEB", title: "Website\nDevelopment", icon: UserCog,
    image: websiteDevImg, desc: "Build websites that look sharp, work smoothly, communicate clearly, and give visitors a reason to take the next step.", cta: "Explore Website Development", path: "/services/website-development"
  },
  {
    num: "04", tag: "INFLUENCER", title: "Influencer\nMarketing", icon: PersonStanding,
    image: influencerImg, desc: "Connect brands with relevant creators and audiences through purposeful creator-led campaigns.", cta: "Explore Influencer Marketing", path: "/services/influencer-marketing"
  },
  {
    num: "05", tag: "SEO", title: "SEO\nServices", icon: Megaphone,
    image: seoImg, desc: "Make your brand easier to discover through search-focused strategy, technical optimisation, content, and authority building.", cta: "Explore SEO Services", path: "/services/seo-services"
  },
  {
    num: "06", tag: "VIDEO", title: "Video\nProduction", icon: UserCog,
    image: videoImg, desc: "Turn ideas, products, people, and stories into visual content built for modern digital platforms.", cta: "Explore Video Production", path: "/services/video-production"
  },
  {
    num: "07", tag: "BRANDING", title: "Branding\nSolutions", icon: Megaphone,
    image: brandingImg, desc: "Create a clearer identity, stronger visual language, and more consistent brand experience.", cta: "Explore Branding Solutions", path: "/services/branding-solutions"
  },
  {
    num: "08", tag: "CONSULTING", title: "Digital\nConsulting", icon: PersonStanding,
    image: consultingImg, desc: "Get practical digital direction when you need clarity on strategy, channels, technology, or growth.", cta: "Explore Digital Consulting", path: "/services/digital-consulting"
  },
  {
    num: "09", tag: "CONTENT", title: "Content\nWriting", icon: Megaphone,
    image: contentImg, desc: "Give your brand useful, persuasive, search-friendly content that sounds like a human wrote it.", cta: "Explore Content Writing", path: "/services/content-writing"
  },
  {
    num: "10", tag: "SOCIAL", title: "Instagram\nMarketing", icon: Globe,
    image: instagramImg, desc: "Build an Instagram presence around content, audience behaviour, creative formats, and platform-specific strategy.", cta: "Explore Instagram Marketing", path: "/services/instagram-marketing"
  }
];

// ─── carousel config ──────────────────────────────────────────
const CARDS_PER_VIEW = 4;
const CLONE_COUNT = CARDS_PER_VIEW;   // 4 clones on each side
const TOTAL = services.length;  // 15
const EXT_LEN = TOTAL + CLONE_COUNT * 2; // 23

const extendedCards = [
  ...services.slice(-CLONE_COUNT).map((s, i) => ({ ...s, _key: `cs${i}` })),
  ...services.map((s) => ({ ...s, _key: s.num })),
  ...services.slice(0, CLONE_COUNT).map((s, i) => ({ ...s, _key: `ce${i}` })),
];

export default function Services() {
  const [idx, setIdx] = useState(CLONE_COUNT); // start at real card 0
  const [animated, setAnimated] = useState(true);
  const [hoveredKey, setHoveredKey] = useState(null);
  const trackRef = useRef(null); // ref to the sliding track div
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);

  // ── Bug fix: only react to the track's own "transform" transition end ──
  const handleTransitionEnd = useCallback((e) => {
    // Ignore events bubbling up from child elements (card hover animations)
    if (e.target !== trackRef.current) return;
    // Ignore non-transform transitions
    if (e.propertyName !== "transform") return;

    setAnimated(false);
    setIdx((prev) => {
      if (prev >= TOTAL + CLONE_COUNT) return prev - TOTAL; // overshot right
      if (prev < CLONE_COUNT) return prev + TOTAL; // overshot left
      return prev;
    });
  }, []);

  // Re-enable transition after silent teleport (two rAF ticks = guaranteed paint)
  useEffect(() => {
    if (!animated) {
      let raf1 = requestAnimationFrame(() => {
        let raf2 = requestAnimationFrame(() => setAnimated(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [animated]);

  const next = () => setIdx((p) => p + 1);
  const prev = () => setIdx((p) => p - 1);

  const translateX = `calc(-${idx} / ${EXT_LEN} * 100%)`;

  // Scroll-triggered entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading block slides up
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Carousel fades + scales in
      gsap.fromTo(
        carouselRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-40 lg:pb-64 px-4 pt-32 md:pt-40"
      style={{ background: "var(--bg-light-purple)", fontFamily: "var(--font-primary)" }}
    >
      <div className="relative mx-auto max-w-7xl z-20">

        {/* ── TOP BAR: heading CENTERED (Process.jsx style), arrows RIGHT ── */}
        <div ref={headingRef} className="relative mb-14 flex flex-col items-start justify-start text-left">

          {/* ARROWS — absolutely right-positioned */}
          <div className="absolute right-0 top-0 flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
              style={{ border: "1px solid var(--border-gray)", background: "var(--primary-white)", color: "var(--text-dark-blue)" }}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
              style={{ background: "var(--accent-orange)", color: "#fff" }}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[16px] italic font-medium text-[#1a233a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              OUR CAPABILITIES
            </span>
          </div>

          {/* title */}
          <h2
            className="text-[38px] md:text-[46px] font-extrabold leading-[1.15] tracking-tight max-w-[700px]"
            style={{ color: "var(--text-dark-blue)" }}
          >
            Everything your digital presence needs. Nothing it doesn't.
          </h2>

          {/* subtitle */}
          <p
            className="text-[15px] font-medium mt-3 max-w-[560px] leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            Different businesses need different combinations of digital marketing. Start with the problem, then build the right solution around it.
          </p>
        </div>

        {/* ── CAROUSEL VIEWPORT ─────────────────────────── */}
        <div ref={carouselRef} style={{ overflow: "hidden", paddingTop: "2.5rem", marginTop: "-2.5rem" }}>
          {/*
            Track width = EXT_LEN / CARDS_PER_VIEW × 100% of viewport
            → each card occupies exactly 25% of the viewport
          */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              alignItems: "stretch",
              width: `calc(${EXT_LEN} / ${CARDS_PER_VIEW} * 100%)`,
              transform: `translateX(${translateX})`,
              transition: animated ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              willChange: "transform",
            }}
          >
            {extendedCards.map((s) => {
              const Icon = s.icon;
              const isHovered = hoveredKey === s._key;

              return (
                <div
                  key={s._key}
                  className="services-card-item group relative flex-shrink-0 px-4 flex flex-col"
                  style={{
                    width: `calc(100% / ${EXT_LEN})`,
                    transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={() => setHoveredKey(s._key)}
                  onMouseLeave={() => setHoveredKey(null)}
                >
                  {/* FLOATING ICON */}
                  <div
                    className="absolute -top-6 left-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
                    style={{
                      // Default: orange bg, white icon
                      // Hover:   white bg, orange icon
                      background: isHovered ? "#fff" : "var(--accent-orange)",
                      transform: `translateX(-50%) scale(${isHovered ? 1.12 : 1})`,
                      transition: "background 0.4s ease, transform 0.4s ease",
                      boxShadow: isHovered ? "0 8px 24px rgba(224,131,38,0.35)" : undefined,
                    }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{
                        color: isHovered ? "var(--accent-orange)" : "#fff",
                        transition: "color 0.4s ease",
                      }}
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className="relative overflow-hidden border shadow-2xl rounded-tl-[150px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] flex flex-col flex-1"
                    style={{
                      background: isHovered ? "var(--text-dark-blue)" : "var(--primary-white)",
                      border: isHovered ? "1px solid transparent" : "1px solid var(--border-gray-light)",
                      transition: "background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease",
                      boxShadow: isHovered ? "0 25px 60px rgba(26,26,64,0.35)" : undefined,
                    }}
                  >
                    {/* CONTENT */}
                    <div className="p-6 pt-10">
                      <div
                        className="text-right text-5xl font-bold"
                        style={{
                          color: isHovered ? "var(--accent-orange)" : "var(--text-gray)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.num}
                      </div>
                      <p
                        className="mt-6 text-xs font-semibold uppercase tracking-[3px]"
                        style={{
                          color: isHovered ? "rgba(255,255,255,0.65)" : "var(--text-gray)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.tag}
                      </p>
                      <h3
                        className="mt-3 whitespace-pre-line text-2xl font-bold leading-snug"
                        style={{
                          color: isHovered ? "#fff" : "var(--text-dark-blue)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="mt-3 text-[13px] leading-relaxed font-medium"
                        style={{
                          color: isHovered ? "rgba(255,255,255,0.8)" : "var(--text-gray)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>

                    {/* IMAGE — fills remaining card space */}
                    <div className="relative mt-4 flex-1" style={{ minHeight: 0 }}>
                      <div className="relative overflow-hidden rounded-tr-[150px] h-full">
                        <img
                          src={s.image}
                          alt={s.title.replace("\n", " ")}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            transform: isHovered ? "scale(1.1)" : "scale(1)",
                            transition: "transform 0.7s ease",
                          }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: isHovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.1)",
                            transition: "background 0.4s ease",
                          }}
                        />
                        <button
                          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center shadow-lg rounded-[20px] transition-all duration-300 hover:rotate-45 hover:scale-110"
                          style={{ background: "var(--accent-orange)", color: "#fff" }}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* GLOW */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.5s ease" }}
                    >
                      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full blur-3xl" style={{ background: "rgba(255,107,157,0.15)" }} />
                      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full blur-3xl" style={{ background: "rgba(224,131,38,0.2)" }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore All Services — below carousel */}
        <div className="flex justify-center mt-12">
          <button className="know-more-btn">
            <span>Explore All Services</span>
            <div className="know-more-icon">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </button>
        </div>

      </div>

      {/* ── Bottom Arch Curve ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[80px] md:h-[130px]"
        >
          <path d="M0,130 Q720,-10 1440,130 L1440,130 L0,130 Z" fill="#ffffff" />
        </svg>
      </div>

    </section>
  );
}