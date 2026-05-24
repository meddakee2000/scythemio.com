import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • ABOUT'
}

const Page = () => {
  return (
    <>

      <div className = {styles.container}>

        <img className = {styles.img} src = '/Picture.jpeg'/>

        <div className = {styles.textContainer}>

          <div className = {styles.text}>

            <span style = {{fontSize: 40, fontWeight: 'bold'}}>
              AIDAN HEICHELBECH
            </span>

            <span style = {{fontSize: 20, paddingTop: 5}}>

              bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh 

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