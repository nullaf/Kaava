import styles from "../styles/ForumNav.module.css";
import { ThemeProvider } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import InputAdornment from "@material-ui/core/InputAdornment";
import theme from "./muiThemes/postMuiTheme";

function Forumnav(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.background}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/svgs/icon.svg" />
          </div>
        </Link>
        <div className={styles.search}>
          <TextField
            fullWidth
            value={props.searchValue}
            onChange={(e) => props.setSearchValue(e.target.value)}
            variant="filled"
            color="primary"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() => {
              props.loginStatus(true);
            }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ marginLeft: "1vw" }}
            fullWidth
            onClick={() => {
              props.signupStatus(true);
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Forumnav;
