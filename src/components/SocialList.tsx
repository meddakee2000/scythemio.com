"use client";

import openToURL from '@/logic/openToURL';
import styles from '../styles/SocialList.module.css';

const SocialList = () => {

  const iconWidth = 35;

  return (
    <>
    
      <div className = {styles.container}>


        <img
          width = {iconWidth}
          className = {styles.img}
          src = '/icons/youtube.svg'
          onClick = {() => {openToURL('https://www.youtube.com/@ScytheMio')}}
        />

        <img
          width = {iconWidth}
          className = {styles.img}
          src = '/icons/spotify.svg'
          onClick = {() => {openToURL('https://open.spotify.com/artist/2rs4c6Kfoki84j1WdJici5')}}
        />

        <img
          width = {iconWidth}
          className = {styles.img}
          src = '/icons/soundcloud.svg'
          onClick = {() => {openToURL('https://soundcloud.com/scythe-mio')}}
        />

        <img
          width = {iconWidth}
          className = {styles.img}
          src = '/icons/applemusic.svg'
          onClick = {() => {openToURL('https://music.apple.com/us/artist/scythe-mio/1531256748')}}
        />

        <img
          width = {iconWidth}
          className = {styles.img}
          src = '/icons/instagram.svg'
          onClick = {() => {openToURL('https://www.instagram.com/scythemio')}}
        />

      </div>
  
    </>
  )
}

export default SocialList;