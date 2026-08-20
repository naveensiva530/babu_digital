import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function ArticleRelatedInsights({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="w-full py-16 font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
            RELATED INSIGHTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {posts.map((post, idx) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col p-6 bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Related Article {String(idx + 1).padStart(2, '0')}</span>
              <h3 className="text-[16px] font-extrabold leading-snug mb-4 group-hover:text-[var(--accent-orange)] transition-colors flex-1" style={{ color: 'var(--brand-navy)' }}>
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-[13px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>
                Read Article
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--accent-orange)' }} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
