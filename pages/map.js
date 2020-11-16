import styles from "../styles/Map.module.css";
import Mapnav from "../components/mapnav";
import Head from "next/head";

function Map() {
  return (
    <div>
      <Head>
        <title>Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mapnav />
      <div className={styles.container}></div>
    </div>
  );
}

export default Map;
