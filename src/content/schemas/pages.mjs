import { z } from 'astro:content';
import {
  benefitSchema,
  processSchema,
  featureSchema,
  serviceSchema,
  stepSchema,
  targetSchema,
  useCaseSchema,
  expertiseSchema,
  principleSchema,
  toolCategorySchema,
  calendarOptionsSchema,
  faqSchema
} from './shared';

export const pagesSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  
  benefits: z.array(benefitSchema).optional(),
  process: z.array(processSchema).optional(),
  features: z.array(featureSchema).optional(),
  services: z.array(serviceSchema).optional(),
  steps: z.array(stepSchema).optional(),
  target: z.array(targetSchema).optional(),
  useCases: z.array(useCaseSchema).optional(),
  expertise: z.array(expertiseSchema).optional(),
  principles: z.array(principleSchema).optional(),
  faq: z.array(faqSchema).optional(),
  toolCategories: z.array(toolCategorySchema).optional(),
  quote: z.string().optional(),
  whatToExpect: z.array(z.string()).optional(),
  calendarOptions: calendarOptionsSchema.optional()
});
