import Head from "next/head";
import styles from "../styles/Home.module.css";
import Homepage from "../components/homepage";
import { motion } from "framer-motion";
import ParticleBackground from "../components/particleBackground";

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
        <title>Kaava</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ParticleBackground
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: -10,
          top: 0,
          left: 0,
        }}
      />

      <Homepage />
    </motion.div>
  );
}
export default Home;
