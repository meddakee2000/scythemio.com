import type { Metadata } from 'next';
import styles from '@/styles/About.module.css';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • ABOUT'
}

const Page = () => {
  return (
    <>

      <div className = {styles.container}>

        <img className = {styles.img} src = '/Picture.jpeg'/>

        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

          <div style = {{display: 'flex', flexDirection: 'column'}}>

            <span style = {{fontSize: 40, fontWeight: 'bold'}}>
              ADIAN HEICHELBECH (20)
            </span>

            <span style = {{paddingTop: 10, width: 500, fontSize: 20}}>

              Forged in the dirt of the digital underground, SCYTHE MIO rips through the noise with a blunt-force fusion of industrial techno, drift phonk, and abrasive glitch-hop. The project trades clean arrangements for blown-out cyber-punk textures, jagged distortion, and menacing synth baselines.
              <br/><br/>
              At its core, this sound operates in the heavy, unrefined spaces of dark club music and experimental production. It is a sharp, high-octane collision of breakcore rhythms and digital hardcore intensity.
              <br/><br/>
              Stream SCYTHE MIO on all platforms.

            </span>

          </div>

          <span style = {{opacity: 0.5, fontSize: 15}}>
            Picture by @meddakee2000
          </span>
        
        </div>

      </div>
    
    </>
  )
}

export default Page;