import { useState } from 'react';
import type { PhilosophyGalleryProps } from './types';
import styles from './styles.module.css';

const PhilosophyGallery = ({ images }: PhilosophyGalleryProps) => {
  const [hovered, setHovered] = useState(false);

  if (images.length < 4) return null;

  const firstImage = images[0];
  const secondImage = images[1];
  const thirdImage = images[2];
  const fourthImage = images[3];

  const displaySecond = hovered ? firstImage : secondImage;

  return (
    <div className={`${styles.gallery}`}>
      <div
        className={`${styles.frontImageWrapper} scrollReveal`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img className={`${styles.frontImage}`} src={displaySecond.src} alt={displaySecond.key} />
      </div>

      {[thirdImage, fourthImage].map(img => (
        <div key={img.key} className={`${styles.bottomImgWrapper}`}>
          <img className={`${styles.bottomImg} scrollReveal`} src={img.src} alt={img.key} />
        </div>
      ))}
    </div>
  );
};

export default PhilosophyGallery;
