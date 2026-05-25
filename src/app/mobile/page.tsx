import data from '@/metadata.json';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • MOBILE'
}

const Page = () => {
  return (
    <>

      <div className = {styles.container}>
        <img src = '/icons/question.svg' width = {75}/>
        <span style = {{fontSize: 40, fontWeight: 'bold'}}>
          Wait!
        </span>
        <span style = {{fontSize: 20, width: '90vw'}}>
          Compatibility for mobile devices is still being developed. Come back later and it might be here.
        </span>
        <span style = {{opacity: '60%'}}>
          {data.version}
        </span>
      </div>

    </>
  )
}

export default Page;