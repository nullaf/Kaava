import styles from "../styles/Comment.module.css";
import Typography from "@material-ui/core/Typography";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import TimeAgo from "react-timeago";
import React from "react";
import { motion } from "framer-motion";

export default function Comment(props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" elevation={3}>
        <motion.div
          className={styles.comment}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 0.99 }}
          animate={{
            scale: [0.5, 1],
            rotate: [10, 0],
            transition: { duration: 0.3 },
          }}
        >
          <Typography variant="body1">{props.comment.commentPost}</Typography>
          <Typography variant="body2">
            {<TimeAgo date={props.comment.commentTime} />}
          </Typography>
        </motion.div>
      </Paper>
    </ThemeProvider>
  );
}
