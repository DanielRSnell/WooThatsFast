import { z } from 'astro:content';

export const ctaSchema = z.object({
  title: z.string(),
  description: z.string(),
  buttonText: z.string(),
  buttonUrl: z.string(),
  bgColor: z.enum(['primary', 'secondary', 'dark', 'light']),
  textColor: z.enum(['white', 'black', 'gray']),
  size: z.enum(['small', 'medium', 'large']),
  icon: z.string().optional(),
  
  // Additional CTA fields
  secondaryButton: z.object({
    text: z.string(),
    url: z.string(),
    style: z.enum(['outline', 'text', 'solid'])
  }).optional(),
  
  // Image or video
  media: z.object({
    type: z.enum(['image', 'video']),
    url: z.string(),
    alt: z.string().optional()
  }).optional(),
  
  // Custom styles
  customStyles: z.object({
    container: z.string(),
    button: z.string(),
    text: z.string()
  }).optional()
});
