import { MOCK_PRODUCTS } from './mockProducts';
import type { BlogPost, SocialItem } from '../types/blog';

export const mockBlogPosts: BlogPost[] = MOCK_PRODUCTS.slice(0, 40).map((product, index) => ({
  id: product.id,
  slug: product.nameKey.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  titleKey: `products.${product.nameKey}.name`,
  previewKey: `products.${product.nameKey}.description`,
  contentKey: `products.${product.nameKey}.description`,
  category: 'StyleGuide',
  date: `2026-03-${15 - index}`,
  coverImage: product.images[0],
  relatedIds: [],
  author: 'Kassaman Armenia',
  isNew: index < 2,
  readingTime: 4 + (index % 6),
}));

export const mockSocialPosts: SocialItem[] = [
  {
    id: 'kassaman_video_1',
    type: 'video',
    videoUrl:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_mp4,q_auto/v1773515586/SaveClip.App_AQM2ElNtzBTsUa3RZFC4gyvWV-qGnOForkbBTpLPe0qG9IBf98-zwY2BM17-rM92E7M2n7BPNyciGAqHHCJZft1Jn09RpjqMM1kKIYA_hfbacr.mp4',

    thumbnail:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_auto,q_auto,so_0/v1773515586/SaveClip.App_AQM2ElNtzBTsUa3RZFC4gyvWV-qGnOForkbBTpLPe0qG9IBf98-zwY2BM17-rM92E7M2n7BPNyciGAqHHCJZft1Jn09RpjqMM1kKIYA_hfbacr.jpg',

    instagramLink: 'https://www.instagram.com/kassaman_armenia/',
  },

  {
    id: 'kassaman_video_2',
    type: 'video',
    videoUrl:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_mp4,q_auto/v1773515026/SaveClip.App_AQM2TonFllkqqXm1Rfg_fI81Q4ojOpovaYJi1Hc62H5kBVHfiGZHLqZe1h-WbfIefp9Xf2GbAWWIVqJz5oJ03iBb_q277up.mp4',
    thumbnail:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_auto,q_auto,so_0/v1773515026/SaveClip.App_AQM2TonFllkqqXm1Rfg_fI81Q4ojOpovaYJi1Hc62H5kBVHfiGZHLqZe1h-WbfIefp9Xf2GbAWWIVqJz5oJ03iBb_q277up.jpg',
    instagramLink: 'https://www.instagram.com/kassaman_armenia/',
  },
  {
    id: 'kassaman_video_3',
    type: 'video',
    videoUrl:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_mp4,q_auto/v1773515303/SaveClip.App_AQOmEVkHC5Qu1LsF3ECGYTFKWK4F_1iYHQaoa7MUBcWmpEz3yw2ASGTVmoWHMdNJWH46Wg4DeM-fR53u9y7LcXUiP4XfddfufIhkdOY_new1b6.mp4',
    thumbnail:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_auto,q_auto,so_0/v1773515303/SaveClip.App_AQOmEVkHC5Qu1LsF3ECGYTFKWK4F_1iYHQaoa7MUBcWmpEz3yw2ASGTVmoWHMdNJWH46Wg4DeM-fR53u9y7LcXUiP4XfddfufIhkdOY_new1b6.jpg',
    instagramLink: 'https://www.instagram.com/kassaman_armenia/',
  },
  {
    id: 'kassaman_video_4',
    type: 'video',
    videoUrl:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_mp4,q_auto/v1773515714/SaveClip.App_AQMepa7SqkMExozTZ_Gi9SKRjXQI4owejwM6bJWP-re4DvLoaH-3C8jgJvIPhrUz9BZagrhYgd7jqNWblaNGBJoPHjqlIwzXo6wW4Gg_gejflu.mp4',
    thumbnail:
      'https://res.cloudinary.com/df1zafgxg/video/upload/f_auto,q_auto,so_0/v1773515714/SaveClip.App_AQMepa7SqkMExozTZ_Gi9SKRjXQI4owejwM6bJWP-re4DvLoaH-3C8jgJvIPhrUz9BZagrhYgd7jqNWblaNGBJoPHjqlIwzXo6wW4Gg_gejflu.jpg',
    instagramLink: 'https://www.instagram.com/kassaman_studio/',
  },
];
