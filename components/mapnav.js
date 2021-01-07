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

function Mapnav() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.background}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="./svgs/icon.svg" />
          </div>
        </Link>
      </div>
    </ThemeProvider>
  );
}

export default Mapnav;
