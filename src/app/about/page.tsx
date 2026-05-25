import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • ABOUT'
}

const Page = () => {
  return (
    <>

      <div className = {styles.container}>

        <img className = {styles.img} src = '/assets/Picture.jpeg'/>

        <div className = {styles.textContainer}>

          <div className = {styles.text}>

            <span style = {{fontSize: 40, fontWeight: 'bold'}}>
              AIDAN HEICHELBECH
            </span>

            <span style = {{fontSize: 20, paddingTop: 5}}>

              Scythe Mio is an emerging independent music artist known for blending emotional melodies with modern underground hip-hop and alternative sounds. Their music features atmospheric production, introspective lyrics, and collaborations with artists like 7EVEN and Pierce Santana.
              <br/><br/>
              Scythe Mio has built a growing online presence through streaming platforms, releasing tracks such as “CHRISTIAN DIOR,” “out of my mind,” and “I DON’T LOSE.” Their moody, melodic style appeals to fans of underground internet rap and experimental trap music.

            </span>

          </div>

          <span style = {{opacity: '50%'}}>
            Photo by @meddakee2000
          </span>

        </div>

      </div>
    
    </>
  )
}

export default Page;