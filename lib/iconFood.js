import L from "leaflet";
import icon from "../public/svgs/petFood.svg";

const iconFood = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: [-3, -25],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(32, 32),
  className: "leaflet-div-icon",
});

export { iconFood };
