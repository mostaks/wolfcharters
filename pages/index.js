import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Candy Party Bus | Wolf Charters</title>
        <meta name="description" content="Wolf charters has moved. We are now Candy Party Bus Hire."
        />
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <a href="https://candypartybus.com/" rel="noopener" target="_blank">
        <Image className={styles.image} src="/candy-logo-bus.png" alt="Candy Party Bus Logo" width={400} height={300} />
        </a>
        <h1 className={styles.title}>
          Wolf charters has moved. <br /> We are now <br/> 
          <a href="https://candypartybus.com/" rel="noopener" target="_blank">Candy Party Bus</a>
        </h1>

        <p className={styles.description}>
          Dear valued customers,
          <br /><br />
          We are excited to announce that Wolf Charters has merged with Candy Party Bus! As a result of this merge, our services and website have moved to the Candy Party Bus website.
          <br /><br />
          We are committed to providing you with the best transportation service possible and this merge allows us to do just that. Our team is always looking for ways to improve and progress, and we believe that this move is a step in the right direction.
          <br /><br />
          We apologize for any inconvenience this may cause, but rest assured that our services and commitment to excellence will not be affected. We thank you for your continued support and look forward to serving you on your next transportation adventure.
          <br /><br />
          Sincerely,
          <br /><br />
          The Candy Party Bus Team
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://candypartybus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/candy-logo-bus.png" alt="Candy Party Bus Logo" width={80} height={70} />
          </span>
        </a>
      </footer>
    </div>
  )
}
