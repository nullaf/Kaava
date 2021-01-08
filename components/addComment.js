import styles from "../styles/Comment.module.css";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function Addcomment({ mutate, id }) {
  const [comment, setComment] = useState("");

  const onClickAdd = () => {
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
      `https://cors-anywhere.herokuapp.com/https://kaavabackend.herokuapp.com/comments`,
      requestOptions
    ).then((response) => {
      response.json();
      mutate();
      setComment("");
    });
  };
  return (
    <div className={styles.addComment}>
      <div className={styles.addCommentTextfield}>
        <TextField
          value={comment}
          label="Add Comment"
          variant="outlined"
          fullWidth
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          onClickAdd();
        }}
      >
        Add
      </Button>
    </div>
  );
}
