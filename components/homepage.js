import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

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
            style={{ marginBottom: "1.5%" }}
            whileHover={{ scale: 0.95, rotate: -1 }}
            whileTap={{ scale: 0.85, rotate: -10 }}
            animate={{
              rotate: [10, 0],
              transition: { duration: 0.3 },
            }}
          />
        </Link>

        <Link href="/map">
          <motion.a className={styles.card} whileTap={{ scale: 0.85 }}>
            <h3>&larr; Map</h3>

          </motion.a>
        </Link>
        <Link href="/forum">
          <motion.a className={styles.card} whileTap={{ scale: 0.85 }}>
            <h3 className="forumCard">Forum &rarr;</h3>
          </motion.a>
        </Link>
        <Link href="/forum">
          <motion.img
            src="./svgs/SvgSocial.svg"
            style={{ marginBottom: "0%" }}
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
