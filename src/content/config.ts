import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Market Matters Team'),
    draft: z.boolean().default(false),
    affiliate: z.boolean().default(false),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
  }),
});

export const collections = { blog };
