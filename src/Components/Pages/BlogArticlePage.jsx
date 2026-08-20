import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import BlogArticleHero from '../Blog/BlogArticleHero';
import ArticleCTA from '../Blog/ArticleCTA';
import ArticleRelatedInsights from '../Blog/ArticleRelatedInsights';
import ArticleFooterBar from '../Blog/ArticleFooterBar';
import { getPostBySlug, blogPosts } from '../Blog/blogData';
import { getArticleContent } from '../Blog/articles';
import '../HomePage/common.css';

const articleCTAConfig = {
  'seo-in-the-age-of-ai-search': {
    eyebrow: 'WANT TO IMPROVE YOUR SEARCH VISIBILITY?',
    title: 'Want to Improve Your Search Visibility?',
    copy: 'If your website is not generating the visibility, traffic or enquiries you expect, the first step is understanding what is holding it back. ADSSERV can help businesses evaluate their digital presence, identify opportunities and build a search strategy around their actual business objectives.',
    primaryLabel: 'Talk to Our Team',
    primaryLink: '/contact',
    secondaryLabel: 'Explore SEO Services',
    secondaryLink: '/services/seo-services',
    relatedSlugs: ['how-to-build-a-digital-marketing-strategy', 'why-your-business-needs-a-social-media-strategy'],
  },
};

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const ArticleContent = getArticleContent(slug);
  const ctaConfig = articleCTAConfig[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !ArticleContent) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = ctaConfig?.relatedSlugs
    ?.map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) ?? [];

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />
      <BlogArticleHero post={post} />
      <main className="flex-1">
        <ArticleContent />
        {ctaConfig && (
          <ArticleCTA
            eyebrow={ctaConfig.eyebrow}
            title={ctaConfig.title}
            copy={ctaConfig.copy}
            primaryLabel={ctaConfig.primaryLabel}
            primaryLink={ctaConfig.primaryLink}
            secondaryLabel={ctaConfig.secondaryLabel}
            secondaryLink={ctaConfig.secondaryLink}
          />
        )}
        <ArticleRelatedInsights posts={relatedPosts} />
        <ArticleFooterBar post={post} />
      </main>
      <Footer />
    </div>
  );
}
