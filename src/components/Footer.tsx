"use client";

import data from '@/metadata.json';
import openToURL from '@/logic/openToURL';
import styles from '../styles/Footer.module.css';
import platformHandoff from '@/logic/platformHandoff';

const Footer = () => {
  return (
    <>
    
      <div className = {styles.container}>

        <span style = {{paddingLeft: 20}} onClick = {() => {openToURL('https://meddaugh.xyz')}}>
          made @ <span>meddaugh.xyz</span> • {data.version}
        </span>

        <span style = {{paddingRight: 20, textAlign: 'right'}} onClick = {() => platformHandoff('dreaming')}>
          𝅘𝅥𝅮𝅘𝅥𝅮 - Stream "DREAMING" on all platforms.
        </span>

      </div>
    
    </>
  )
}

export default Footer;