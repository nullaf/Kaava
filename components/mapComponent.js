import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const MapComponent = () => {
  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={[40.987, 29.0528]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "88vh", width: "100%" }}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/nullaf/ckiyuiifl51u619o2rxufyzrm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibnVsbGFmIiwiYSI6ImNraXl4OTU0aDFoNXAyem1lc2h6MHdzd2EifQ.2m0ZR7A6RREt1vgCUy2K4Q" />

      <LocationMarker />
    </MapContainer>
  );
};
export default MapComponent;
