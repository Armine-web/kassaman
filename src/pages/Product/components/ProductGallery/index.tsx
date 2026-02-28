import { useState } from 'react';
import { Image } from 'antd';
import { getProductText } from '../../../../i18n/utils/product';
import type { Props } from './types';
import styles from './styles.module.css';
import useScrollReveal from '../../../../hooks/useScrollReveal';

export const ProductGallery = ({ images, nameKey }: Props) => {
  useScrollReveal();
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryLayout}>
        <div className={`${styles.thumbnails} scrollReveal`}>
          {images.slice(0, 3).map(img => (
            <div key={img} className={`${styles.thumbItem} scrollReveal`}>
              <Image
                src={img}
                preview={false}
                onClick={() => setActiveImage(img)}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        <div className={`${styles.mainImage} scrollReveal`}>
          <Image src={activeImage} alt={getProductText(nameKey, 'name')} className={styles.image} />
        </div>
      </div>
    </div>
  );
};
