import type { Metadata } from 'next';
import styles from './page.module.css';
import ShowLink from '@/components/ShowLink';

export const metadata: Metadata = {
  title: 'SCYTHE MIO • SHOWS'
}

const Page = () => {
  return (
    <>
    
      <div style = {{display: 'flex', gap: 20, flexDirection: 'column'}}>

        <span className = {styles.title}>
          EVENTS
        </span>

        <ShowLink
          name = 'MEMBERS ONLY: Covington'
          date = 'June 19th, 2026 @ 9PM'
          url = 'https://ticketnut.com/buy/6834'
          venue = 'Madison Theater'
          address = '730 Madison Ave Covington, KY 41011'
          soldOut = {false}
        />

        <ShowLink
          name = 'Westside Weekeend Cincinatti'
          date = 'May 9th, 2026 @ 7PM'
          url = ''
          venue = 'Madison Theater'
          address = '730 Madison Ave Covington, KY 41011'
          soldOut = {true}
        />

        <ShowLink
          name = 'Hybrid Moments'
          date = 'Feburary 5th 2026 @ 7PM'
          url = ''
          venue = 'Spiral Groove Records'
          address = '215B Main Street, Milford, Ohio 45150'
          soldOut = {true}
        />

      </div>

    </>
  )
}

export default Page;