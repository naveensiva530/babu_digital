import React, { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import BlogHero from '../Blog/BlogHero';
import FeaturedBlog from '../Blog/FeaturedBlog';
import LatestInsights from '../Blog/LatestInsights';
import BlogFinalCTA from '../Blog/BlogFinalCTA';
import { blogPosts } from '../Blog/blogData';
import '../HomePage/common.css';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) ?? filteredPosts[0] ?? null;
  const latestPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <BlogHero />

        {/* ── SEARCH BAR (Editorial Layout below curve) ───────────────────────── */}
        <section className="w-full bg-white pt-10 pb-4 px-4 font-primary">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
            {/* Search Bar Container */}
            <div
              className="relative w-full max-w-[700px] flex items-center bg-white rounded-full transition-shadow duration-300 shadow-sm border border-gray-100 hover:shadow-md focus-within:shadow-md focus-within:border-gray-200"
              style={{ padding: '4px' }}
            >
              <div className="pl-5 pr-2 flex items-center justify-center">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles... (e.g. SEO, strategy, social media)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 bg-transparent outline-none text-[15px] md:text-[16px] font-medium text-gray-700 placeholder-gray-400"
              />
              <div className="pr-4 pl-2 flex items-center">
                <span className="text-[12px] font-bold text-gray-300 whitespace-nowrap">
                  {filteredPosts.length} articles
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED BLOG ───────────────────────── */}
        {featuredPost && <FeaturedBlog post={featuredPost} />}

        {/* ── LATEST INSIGHTS (Grid) ───────────────────────── */}
        <LatestInsights posts={latestPosts} />

        {/* ── CTA ───────────────────────── */}
        <BlogFinalCTA />
      </main>

      <Footer />
    </div>
  );
}
