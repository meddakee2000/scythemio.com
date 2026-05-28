import type { Metadata } from 'next';
import styles from './page.module.css';
import Album from '@/components/Album';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • MUSIC'
}

const Page = () => {
  return (
    <>
    
      <div className = {styles.container}>

        <Album name = 'painpills' width = {150}/>

        <div className = {styles.text}>
          <span style = {{fontSize: 35, fontWeight: 'bold'}}>
            NEW RELEASE: "PAIN PILLS"
          </span>
          <span style = {{fontSize: 20}}>
            Release Date: May 26th, 2026
          </span>
          <span style = {{opacity: '50%', paddingTop: 5}}>
            Streaming on all platforms.
          </span>
        </div>

      </div>

      <p className = {styles.title}>
        RECENT RELEASES
      </p>
      
      <div style = {{display: 'flex', justifyContent: 'space-between', gap: 20}}>

        <Album name = 'dreaming' width = {150}/>
        <Album name = 'loud' width = {150}/>
        <Album name = 'iwishiknew' width = {150}/>
        <Album name = 'babygottaask' width = {150}/>
        <Album name = 'whatyouneed' width = {150}/>

      </div>
      
      <div style = {{display: 'flex', justifyContent: 'space-between', paddingTop: 20, gap: 20}}>

        <Album name = 'outofmymind' width = {150}/>
        <Album name = 'throwaways' width = {150}/>
        <Album name = '5am' width = {150}/>
        <Album name = 'distractions' width = {150}/>
        <Album name = 'rise' width = {150}/>

      </div>
    
    </>
  )
}

export default Page;