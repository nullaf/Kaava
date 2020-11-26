import { Typography } from "@material-ui/core";
import styles from "../styles/ForumNav.module.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";
import { useRouter } from "next/router";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00adb5",
    },
  },
});

function Mapnav() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.background}>
        <div className={styles.logo} onClick={() => router.back()}>
          <img src="./svgs/icon.svg" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Mapnav;
