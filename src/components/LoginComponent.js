import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as Linkk } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const theme = createTheme();

export default function LoginComponent() {

  //email and password regex: email-> example@example.example, password->letters and numbers > 6 characters
  var emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passRegex = /^[a-zA-Z0-9]{6,}$/;

  //useStates to get user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  //On button click activate: 
  const sumbit = async (e) => {
    //validate email and password
    if (email.match(emailRegex) && password.match(passRegex)) {

      e.preventDefault();
      //fetch login API: checks if user exists in the database and returns a JWT token
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

          email,
          password,
        }),
      });
      const content = await response.json();

      //if user is found store token in the local storage
      if (response.status != 401) {
        localStorage.setItem("access_token", content.access_token);
        setRedirect(true);
      }else{
        //display user not found message
        document.getElementById("nouser").style.display="block";
      }
    } else {
      //display Invalid Input
      document.getElementById("invalidinput").style.display="block";
    }
  };
  //redirect to user home page on success
  if (redirect) {
    return <Navigate to="/home/slider" />;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Typography className="alert-error" id="invalidinput" component="h3" variant="h5">
            Invalid Input
          </Typography>

          <Typography className="alert-error" id="nouser" component="h3" variant="h5">
            User Does Not Exist
          </Typography>

          <Box component="form" onSubmit={sumbit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Linkk to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Linkk>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
