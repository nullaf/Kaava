import styles from "../styles/Forum.module.css";
import Typography from "@material-ui/core/Typography";
import DetailedPost from "./detailedPost";
import React from "react";
import CommentComponent from "./commentComponent";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import { CircularProgress } from "@material-ui/core";

const DetailedPostComponent = (props) => {
  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://kaavabackend.herokuapp.com/posts/${props.id}`,
    fetcher
  );

  return (
    <div>
      {!data && <CircularProgress color="primary" />}
      {data && (
        <div key={data.id}>
          <DetailedPost
            key={data.id}
            title={data.postName}
            content={data.postDescription}
            likeCount={data.postLike}
            date={data.postTime}
          />
        </div>
      )}
    </div>
  );
};
export default DetailedPostComponent;
