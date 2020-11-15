import styles from "../styles/Map.module.css";
import Mapnav from "../components/mapnav";

function Map() {
  return (
    <div>
      <Mapnav />
      <div className={styles.container}></div>
    </div>
  );
}

export default Map;
