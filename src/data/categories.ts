export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  badgeClass: string;
  featured: boolean;
}

export const categories: Category[] = [
  {
    slug: 'marketing-playbook',
    name: 'Marketing Playbook',
    description: 'Proven frameworks and tactics for building a marketing system that actually works.',
    icon: '📋',
    badgeClass: 'bg-blue-100 text-blue-700',
    featured: true,
  },
  {
    slug: 'ai-automation',
    name: 'AI & Automation',
    description: 'How to use AI tools and automation to save hours and scale your marketing.',
    icon: '🤖',
    badgeClass: 'bg-purple-100 text-purple-700',
    featured: true,
  },
  {
    slug: 'tools-reviews',
    name: 'Tools & Reviews',
    description: 'Honest reviews of marketing software, platforms, and tools worth your money.',
    icon: '🔧',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    featured: true,
  },
  {
    slug: 'seo-search',
    name: 'SEO & Search',
    description: 'Practical search engine optimization tactics that drive consistent organic traffic.',
    icon: '🔍',
    badgeClass: 'bg-orange-100 text-orange-700',
    featured: false,
  },
  {
    slug: 'local-growth-lab',
    name: 'Local Growth Lab',
    description: 'Local marketing strategies for service businesses, contractors, and brick-and-mortar.',
    icon: '📍',
    badgeClass: 'bg-red-100 text-red-700',
    featured: true,
  },
  {
    slug: 'templates-downloads',
    name: 'Templates & Downloads',
    description: 'Free templates, checklists, and swipe files you can use today.',
    icon: '📥',
    badgeClass: 'bg-teal-100 text-teal-700',
    featured: false,
  },
  {
    slug: 'marketing-news',
    name: 'Marketing News Simplified',
    description: 'The most important marketing news explained in plain language, not jargon.',
    icon: '📰',
    badgeClass: 'bg-slate-100 text-slate-700',
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}

export function getCategoryBadgeClass(slug: string): string {
  return getCategoryBySlug(slug)?.badgeClass ?? 'bg-slate-100 text-slate-700';
}

export const featuredCategories = categories.filter((c) => c.featured);
