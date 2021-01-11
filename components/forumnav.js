import styles from "../styles/ForumNav.module.css";
import { ThemeProvider } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import InputAdornment from "@material-ui/core/InputAdornment";
import theme from "./muiThemes/postMuiTheme";
import { NoSsr } from "@material-ui/core";
import { motion } from "framer-motion";

function Forumnav(props) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <div className={styles.background}>
          <Link href="/">
            <motion.div
              className={styles.logo}
              animate={{
                rotate: [8, 0],
                transition: { duration: 0.35 },
              }}
            >
              <img src="/svgs/icon.svg" />
            </motion.div>
          </Link>
          <motion.div
            className={styles.search}
            animate={{
              scale: [0.4, 1],
              transition: { duration: 0.3 },
            }}
          >
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
          </motion.div>
          <motion.div
            className={styles.buttons}
            animate={{
              scale: [0.4, 1],
              transition: { duration: 0.3 },
            }}
          >
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
          </motion.div>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}

export default Forumnav;
