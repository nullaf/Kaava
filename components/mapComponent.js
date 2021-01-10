import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import Locate from "leaflet.locatecontrol";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import React, { useEffect, useState } from "react";
import corsUrl from "../lib/corsUrl";
import theme from "./muiThemes/postMuiTheme";
import { iconFood } from "../lib/iconFood";
import Typography from "@material-ui/core/Typography";
import TimeAgo from "react-timeago";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";

const MapComponent = () => {
  const { data, error, mutate } = useSWR(
    corsUrl + "https://kaavabackend.herokuapp.com/mamaKaplari",
    fetcher
  );

  const SearchField = () => {
    const map = useMap();
    const search = new GeoSearchControl({
      style: "bar",
      provider: new OpenStreetMapProvider(),
      animateZoom: true,
      zoomLevel: 15,
      autoClose: true,
    });
    map.addControl(search);

    return null;
  };
  const MapLocate = () => {
    const map = useMap();
    const locateOptions = {
      position: "topleft",
      strings: {
        title: "Locate me",
      },
      flyTo: true,
      drawCircle: false,
      showPopup: false,
      initialZoomLevel: 15,
      onActivate: () => {},
    };
    const lc = new Locate(locateOptions);
    lc.addTo(map);
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

      <SearchField />
      {data?.map((can) => {
        return (
          <ThemeProvider theme={theme} key={can.id}>
            <div>
              <Marker position={[can.longitude, can.latitude]} icon={iconFood}>
                <div>
                  <Popup maxWidth="60vw" maxHeight="35vh">
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        width: 200,
                        height: 200,
                      }}
                    >
                      <Typography variant="h6">Animal Food Can</Typography>
                      <Typography variant="body2">
                        Last Filled: {<TimeAgo date={can.fillingTime} />}
                      </Typography>

                      <Button color="primary" variant="contained">
                        Change
                      </Button>
                    </div>
                  </Popup>
                </div>
              </Marker>
            </div>
          </ThemeProvider>
        );
      })}

      <MapLocate />
    </MapContainer>
  );
};

export default MapComponent;
