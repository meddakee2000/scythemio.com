"use client";

import data from '@/metadata.json';
import openToURL from '@/logic/openToURL';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
    
      <div className = {styles.container}>

        <span style = {{paddingLeft: 20}} onClick = {() => {openToURL('https://meddaugh.xyz')}}>
          made @ <span>meddaugh.xyz</span> • {data.version}
        </span>

        <span style = {{paddingRight: 20, textAlign: 'right'}} onClick = {() => {openToURL('https://open.spotify.com/album/21t5U0BfTUpmrTc0ey3WjV')}}>
          𝅘𝅥𝅮𝅘𝅥𝅮 - Stream "DREAMING" on Spotify
        </span>

      </div>
    
    </>
  )
}

export default Footer;