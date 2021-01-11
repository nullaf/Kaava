import styles from "../styles/Comment.module.css";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import CorsUrl from "../lib/corsUrl";
import { motion } from "framer-motion";
import AddCommentIcon from "@material-ui/icons/AddCommentOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function Addcomment({ mutate, id }) {
  const [comment, setComment] = useState("");

  const onClickAdd = () => {
    if (comment != "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postID: id,
          senderName: "Guest",
          commentPost: String(comment),
          commentTime: new Date(),
        }),
      };
      fetch(
        CorsUrl + "https://kaavabackend.herokuapp.com/comments",
        requestOptions
      ).then((response) => {
        response.json();
        mutate();
        setComment("");
      });
    }
  };
  return (
    <motion.div
      className={styles.addComment}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 0.99 }}
      animate={{
        scale: [0.5, 1],
        rotate: [10, 0],
        transition: { duration: 0.3 },
      }}
    >
      <div className={styles.addCommentTextfield}>
        <TextField
          value={comment}
          label="Add Comment"
          variant="outlined"
          fullWidth
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClickAdd();
            }
          }}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <IconButton
        variant="contained"
        color="primary"
        onClick={() => {
          onClickAdd();
        }}
      >
        <AddCommentIcon fontSize="large" />
      </IconButton>
    </motion.div>
  );
}
