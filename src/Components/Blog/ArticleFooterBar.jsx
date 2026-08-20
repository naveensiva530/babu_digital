import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function ArticleFooterBar({ post }) {
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <section className="w-full py-12 border-t border-gray-100 font-primary">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-slate-400">Category</span>
            <span className="text-[15px] font-bold" style={{ color: 'var(--brand-navy)' }}>{post.categoryLabel ?? post.category}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-slate-400">Published</span>
            <span className="text-[15px] font-bold" style={{ color: 'var(--brand-navy)' }}>{post.published}</span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[13px] font-bold hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-all duration-300 w-fit"
            style={{ color: 'var(--brand-navy)' }}
          >
            <Share2 className="w-4 h-4" />
            Share this article
          </button>
        </div>

        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-slate-50 hover:bg-[var(--brand-navy)] hover:text-white text-[14px] font-bold transition-all duration-300"
          style={{ color: 'var(--brand-navy)' }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Blog
        </Link>
      </div>
    </section>
  );
}
