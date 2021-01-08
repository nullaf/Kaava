import React, { useState } from "react";
import styles from "../styles/Post.module.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { ThumbUp, ThumbUpOutlined, Comment } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import TimeAgo from "react-timeago";
import Alert from "@material-ui/lab/Alert";
import { motion } from "framer-motion";
import theme from "./muiThemes/postMuiTheme";
import CorsUrl from "../lib/corsUrl";

export default function detailedPost(props) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(props.likeCount));
  const [shareAlert, setShareAlert] = useState(false);

  const onClickLike = () => {
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.id,
        postLike: like ? -1 : 1,
      }),
    };
    fetch(
      CorsUrl + "https://kaavabackend.herokuapp.com/postLike",
      requestOptions
    ).then((response) => {
      response.json();
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        variant="outlined"
        style={{ backgroundColor: "#393E46" }}
      >
        <motion.div
          whileTap={{ scale: 0.97 }}
          animate={{
            scale: [0.5, 1],
            rotate: [10, 0],
            transition: { duration: 0.3 },
          }}
        >
          <Card className={styles.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "#ff2e63" }}
                ></Avatar>
              }
              title={props.title}
              titleTypographyProps={{ variant: "h6" }}
              subheader={<TimeAgo date={props.date} />}
            />

            <CardContent>
              {" "}
              <Typography variant="body1">{props.content}</Typography>{" "}
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="like"
                onClick={() => {
                  onClickLike();
                }}
              >
                {like ? (
                  <ThumbUp color="primary" />
                ) : (
                  <ThumbUpOutlined color="primary" />
                )}
                <Typography variant="body2" style={{ marginLeft: "5px" }}>
                  {likeCount} Likes
                </Typography>
              </IconButton>

              <IconButton
                aria-label="share"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShareAlert(true);
                  setTimeout(() => {
                    setShareAlert(false);
                  }, 2000);
                }}
              >
                <ShareIcon color="primary" />
                <Typography variant="body2" style={{ marginLeft: "5px" }}>
                  Share
                </Typography>
              </IconButton>
            </CardActions>
            {shareAlert && (
              <motion.div
                animate={{
                  scale: [0.5, 1, 1, 0.5],
                  rotate: [5, 0, 0, 5],
                  transition: { duration: 2 },
                }}
              >
                {" "}
                <Alert severity="success" variant="outlined">
                  {" "}
                  You successfully copied post to your clipboard!
                </Alert>{" "}
              </motion.div>
            )}
          </Card>
        </motion.div>
      </Paper>
    </ThemeProvider>
  );
}
