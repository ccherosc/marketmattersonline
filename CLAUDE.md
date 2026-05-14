# Market Matters Online — Project Guide

## What This Is
An Astro + Tailwind CSS static blog and newsletter site for marketmattersonline.com. Content-first marketing site monetized via affiliate links, newsletter, and consulting referrals to showmeresultsonly.com.

## Tech Stack
- **Framework:** Astro 4.x (static output)
- **Styling:** Tailwind CSS 3.x + @tailwindcss/typography
- **Content:** Markdown/MDX via Astro Content Collections
- **Hosting:** Cloudflare Pages (deploy from GitHub)
- **Domain:** marketmattersonline.com

## Key Commands
```bash
npm run dev      # Start dev server (http://localhost:4321)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Directory Structure
```
src/
  components/     # Reusable Astro components
  content/
    blog/         # All blog posts as .mdx files
  data/
    categories.ts # Category definitions and helpers
  layouts/
    BaseLayout.astro      # Root layout
    BlogPostLayout.astro  # Blog post layout with schema
    PageLayout.astro      # Generic page layout
  pages/          # File-based routing
    index.astro
    blog/
      index.astro       # Blog listing
      [slug].astro      # Individual post
    category/
      [category].astro  # Category pages
    author/
      [author].astro    # Author pages
    start-here.astro
    tools-reviews.astro
    about.astro
    privacy-policy.astro
    affiliate-disclosure.astro
    rss.xml.ts
  styles/
    global.css    # Tailwind + global component classes
  utils/
    formatDate.ts
public/
  robots.txt
  favicon.svg
  _redirects    # Cloudflare Pages redirects
  _headers      # Cloudflare Pages security headers
  images/       # Add blog images here: public/images/blog/
```

## Adding a New Blog Post
1. Create a `.mdx` file in `src/content/blog/`
2. Filename becomes the URL slug: `my-post-title.mdx` → `/blog/my-post-title/`
3. Required frontmatter:

```yaml
---
title: "Your Post Title"
description: "Meta description (150-160 chars)"
pubDate: 2025-01-15
category: "marketing-playbook"
tags: ["tag1", "tag2"]
author: "Market Matters Team"
readTime: "5 min read"
featured: false
affiliate: false
draft: false
---
```

## Valid Category Slugs
- `marketing-playbook`
- `ai-automation`
- `tools-reviews`
- `seo-search`
- `local-growth-lab`
- `templates-downloads`
- `marketing-news`

## Newsletter Form Integration
Edit `src/components/NewsletterSignup.astro` and update `FORM_ACTION` with your email provider's form URL:
- **ConvertKit:** `https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions`
- **Beehiiv:** Embed their iframe or use their API
- **Mailchimp:** Use their embed form action URL

## Brand Colors (Tailwind classes)
- Dark headlines: `text-slate-900`
- Body text: `text-slate-700`
- Muted text: `text-slate-500`
- Primary CTA: `bg-blue-600` / `hover:bg-blue-700`
- Hero background: `bg-slate-900`
- Alt sections: `bg-slate-50`

## Adding Hero Images
1. Add images to `public/images/blog/`
2. Reference in frontmatter: `heroImage: "/images/blog/filename.jpg"`
3. Recommended size: 1200×630px (also works as OG image)

## Affiliate Link Pattern
When a post has `affiliate: true` in frontmatter, the AffiliateDisclaimer component shows automatically. Use clearly-labeled affiliate links throughout post content.

## Deployment (GitHub + Cloudflare Pages)
1. Push to GitHub repo
2. In Cloudflare Pages: connect repo, set build command `npm run build`, output dir `dist`
3. Add custom domain `marketmattersonline.com` in Cloudflare Pages settings
4. DNS is managed at Cloudflare — add CNAME records automatically

## SEO Setup
- Sitemap auto-generated at `/sitemap-index.xml` by @astrojs/sitemap
- RSS feed at `/rss.xml`
- OG default image: add to `public/og-default.png` (1200×630px)
- Schema markup: Organization, Website, BlogPosting, BreadcrumbList all implemented
