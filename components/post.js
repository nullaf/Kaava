import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Post.module.css";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import { ThumbUp, ThumbUpOutlined, Comment } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import TimeAgo from "react-timeago";
import Link from "next/link";
import Alert from "@material-ui/lab/Alert";
import { motion } from "framer-motion";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00adb5",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post(props) {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(props.likeCount));
  const [shareAlert, setShareAlert] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} variant="outlined">
        <motion.Card
          className={styles.card}
          whileTap={{ scale: 0.98, rotate: -1 }}
          animate={{
            scale: [0.5, 1],
            rotate: [10, 0],
            transition: { duration: 0.3 },
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={props.title}
            subheader={<TimeAgo date={props.date} />}
          />

          <CardContent></CardContent>
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
