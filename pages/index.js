import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Candy Party Bus | Wolf Charters</title>
        <meta
          name="description"
          content="Wolf charters has moved. We are now Candy Party Bus Hire."
        />
        <link rel="icon" href="favicon/favicon.ico"/>
        <link rel="icon" type="image/png" href="favicon/favicon-16x16.png"/>
        <link rel="icon" type="image/png" href="favicon/favicon-32x32.png"/>
        <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main className={styles.main}>
        <a href="https://candypartybus.com/" rel="noopener" target="_blank">
          <Image
            className={styles.image}
            src="/candy-logo-bus.png"
            alt="Candy Party Bus Logo"
            width={400}
            height={300}
          />
        </a>
        <h1 className={styles.title}>
          Wolf charters is under new management. <br/> We are now <br/>
          <a href="https://candypartybus.com/" rel="noopener" target="_blank">
            Candy Party Bus
          </a>
        </h1>

        <a href="https://candypartybus.com/" rel="noopener" target="_blank">
          <div className={styles.box3}>
            <div className={styles.btnThree}>
              <span>VISIT NOW</span>
            </div>
          </div>
        </a>

        <p className={styles.description}>
          Hey there, party animals!
          <br/>
          <br/>
          We've got some seriously sweet news to share with you! Brace
          yourselves for the most epic merger in transportation history. Wolf
          Charters and Candy Party Bus have joined forces to create the ultimate
          party powerhouse! 🎉🚌
          <br/>
          <br/>
          Picture this: the sleek and stylish rides from Wolf Charters colliding
          with the funky and vibrant vibes of Candy Party Bus. It's a match made
          in party heaven! From now on, our rides will be off the charts cool,
          with the sassiest drivers, the most mind-blowing sound systems, and
          oh-so-instagrammable interiors.
          <br/>
          <br/>
          Get ready to party like never before because the streets are about to
          become our candy-coated playground!
          <br/>
          <br/>
          It's time to buckle up, grab your friends, and let the good times
          roll! 🎈🐺🍭
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://candypartybus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/candy-logo-bus.png"
              alt="Candy Party Bus Logo"
              width={80}
              height={70}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
