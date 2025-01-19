export interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  image?: string;
  category: string;
  featured: boolean;
  draft: boolean;
  
  nextPost?: string;
  nextPostTitle?: string;
  nextPostDescription?: string;
  
  tags?: string[];
  readingTime?: number;
  excerpt?: string;
  
  coverImage?: {
    src: string;
    alt: string;
  };
  
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface NextArticle {
  nextPost: string;
  nextPostTitle: string;
  nextPostDescription?: string;
}
