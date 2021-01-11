import React from "react";
import Addcomment from "./addComment";
import Comment from "./comment";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import { CircularProgress } from "@material-ui/core";
import CorsUrl from "../lib/corsUrl";
import { motion } from "framer-motion";

const CommentComponent = ({ id }) => {
  const { data, error, mutate } = useSWR(
    CorsUrl + `https://kaavabackend.herokuapp.com/postComments/${id}`,
    fetcher
  );

  return (
    <div>
      {!data && !error && <CircularProgress color="primary" />}
      {(data || error) && <Addcomment mutate={mutate} id={id} />}
      {data?.reverse().map((comment, i) => {
        return <Comment comment={comment} key={i} />;
      })}
    </div>
  );
};
export default CommentComponent;
