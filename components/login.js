import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Lock, LockOpen, Mail, Visibility, VisibilityOff} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00adb5",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00adb5",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);

  const classes = useStyles();



    return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputProps={{ maxLength: 40 }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPass ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              inputProps={{ maxLength: 20 }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                          {showPass ? (
                              <LockOpen color="primary" />
                          ) : (
                              <Lock color="primary" />
                          )}
                      </InputAdornment>
                  ),
                  endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                              color="primary"
                              aria-label="toggle password visibility"
                              onClick={() => {setShowPass(!showPass)}}
                              edge="end"
                          >
                              {showPass ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                  ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!(password.length > 0 && email.length > 0)}
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
