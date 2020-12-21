import styles from "../styles/Map.module.css";
import Mapnav from "../components/mapnav";
import Head from "next/head";
import {useMemo} from 'react';
import dynamic from 'next/dynamic'


const Map = () => {
    const MapComponent = useMemo(() => dynamic(
        () => import('../components/mapComponent'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false // This line is important. It's what prevents server-side render
        }
    ), [/* list variables which should trigger a re-render here */])
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                      crossOrigin=""/>
                <title>Map</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Mapnav/>
            <div className={styles.container}>
                <MapComponent/>

            </div>

        </div>
    );
}

export default Map;
