import styles from "../styles/MapNav.module.css";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { NoSsr } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

function Mapnav({ addingState, setAddingState }) {
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
              <img src="./svgs/icon.svg" />
            </motion.div>
          </Link>

          <div className={styles.helperText}>
            {addingState && (
              <motion.div
                animate={{
                  scale: [0.4, 1],
                  transition: { duration: 0.3 },
                }}
              >
                <Typography variant="h6" style={{ color: "#eee" }}>
                  Click where you want to add can
                </Typography>
              </motion.div>
            )}
          </div>

          <motion.div
            animate={{
              scale: [0.4, 1],
              transition: { duration: 0.3 },
            }}
          >
            <Button
              styles={styles.button}
              color="primary"
              variant="contained"
              startIcon={addingState ? <AddBoxIcon /> : <AddBoxOutlinedIcon />}
              size="large"
              onClick={() => {
                setAddingState(!addingState);
              }}
            >
              {addingState ? "Stop Adding" : "Add Cans"}
            </Button>
          </motion.div>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}

export default Mapnav;
