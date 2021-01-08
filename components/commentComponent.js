import React from "react";
import styles from "../styles/Forum.module.css";
import Addcomment from "./addComment";
import Comment from "./comment";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";
import CorsUrl from "../lib/corsUrl";

const CommentComponent = ({ id }) => {
  const { data, error, mutate } = useSWR(
    CorsUrl + `https://kaavabackend.herokuapp.com/postComments/${id}`,
    fetcher
  );

  return (
    <div>
      {!data && !error && <CircularProgress color="primary" />}
      {(data || error) && <Addcomment mutate={mutate} id={id} />}
      {data?.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};
export default CommentComponent;
