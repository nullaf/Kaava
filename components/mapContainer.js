import React from "react";
import dynamic from "next/dynamic";

const MapContainer = ({ addingState }) => {
  const FullMap = React.useMemo(
    () =>
      dynamic(() => import("./mapComponent"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <FullMap addingState={addingState} />;
};

export default MapContainer;
