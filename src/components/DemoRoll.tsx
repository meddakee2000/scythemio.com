"use client";

import { useRef, useState } from 'react';
import { useVideoTimeSync } from '@/logic/useVideoTimeSync';
import styles from '../styles/DemoRoll.module.css';

const DemoReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const STORAGE_KEY = 'demo_reel_playback_time';

  useVideoTimeSync(videoRef, STORAGE_KEY, () => setIsReady(true));

  const handleSeeked = () => {
    setIsReady(true);
  };

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src={'/DemoReel.mp4'}
        onSeeked={handleSeeked}
        className={styles.content}
        style={{ 
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.15s ease-in-out'
        }}
      />
    </div>
  );
};

export default DemoReel;