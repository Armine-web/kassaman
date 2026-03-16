import type { BlogPost } from "../../types/blog";

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString()
}

export function setPageSEO(title: string, description?: string): void {
  document.title = title
  if (description) {
    const meta: HTMLMetaElement | null = document.querySelector("meta[name='description']")
    if (meta) meta.content = description
  }
}

export function getRelatedPosts(allPosts: BlogPost[], currentSlug: string): BlogPost[] {
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, 3)
}