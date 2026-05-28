"use client";

import openToURL from "@/logic/openToURL";
import { useRouter } from 'next/navigation';
import redirectToPage from "@/logic/redirectToPage";
import styles from '@/styles/Navigation.module.css';

const Navigation = () => {

  const router = useRouter();

  return (

    <div className = {styles.container}>

      {'>'}

      <div onClick = {() => redirectToPage('', router)}>
        HOME
      </div>

      <div onClick = {() => redirectToPage('music', router)}>
        MUSIC
      </div>

      <div onClick = {() => redirectToPage('shows', router)}>
        SHOWS
      </div>

      <div onClick = {() => redirectToPage('about', router)}>
        ABOUT
      </div>

      <div onClick = {() => openToURL('https://elasticstage.com/scythemio/')}>
        STORE
      </div>

      <div onClick = {() => openToURL('https://ffm.bio/scythemio')}>
        LINKS
      </div>

      {'<'}

    </div>

  )

}

export default Navigation;