import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import {
  Visibility,
  VisibilityOff,
  AccountBox,
  Mail,
  Lock,
  LockOpen,
  LockOutlined,
  MailOutline,
} from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00adb5",
    },
    secondary: {
      main: "#eeeeee"
    }
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
  const [confPassword, setConfPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassMatch, setIsPassMatch] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [alert, setAlert] = useState(false);

  const validateForm= () => {
    return (
      email.length > 0 &&
      password.length > 0 &&
      username.length > 0 &&
      password === confPassword &&
      isEmailValid
    );
  };

  const onClickSignup = () => {
    setAlert(true);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {alert && (
            <Alert severity="success">Your account created successfully!</Alert>
          )}
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" color="secondary">
            Sign Up
          </Typography>
          <div className={classes.form}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputProps={{ maxLength: 40 }}
              helperText={
                isEmailValid || !email.length
                  ? ""
                  : "Your email address is invalid."
              }
              error={isEmailValid || !email.length ? 0 : 1}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                );
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {isEmailValid || !email.length ? (
                      <Mail color="primary" />
                    ) : (
                      <MailOutline color="primary" />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="Username"
              autoComplete="email"
              inputProps={{ maxLength: 20 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBox color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPassMatch(
                  confPassword === e.target.value || !confPassword.length
                );
              }}
              helperText={
                isPassMatch || !password.length
                  ? ""
                  : "Your passwords aren't matching."
              }
              error={isPassMatch || !password.length ? 0 : 1}
              variant="filled"
              margin="normal"
              type={showPass ? "text" : "password"}
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              inputProps={{ maxLength: 20 }}
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
            <TextField
              value={confPassword}
              onChange={(e) => {
                setConfPassword(e.target.value);
                setIsPassMatch(password === e.target.value || !password.length);
              }}
              helperText={
                isPassMatch || !password.length
                  ? ""
                  : "Your passwords aren't matching."
              }
              error={isPassMatch || !password.length ? 0 : 1}
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Repeat Password"
              type={showPass ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              inputProps={{ maxLength: 20 }}
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
              disabled={!validateForm()}
              onClick={onClickSignup}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
