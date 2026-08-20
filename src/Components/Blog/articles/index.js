import SeoAiSearchArticle from './SeoAiSearchArticle';

export const articleContentMap = {
  'seo-in-the-age-of-ai-search': SeoAiSearchArticle,
};

export function getArticleContent(slug) {
  return articleContentMap[slug] ?? null;
}

export function hasArticleContent(slug) {
  return slug in articleContentMap;
}
