import { Rubik_80s_Fade } from 'next/font/google';
import styles from '../styles/GlitchText.module.css';

const Font = Rubik_80s_Fade({
  subsets: ['latin'],
  weight: ['400']
})

interface GlitchTextProps {
  text: string,
  fontSize: number
}

const GlitchText = ({text, fontSize}: GlitchTextProps) => {
  return (

    <div className = {styles.Wrapper}>

      <div 
        className = {`${styles.Text} ${Font.className}`}
        data-glitch = {text}
        style = {{fontSize: fontSize}}
      >{text}</div>

    </div>

  )
}

export default GlitchText;