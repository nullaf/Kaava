import { Typography } from "@material-ui/core";
import styles from "../styles/ForumNav.module.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00adb5",
    },
  },
});

function Forumnav() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className={styles.background}
      >
        <div className={styles.logo}>
          <Link href="./">
            <img src="./svgs/icon.svg" />
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Forumnav;
