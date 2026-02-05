export type GalleryImage = {
  src: string;
  key: string;
  alt?: string;
};

export type PhilosophyGalleryProps = {
  images: GalleryImage[];
};
