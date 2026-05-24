"use client";

import styles from '@/styles/Album.module.css';

import platformHandoff from "@/logic/platformHandoff";

interface AlbumProps {
  name: string
  width: number
}

const Album = ({name, width}: AlbumProps) => {
  return (

    <img
      src = {`/albums/${name}.jpg`}
      width = {width}
      className = {styles.album}
      onClick = {() => platformHandoff(name)}
    />

  )
}

export default Album;