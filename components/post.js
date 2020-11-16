import React, { useEffect, useState } from "react";
import styles from "../styles/Post.module.css";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} variant="outlined">
        <Card className={styles.card}>
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
              }}
            >
              {like ? (
                <ThumbUp color="primary" />
              ) : (
                <ThumbUpOutlined color="primary" />
              )}
              <Typography variant="body2" style={{ marginLeft: "5px" }}>
                {props.likeCount} Likes
              </Typography>
            </IconButton>

            <IconButton aria-label="comment">
              <Comment color="primary" />

              <Typography variant="body2" style={{ marginLeft: "5px" }}>
                {props.commentCount} Comments
              </Typography>
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon color="primary" />
              <Typography variant="body2" style={{ marginLeft: "5px" }}>
                Share
              </Typography>
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
    </ThemeProvider>
  );
}
