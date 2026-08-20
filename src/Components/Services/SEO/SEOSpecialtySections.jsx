import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

function SEOListSection({ eyebrow, words, intro, items, closing, bg = 'white', image }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(itemRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.04, delay: 0.3, scrollTrigger: { trigger: rightRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: bg === 'purple' ? 'var(--bg-light-purple)' : 'white' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>{eyebrow}</span>
            </div>
            <ScrollRevealHeading words={words} />
            {image && <img src={image} alt="" className="w-full max-w-[400px] mt-10 object-contain drop-shadow-xl hidden lg:block" />}
          </div>

          <div ref={rightRef} className="flex flex-col gap-6">
            {intro.map((p, i) => (
              <p key={i} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">{p}</p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {items.map((item, idx) => (
                <div key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-[var(--accent-orange)] font-bold text-lg">•</span>
                  <span className="text-[14px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                </div>
              ))}
            </div>
            {closing && <p className="font-bold text-[17px] mt-2" style={{ color: 'var(--brand-navy)' }}>{closing}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnicalSEO() {
  return (
    <SEOListSection
      eyebrow="THE FOUNDATION"
      words={[{ text: "Before" }, { text: "chasing" }, { text: "rankings," }, { text: "make" }, { text: "sure" }, { text: "search", italic: true }, { text: "engines" }, { text: "can" }, { text: "understand" }, { text: "the" }, { text: "site." }]}
      intro={["Technical SEO helps remove obstacles between your website and search engines.", "Depending on the website, our work can cover:"]}
      items={["Crawlability", "Indexability", "Site architecture", "URL structure", "Canonicals", "Redirects", "XML sitemaps", "Robots directives", "Core Web Vitals", "Mobile usability", "Structured data", "Duplicate content", "Internal linking", "JavaScript rendering", "Image optimisation", "Page experience"]}
      closing="The exact technical priorities depend on what the site actually needs."
      bg="white"
    />
  );
}

export function OnPageSEO() {
  return (
    <SEOListSection
      eyebrow="MAKE EVERY PAGE EARN ITS PLACE"
      words={[{ text: "A" }, { text: "search-optimised" }, { text: "page" }, { text: "should" }, { text: "make" }, { text: "sense", italic: true }, { text: "to" }, { text: "people" }, { text: "first." }]}
      intro={["We align page content with the reason someone searched in the first place.", "That can involve:"]}
      items={["Search intent", "Page titles", "Meta descriptions", "H1-H3 structure", "Content hierarchy", "Internal linking", "Entity relevance", "Image optimisation", "Semantic relationships", "Conversion paths", "Content depth where genuinely useful"]}
      closing={'The objective isn\'t to make a page look "optimised." It\'s to make the page clearer, more useful, and more relevant.'}
      bg="purple"
    />
  );
}

export function ContentSEO() {
  return (
    <SEOListSection
      eyebrow="CONTENT WITH A PURPOSE"
      words={[{ text: "More" }, { text: "content" }, { text: "isn't" }, { text: "automatically" }, { text: "better", italic: true }, { text: "SEO." }]}
      intro={["We focus on useful content that answers real questions, supports commercial pages, strengthens topical coverage, and helps users move toward the next relevant action.", "That can include:"]}
      items={["Service pages", "Industry pages", "Location pages", "Blog articles", "Guides", "FAQs", "Comparison content", "Supporting resources", "Landing pages"]}
      closing="Every piece should have a reason to exist."
      bg="white"
    />
  );
}

export function LocalSEO() {
  return (
    <SEOListSection
      eyebrow="BE FOUND WHERE YOU OPERATE"
      words={[{ text: "Local" }, { text: "visibility" }, { text: "starts" }, { text: "with" }, { text: "relevance", italic: true }, { text: "and" }, { text: "consistency." }]}
      intro={["For businesses serving specific locations, we can build local SEO around the places and audiences that actually matter.", "Depending on the business, this can include:"]}
      items={["Google Business Profile optimisation", "Local landing pages", "Location signals", "Local content", "Citation consistency", "Review strategy", "Local keyword research", "Internal linking", "Local search measurement"]}
      closing="Local SEO should reflect genuine locations and service areas — not a collection of copied city pages."
      bg="purple"
    />
  );
}

export function AEOGEO() {
  return (
    <SEOListSection
      eyebrow="SEARCH IS CHANGING"
      words={[{ text: "People" }, { text: "aren't" }, { text: "only" }, { text: "searching" }, { text: "with", italic: true }, { text: "ten" }, { text: "blue" }, { text: "links" }, { text: "anymore." }]}
      intro={["Search behaviour is expanding into AI-powered answers, conversational search, summaries, and generative experiences.", "ADSSERV can structure content around:"]}
      items={["Direct answers", "Frequently asked questions", "Clear entities", "Useful definitions", "Structured information", "Strong internal relationships", "Supporting evidence", "Search intent", "Context"]}
      closing={'The objective isn\'t to "game AI." It\'s to make your brand, services, expertise, and information easier to understand accurately.'}
      bg="white"
    />
  );
}

export default TechnicalSEO;
