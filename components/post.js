import React, { useState } from "react";
import styles from "../styles/Post.module.css";
import {
  ThemeProvider,
} from "@material-ui/core/styles";
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
import Link from "next/link";
import Alert from "@material-ui/lab/Alert";
import { motion } from "framer-motion";
import theme from "./muiThemes/postMuiTheme";



export default function Post(props) {

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(props.likeCount));
  const [shareAlert, setShareAlert] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        variant="outlined"
        style={{ backgroundColor: "#393E46" }}
      >
        <motion.Card
          className={styles.card}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 0.99 }}
          animate={{
            scale: [0.5, 1],
            rotate: [10, 0],
            transition: { duration: 0.3 },
          }}
        >
          <Link href={"forum/posts/" + props.id}>
            <CardHeader
              avatar={
                <Avatar aria-label="avatar" style={{backgroundColor:"#ff2e63"}}>
                  {props.title[0]}
                </Avatar>
              }
              title={props.title}
              titleTypographyProps={{ variant: "h6" }}
              subheader={<TimeAgo date={props.date} />}
            />
          </Link>
          <Link href={"forum/posts/" + props.id}>
            <CardContent>
              {" "}
              <Typography variant="body1">
                  {props.content}
              </Typography>{" "}
            </CardContent>
          </Link>

          <CardActions disableSpacing>
            <IconButton
              aria-label="like"
              onClick={() => {
                setLike(!like);
                like
                  ? setLikeCount(likeCount - 1)
                  : setLikeCount(likeCount + 1);
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
            <Link href={"forum/posts/" + props.id}>
              <IconButton aria-label="comment">
                <Comment color="primary" />

                <Typography variant="body2" style={{ marginLeft: "5px" }}>
                  {props.commentCount} Comments
                </Typography>
              </IconButton>
            </Link>

            <IconButton
              aria-label="share"
              onClick={() => {
                navigator.clipboard.writeText(
                  window.location.href + "/posts/" + props.id
                );
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
        </motion.Card>
      </Paper>
    </ThemeProvider>
  );
}
