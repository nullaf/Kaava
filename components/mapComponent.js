import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import Locate from "leaflet.locatecontrol";
import { iconFood } from "../lib/iconFood";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const MapComponent = () => {
  const { data, error, mutate } = useSWR("/api/dummycans", fetcher);
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
      center={[40.987, 29.0528]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "88vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <SearchField />
      {data?.kmap.cans.map((can) => {
        return (
          <Marker position={can.coordinates} icon={iconFood}>
            <div>
              <Popup maxWidth="45vw" maxHeight="45vh">
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6">Animal Food Can</Typography>

                  <Button color="primary" variant="outlined">
                    Change
                  </Button>
                </div>
              </Popup>
            </div>
          </Marker>
        );
      })}

      <MapLocate />
    </MapContainer>
  );
};

export default MapComponent;
