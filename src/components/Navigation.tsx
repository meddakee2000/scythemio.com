'use client';

import openToURL from '@/logic/openToURL';
import redirectToPage from '@/logic/redirectToPage';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  return (

    <div className = {styles.container}>

      {'>'}
      
      <div onClick = {() => {redirectToPage('')}}>
        HOME
      </div>

      <div onClick = {() => {redirectToPage('music')}}>
        MUSIC
      </div>

      <div onClick = {() => {redirectToPage('shows')}}>
        SHOWS
      </div>

      <div onClick = {() => {redirectToPage('about')}}>
        ABOUT
      </div>

      <div onClick = {() => {openToURL('https://ffm.bio/scythemio')}}>
        LINKS
      </div>

      {'<'}

    </div>

  )
}

export default Navigation;