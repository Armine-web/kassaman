import { mockBlogPosts, mockSocialPosts } from '../mock/mockBlog';
import type { BlogPost, SocialItem } from '../types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockBlogPosts);
    }, 500);
  });
}

export async function getSocialPosts(): Promise<SocialItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockSocialPosts);
    }, 300); 
  });
}