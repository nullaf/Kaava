import styles from "../styles/ForumNav.module.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00adb5",
    },
  },
});

function Forumnav(props) {
  const [searchValue, setSearchValue] = useState("");



  return (
    <ThemeProvider theme={theme}>
      <div className={styles.background}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/svgs/icon.svg"/>
          </Link>
        </div>
        <div className={styles.search}>
          <TextField
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
            fullwidth
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
            fullwidth
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
