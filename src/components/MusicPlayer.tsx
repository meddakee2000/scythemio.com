"use client";

import { useState, useEffect } from "react";
import styles from '@/styles/MusicPlayer.module.css';
import { audioController } from "@/logic/audioController";

interface MusicPlayerProps {
  src: string;
}

export default function MusicPlayer({ src }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioController.init(src);
    setIsPlaying(audioController.getPlayingStatus());

    const unsubscribe = audioController.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      unsubscribe();
    };
  }, [src]);

  return (

    <img
      className = {styles.toggle}
      onClick = {() => audioController.toggle()}
      src = {isPlaying ? '/icons/playing.svg' : '/icons/paused.svg'}
    />

  );
}