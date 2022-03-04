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

export default function SignupComponent() {

  //use State to update variables according to user input
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordRepeat] = useState("");

  //redirect use state: initally false, if user registeration is successful --> true
  const [redirect, setRedirect] = useState(false);

  //email and password regex: email-> example@example.example, password->letters and numbers > 6 characters
  var emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passRegex = /^[a-zA-Z0-9]{6,}$/;

  const submit = async (e) => {

    //match input with regex and check for null input
    if(email.match(emailRegex) && password.match(passRegex) && first_name!="" && first_name!="" && password===password_confirmation){
      
      e.preventDefault();
    //if true fetch register API: insert new tuple into users db container user input information

    await fetch("http://127.0.0.1:8000/api/auth/register", {

      method: "POST",

      headers: { "Content-Type": "application/json" },
      //append user input to body
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      }),
    });
    
    //redirect use state set to true
    setRedirect(true);
    }else{

      //if user input is null or not in the form ex@ex.com & password 6 characters (letters and numbers) display invalid input message
      document.getElementById("invalidinput").style.display="block";
    }
    
  };

  //redirect is true navigate to sign in page else stay at sign up page
  if (redirect) {
    return <Navigate to="/" />;
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
            Sign up
          </Typography>

          <Typography component="h3" id="invalidinput" variant="h5">
            Invalid Input
          </Typography>


          <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Enter Password Again"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Linkk to="/" variant="body2">
                  Already have an account? Sign in
                </Linkk>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
