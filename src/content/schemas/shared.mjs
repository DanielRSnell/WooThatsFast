import { z } from 'astro:content';

export const benefitSchema = z.object({
  title: z.string(),
  description: z.string()
});

export const processSchema = z.object({
  step: z.string(),
  title: z.string(),
  description: z.string()
});

export const featureSchema = z.object({
  title: z.string(),
  description: z.string()
});

export const serviceSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  features: z.array(z.string()),
  price: z.string().optional()
});

export const stepSchema = z.object({
  day: z.string(),
  title: z.string(),
  description: z.string()
});

export const targetSchema = z.object({
  item: z.string()
});

export const useCaseSchema = z.object({
  title: z.string(),
  description: z.string()
});

export const expertiseSchema = z.object({
  title: z.string(),
  items: z.array(z.string())
});

export const principleSchema = z.object({
  title: z.string(),
  description: z.string()
});

export const toolSchema = z.object({
  name: z.string(),
  description: z.string(),
  features: z.array(z.string())
});

export const toolCategorySchema = z.object({
  title: z.string(),
  description: z.string(),
  tools: z.array(toolSchema)
});

export const calendarOptionsSchema = z.object({
  title: z.string(),
  url: z.string(),
  theme: z.object({
    brandColor: z.string()
  }).optional()
});
