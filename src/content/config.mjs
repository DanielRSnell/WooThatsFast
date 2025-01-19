import { defineCollection } from 'astro:content';
import { blogSchema } from './schemas/blog';
import { pagesSchema } from './schemas/pages';
import { ctaSchema } from './schemas/cta';

export const collections = {
  'pages': defineCollection({ schema: pagesSchema }),
  'blog': defineCollection({ schema: blogSchema }),
  'cta': defineCollection({ schema: ctaSchema })
};
