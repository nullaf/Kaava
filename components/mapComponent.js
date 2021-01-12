import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import Locate from "leaflet.locatecontrol";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import React, { useEffect, useState } from "react";
import corsUrl from "../lib/corsUrl";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import CorsUrl from "../lib/corsUrl";
import CanPopup from "./canPopup";
import { iconAddCan } from "../lib/iconAddCan";

const MapComponent = ({ addingState }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { data, error, mutate } = useSWR(
    corsUrl + "https://kaavabackend.herokuapp.com/mamaKaplari",
    fetcher
  );

  const AdditionalControls = () => {
    const map = useMap();

    const search = new GeoSearchControl({
      style: "bar",
      provider: new OpenStreetMapProvider(),
      animateZoom: true,
      zoomLevel: 15,
      autoClose: true,
    });

    const locateOptions = {
      position: "topleft",
      strings: {
        title: "Locate Me",
      },
      flyTo: true,
      drawCircle: false,
      showPopup: false,
      initialZoomLevel: 15,
      onActivate: () => {},
    };
    if (isFirstLoad) {
      const lc = new Locate(locateOptions);
      lc.addTo(map);
      map.addControl(search);
    }

    setIsFirstLoad(false);

    return null;
  };

  const [newCans, setNewCans] = useState([]);
  const addCan = (e) => {
    const { lng, lat } = e.latlng;
    const curDate = new Date();
    setNewCans([...newCans, [lat, lng, curDate]]);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        longitude: lat,
        latitude: lng,
        fillingTime: curDate,
      }),
    };
    fetch(
      CorsUrl + "https://kaavabackend.herokuapp.com/mamaKaplari",
      requestOptions
    ).then((response) => {
      response.json();
    });
  };
  const AddCanOnClick = () => {
    const [pos, setPos] = useState(null);
    if (addingState) {
      const map = useMapEvents({
        click(e) {
          setPos(e.latlng);
          if (window.confirm("Are you sure you want to add can here?")) {
            addCan(e);
          } else {
            setPos(null);
          }
        },
      });
    }
    return null;
  };

  return (
    <MapContainer
      center={[41.0082, 28.9784]}
      zoom={11}
      minZoom={4}
      scrollWheelZoom={true}
      style={{ height: "88vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />

      <AddCanOnClick />
      <AdditionalControls />

      {data?.map((can) => {
        return (
          <ThemeProvider theme={theme} key={can.id}>
            <div>
              <CanPopup can={can} />
            </div>
          </ThemeProvider>
        );
      })}
      {newCans?.map((can, i) => {
        return (
          <ThemeProvider theme={theme} key={i}>
            <div>
              <Marker position={[can[0], can[1]]} icon={iconAddCan} />
            </div>
          </ThemeProvider>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
