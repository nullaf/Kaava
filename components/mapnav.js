import styles from "../styles/ForumNav.module.css";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { NoSsr } from "@material-ui/core";

function Mapnav({ addingState, setAddingState }) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <div className={styles.background}>
          <Link href="/">
            <div className={styles.logo}>
              <img src="./svgs/icon.svg" />
            </div>
          </Link>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => {
              setAddingState(!addingState);
            }}
          >
            Toggle
          </Button>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}

export default Mapnav;
