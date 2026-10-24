import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    modifyDate: z.string().optional(),
    author: z.string().default('机场评测实验室'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.enum(['Windows', 'Android', 'iOS', 'macOS', 'General']),
    publishDate: z.string(),
    modifyDate: z.string().optional(),
    clientApps: z.array(z.string()).default([]),
  }),
});

const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    term: z.string(),
    category: z.string(),
    publishDate: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  guides: guidesCollection,
  glossary: glossaryCollection,
};
