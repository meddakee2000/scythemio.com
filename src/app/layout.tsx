import './globals.css';
import data from '@/metadata.json';
import Footer from '@/components/Footer';
import DemoReel from '@/components/DemoRoll';
import { Roboto_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import MusicPlayer from '@/components/MusicPlayer';

interface LayoutProps { 
  children: React.ReactNode
}

const Font = Roboto_Mono({
  subsets: ['latin']
})

const RootLayout = ({children}: LayoutProps) => {

  console.log(`v${data.version}`)

  return (
    
    <html lang = 'en' className = {`${Font.className} flex-centered`}>
      <head>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
      </head>
      <body>

        {children}
        
        <Footer/>
        <DemoReel/>
        <Navigation/>
        <MusicPlayer src = {'/assets/Audio.mp3'}/>

      </body>
    </html>

  )
}

export default RootLayout;