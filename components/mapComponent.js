import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import Locate from "leaflet.locatecontrol";
import { iconFood } from "../lib/iconFood";

const MapComponent = () => {
  const SearchField = () => {
    const map = useMap();
    const search = new GeoSearchControl({
      style: "bar",
      provider: new OpenStreetMapProvider(),
      animateZoom: true,
      zoomLevel: 15,
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
  const position = [40.987, 29.0528];
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
      <Marker position={position} icon={iconFood}>
        <Popup>Test</Popup>
      </Marker>

      <MapLocate />
    </MapContainer>
  );
};

export default MapComponent;
