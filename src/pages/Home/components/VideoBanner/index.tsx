import { useEffect, useRef } from 'react';
import { videoBanner } from '../../../../assets/img/home';
import styles from './styles.module.css';

const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className={styles.videoBanner}>
      <video
      className={styles.videoElement}
        ref={videoRef}
        src={videoBanner}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoBanner;
