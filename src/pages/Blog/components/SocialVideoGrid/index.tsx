import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SoundOutlined, MutedOutlined } from '@ant-design/icons';
import type { SocialItemProps } from './types';
import styles from './styles.module.css';
import { t } from 'i18next';

export default function SocialVideoGrid({ items }: { items: SocialItemProps[] }) {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.sectionTitle}>{t('Kassaman Posts')}</h3>
        <div className={styles.line} />
      </header>

      <div className={styles.grid}>
        {items.map(item => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

const VideoCard = ({ item }: { item: SocialItemProps }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        console.log('Autoplay waiting for interaction');
      });
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const video = videoRef.current;

    if (video) {
      const nextMutedState = !video.muted;
      video.muted = nextMutedState;

      setIsMuted(nextMutedState);

      if (!nextMutedState) {
        video.play().catch(err => console.log('Audio play blocked:', err));
      }
    }
  };
  return (
    <div className={styles.card}>
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.thumbnail}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
      />

      <button onClick={toggleMute} className={styles.individualMuteBtn} type="button">
        {isMuted ? <MutedOutlined /> : <SoundOutlined />}
      </button>

      <a
        href={item.instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.overlay}
      >
        <span>{t('View on Instagram')}</span>
      </a>
    </div>
  );
};
