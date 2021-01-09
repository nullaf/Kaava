import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "./particleBackground";

const Homepage = () => {
  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
        style={{ padding: "10px" }}
        whileTap={{ scale: 0.9 }}
      >
        Welcome to <a>Kaava</a>!
      </motion.h1>

      <div className={styles.cardwithsvg}>
        <Link href="/map">
          <motion.img
            src="./svgs/SvgMap.svg"
            style={{ marginBottom: "2%" }}
            width="640"
            height="360"
            alt="Image of map with markers on it."
            whileHover={{ scale: 0.95, rotate: -1 }}
            whileTap={{ scale: 0.85, rotate: -10 }}
            animate={{
              rotate: [10, 0],
              transition: { duration: 0.3 },
            }}
          />
        </Link>

        <Link href="/map">
          <motion.a
            className={styles.card}
            whileTap={{ scale: 0.85 }}
            href="/map"
          >
            <h2>&larr; Map</h2>
          </motion.a>
        </Link>
        <Link href="/forum">
          <motion.a
            className={styles.card}
            whileTap={{ scale: 0.85 }}
            href="/forum"
          >
            <h2 className="forumCard">Forum &rarr;</h2>
          </motion.a>
        </Link>
        <Link href="/forum">
          <motion.img
            src="./svgs/SvgSocial.svg"
            style={{ marginBottom: "0%" }}
            width="640"
            height="360"
            alt="Image of social media and animals."
            whileHover={{ scale: 0.95, rotate: 1 }}
            whileTap={{ scale: 0.85, rotate: 10 }}
            animate={{
              rotate: [-10, 0],
              transition: { duration: 0.3 },
            }}
          />
        </Link>
      </div>
    </main>
  );
};
export default Homepage;
