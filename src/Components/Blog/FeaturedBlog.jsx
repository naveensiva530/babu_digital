import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function FeaturedBlog({ post }) {
  if (!post) return null;

  return (
    <section className="w-full pb-16 pt-4 relative font-primary bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
            FEATURED BLOG
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(30,47,87,0.08)] border border-gray-100">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm" style={{ color: 'var(--brand-navy)' }}>
              Blog {post.id}
            </div>
          </div>

          <div className="p-8 md:p-12 lg:py-14">
            <span className="text-[12px] font-extrabold uppercase tracking-widest mb-4 block" style={{ color: 'var(--accent-orange)' }}>
              {post.category}
            </span>
            <h2 className="text-[28px] md:text-[36px] font-extrabold leading-[1.15] tracking-tight mb-5" style={{ color: 'var(--brand-navy)' }}>
              {post.title}
            </h2>
            <p className="text-[16px] font-medium leading-relaxed text-slate-600 mb-6">
              {post.excerpt}
            </p>
            <p className="text-[13px] font-semibold text-slate-400 mb-8">{post.meta}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--brand-navy)] text-white text-[14px] font-bold rounded-full hover:bg-[var(--accent-orange)] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Read Article</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
