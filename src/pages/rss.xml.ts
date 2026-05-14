import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Market Matters Online',
    description: 'Simple marketing tactics, AI tools, software reviews, and growth strategies for people who need results without the fluff.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: [post.data.category, ...post.data.tags],
        author: post.data.author,
      })),
    customData: `<language>en-us</language>`,
  });
}
