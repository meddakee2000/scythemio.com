"use client";

import openToURL from '@/logic/openToURL';
import styles from '@/styles/ShowLink.module.css';

interface LinkProps {
  name: string,
  date: string,
  url: string,
  venue: string,
  address: string,
  soldOut?: boolean
}

const ShowLink = ({name, date, url, venue, address, soldOut}: LinkProps) => {
  return (

    <div className = {styles.container}>

      <div>

        <div>
          {venue}
        </div>

        <div style = {{fontSize: 30, fontWeight: 'bold'}}>
          {name}
        </div>

        <div>
          {address}
        </div>
        <div>
          {date}
        </div>


      </div>

      {(() => {
        if (soldOut) {
          return <img className = {styles.soldOut} src = '/icons/busy.svg' width = {40}/>
        } else {
          return <img onClick = {() => openToURL(url)} className = {styles.ticket} src = '/icons/ticket.svg' width = {40}/>;
        }
      })()}

    </div>

  )
}

export default ShowLink;