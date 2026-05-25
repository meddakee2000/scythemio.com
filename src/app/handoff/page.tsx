import data from '@/songData.json'
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • HANDOFF'
};

interface handoffProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({searchParams}: handoffProps) => {

  const resolvedParams = await searchParams;
  const nameParam = Array.isArray(resolvedParams.name)
    ? resolvedParams.name[0]
    : resolvedParams.name;

  const lookupKey = nameParam?.toLowerCase().replace(/\s+/g, '') || '';

  const songListObject = data.songs[0];
  const track = songListObject[lookupKey as keyof typeof songListObject] as any;

  return (

    <div className = {styles.container}>

      <span style = {{fontSize: 20, marginBottom: 15}}>
        Listen on all platforms
      </span>

      <img src = {`/albums/${lookupKey}.jpg`} className = {styles.album}/>

      <span style = {{fontSize: 40, fontWeight: 'bold'}}>
        "{track.name}"
      </span>

      <span style = {{fontSize: 20, opacity: '75%', paddingTop: 10}}>
        Release Date: {track.date}
      </span>

      <div className = {styles.iconContainer}>

        {track.spotifyURL && (
          <a href = {track.spotifyURL}>
            <img
              src = '/icons/spotify.svg'
              className = {styles.icon}
            />
          </a>
        )}

        {track.applemusicURL && (
          <a href = {track.applemusicURL}>
            <img
              src = '/icons/applemusic.svg'
              className = {styles.icon}
            />
          </a>
        )}

        {track.soundcloudURL && (
          <a href = {track.soundcloudURL}>
            <img
              src = '/icons/soundcloud.svg'
              className = {styles.icon}
            />
          </a>
        )}

        {track.youtubeURL && (
          <a href = {track.youtubeURL}>
            <img
              src = '/icons/youtube.svg'
              className = {styles.icon}
            />
          </a>
        )}

      </div>

    </div>

  )

}

export default Page;