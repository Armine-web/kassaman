import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import type { CarouselProps } from './types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.css';

const Carousel = ({ children, className }: CarouselProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        // pagination={{ clickable: true }}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className={`${styles.mySwiper} ${className ?? ''}`}
      >
        {children}
      </Swiper>
    </>
  );
};
export default Carousel;
