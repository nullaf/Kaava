import styles from "../styles/ForumNav.module.css";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";

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
