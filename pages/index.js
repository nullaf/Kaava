import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className={styles.container}
      animate={{
        borderRadius: ["60%", "0%"],
        transition: { duration: 0.3 },
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.h1 className={styles.title} style={{padding: "10px"}} whileTap={{ scale: 0.9 }}>
          Welcome to <a>Kaava</a>!
        </motion.h1>
        <div className={styles.cardwithsvg}>

        <motion.img src="./svgs/SvgMap.svg" style={{marginBottom: "1.5%", left:"0"}} whileHover={{scale: 0.95, rotate: -1}} whileTap={{scale: 0.85, rotate: -10}} animate={{
          rotate: [10, 0],
          transition: { duration: 0.3 },
        }}/>


          <Link href="/map">
            <motion.a className={styles.card} whileTap={{ scale: 0.85 }}>

              <h3>Map &rarr;</h3>


            </motion.a>
          </Link>
          <Link href="/forum">
            <motion.a className={styles.card} whileTap={{ scale: 0.85 }}>
              <h3>Forum &rarr;</h3>

            </motion.a>
          </Link>

        <motion.img src="./svgs/SvgSocial.svg" style={{marginBottom: "0%",right:"0"}} whileHover={{scale: 0.95, rotate: 1}} whileTap={{scale: 0.85, rotate: 10}} animate={{
          rotate: [-10, 0],
          transition: { duration: 0.3 },
        }}/>
        </div>
      </main>
    </motion.div>
  );
}
export default Home;
