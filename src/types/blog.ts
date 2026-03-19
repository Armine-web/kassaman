export type BlogPost = {
  id: string;
  slug: string;
  titleKey: string;
  previewKey: string;
  contentKey: string;
  date: string;
  coverImage: string;
  relatedIds?: string[];
  category?: string;

  author?: string;
  isNew?: boolean;
  readingTime?: number;
};

export type SocialItem = {
  id: string;
  type: 'image' | 'video' | 'story';
  thumbnail: string;
  videoUrl?: string;
  instagramLink: string;
  caption?: string;
};
