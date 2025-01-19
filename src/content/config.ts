import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    nextPost: z.string().optional(),
    nextPostTitle: z.string().optional(),
    nextPostDescription: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
    excerpt: z.string().optional(),
    coverImage: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string())
    }).optional()
  })
});

export const collections = {
  blog
};
