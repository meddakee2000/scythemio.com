import { useEffect, RefObject } from 'react';

export const useVideoTimeSync = (
  videoRef: RefObject<HTMLVideoElement | null>,
  storageKey: string,
  onReady: () => void
) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const savedTime = localStorage.getItem(storageKey);
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    } else {
      onReady();
    }

    const handleTimeUpdate = () => {
      localStorage.setItem(storageKey, video.currentTime.toString());
    };

    const handleBeforeUnload = () => {
      localStorage.setItem(storageKey, video.currentTime.toString());
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [videoRef, storageKey, onReady]);
};