import { Carousel, Grid } from 'antd';
import type { SliderBannerProps } from './types';
import BaseBanner from '../BaseBanner';
import { AUTOPLAY_SPEED, BANNER_IMAGES, CAROUSEL_EFFECT, CAROUSEL_SPEED } from './const';

const SliderBanner = ({ banners }: SliderBannerProps) => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Carousel
      autoplay={!isMobile}
      autoplaySpeed={AUTOPLAY_SPEED}
      speed={CAROUSEL_SPEED}
      effect={CAROUSEL_EFFECT}
    >
      {banners.map(banner => (
        <BaseBanner key={banner.id} {...banner} image={BANNER_IMAGES[banner.image]} />
      ))}
    </Carousel>
  );
};

export default SliderBanner;
