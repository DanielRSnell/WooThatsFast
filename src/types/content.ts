import type { z } from 'astro:content';
import type { blogSchema } from '../content/schemas/blog';
import type { pagesSchema } from '../content/schemas/pages';
import type { ctaSchema } from '../content/schemas/cta';

export type BlogPost = z.infer<typeof blogSchema>;
export type Page = z.infer<typeof pagesSchema>;
export type CTA = z.infer<typeof ctaSchema>;

// Shared types
export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterCard?: string;
}

export interface MenuItem {
  title: string;
  href: string;
  children?: MenuItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}
