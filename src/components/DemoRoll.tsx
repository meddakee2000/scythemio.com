import styles from '@/styles/DemoRoll.module.css';

const DemoReel = () => {
  return (

    <div className = {styles.container}>
      <video
        autoPlay
        muted
        loop
        playsInline
        src = {'/assets/DemoReel.mp4'}
        className = {styles.content}
      />
    </div>

  )
}

export default DemoReel;