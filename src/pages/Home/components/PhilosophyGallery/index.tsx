import type { PhilosophyGalleryProps } from './types';
import styles from './styles.module.css';

const PhilosophyGallery = ({ images }: PhilosophyGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.galleryGrid}>
      {images.map(img => (
        <div key={img.key} className={styles.gridItem}>
          <img src={img.src} alt={img.alt || 'Kassaman gallery photo'} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default PhilosophyGallery;
