import styles from "../styles/Comment.module.css";
import Typography from "@material-ui/core/Typography";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export default function Comment(props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" elevation={3}>
        <div className={styles.comment}>
          <Typography variant="body1">{props.comment}</Typography>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
