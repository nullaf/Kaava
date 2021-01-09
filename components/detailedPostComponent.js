import DetailedPost from "./detailedPost";
import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import { CircularProgress } from "@material-ui/core";
import CorsUrl from "../lib/corsUrl";
import { motion } from "framer-motion";

const DetailedPostComponent = (props) => {
  const { data, error } = useSWR(
    CorsUrl + `https://kaavabackend.herokuapp.com/posts/${props.id}`,
    fetcher
  );

  return (
    <motion.div>
      {!data && <CircularProgress color="primary" />}
      {data && (
        <motion.div
          key={data.id}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 0.99 }}
          animate={{
            scale: [0.5, 1],
            rotate: [10, 0],
            transition: { duration: 0.3 },
          }}
        >
          <DetailedPost
            key={data.id}
            title={data.postName}
            content={data.postDescription}
            likeCount={data.postLike}
            date={data.postTime}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
export default DetailedPostComponent;
