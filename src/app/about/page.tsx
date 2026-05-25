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

              Scythe Mio (born Aidan Heichelbech), is a 20 year old artist known for making a variety of styles of hip-hop, including hard-hitting, massive production, emotional vocals, tied in with dark, moody, yet vibrant tones in his music. 
              <br/><br/>
              Aidan is from the Greater Cincinnati area, where he started making music in 2020. Since then, he has gone on to improve upon and invent his own sound that is still unique and inspires others to this day. 

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