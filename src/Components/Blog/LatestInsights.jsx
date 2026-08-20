import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { hasArticleContent } from './articles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function LatestInsights({ posts }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: i * 0.1, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [posts]);

  if (!posts.length) {
    return (
      <section className="w-full py-20 bg-white font-primary text-center">
        <p className="text-[17px] font-medium text-slate-500">No articles match your search.</p>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              FROM THE ADSSERV BLOG
            </span>
          </div>
          <ScrollRevealHeading justify="center" maxW="700px" words={[
            { text: "More" }, { text: "Ideas" }, { text: "for" }, { text: "Better", italic: true },
            { text: "Digital" }, { text: "Growth" }
          ]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={post.id} ref={el => cardRefs.current[idx] = el} className="group flex flex-col bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-[0_10px_35px_rgba(30,47,87,0.06)] hover:shadow-[0_16px_45px_rgba(30,47,87,0.10)] hover:-translate-y-1 transition-all duration-400">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm" style={{ color: 'var(--brand-navy)' }}>
                  Blog {post.id}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-orange)' }}>{post.category}</span>
                <h3 className="text-[22px] font-extrabold leading-snug mb-3 group-hover:text-[var(--accent-orange)] transition-colors duration-300" style={{ color: 'var(--brand-navy)' }}>
                  {post.title}
                </h3>
                <p className="text-[14px] font-medium leading-relaxed text-slate-600 mb-4 flex-1">{post.excerpt}</p>
                <p className="text-[12px] font-semibold text-slate-400 mb-5">{post.meta}</p>
                {hasArticleContent(post.slug) ? (
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[13px] font-extrabold group/btn" style={{ color: 'var(--brand-navy)' }}>
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" style={{ color: 'var(--accent-orange)' }} />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[13px] font-extrabold text-slate-400 cursor-default">
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
