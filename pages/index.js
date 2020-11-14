import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";


function Home() {
  return (

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a>Kaava</a>!
          </h1>

          <div className={styles.grid}>
            <Link href="/map">
              <a className={styles.card}>
                <h3>Map &rarr;</h3>
                <p>Nearest animal food containers map</p>
              </a>
            </Link>
            <Link href="/forum">
              <a className={styles.card}>
                <h3>Forum &rarr;</h3>
                <p>Forum for animals in general</p>
              </a>
            </Link>
          </div>
        </main>
      </div>

  );
}
export default Home;
