import styles from "../styles/Map.module.css";
import Mapnav from "../components/mapnav";
import Head from "next/head";
import { useState } from "react";
import "../node_modules/leaflet-geosearch/dist/geosearch.css";
import MapContainer from "../components/mapContainer";

const Map = () => {
  const [addingState, setAddingState] = useState(false);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"
        />
        <script src="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol/dist/L.Control.Locate.min.css"
        />
        <title>Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Mapnav setAddingState={setAddingState} addingState={addingState} />
        <MapContainer addingState={addingState} />
      </div>
    </div>
  );
};

export default Map;
