import type { Metadata } from 'next';
import GlitchText from '@/components/GlitchText';
import SocialList from '@/components/SocialList';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • HOME'
}

const Page = () => {
  return (
    <>

      <div style = {{display: 'flex', flexDirection: 'column', gap: '15px'}}>

        <GlitchText text = {'"DREAMING" STREAMING NOW'} fontSize = {20}/>

        <GlitchText text = {`{ SCYTHE MIO }`} fontSize = {100}/>

        <div>
          <GlitchText text = {`CINCINNATI, OH`} fontSize = {45}/>
        </div>

        <SocialList/>

      </div>
    
    </>
  )
}

export default Page;