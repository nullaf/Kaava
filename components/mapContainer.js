import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MapContainer = ({ addingState }) => {
  const FullMap = React.useMemo(
    () =>
      dynamic(() => import("./mapComponent"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <motion.div
      style={{ width: "100%" }}
      animate={{
        scale: [0.6, 1],
        transition: { duration: 0.35 },
      }}
    >
      <FullMap addingState={addingState} />
    </motion.div>
  );
};

export default MapContainer;
