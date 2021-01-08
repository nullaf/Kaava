import React from "react";
import styles from "../styles/Forum.module.css";
import Addcomment from "./addComment";
import Comment from "./comment";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

const CommentComponent = ({ id }) => {
  const { data, error, mutate } = useSWR(
    `https://api.allorigins.win/raw?url=https://kaavabackend.herokuapp.com/postComments/${id}`,
    fetcher
  );
  return (
    <div>
      {!data && <CircularProgress color="primary" />}
      {error && "Error"}
      {data && <Addcomment mutate={mutate} id={id} />}
      {data?.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};
export default CommentComponent;
