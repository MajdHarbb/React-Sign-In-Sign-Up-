import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
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

export default function MyInfoComponent() {
  const bearer_token = localStorage.getItem("access_token");
  var bearer = "Bearer " + bearer_token;

  const submit = async (e) => {
    e.preventDefault();
    //const response =
    let user_id = 6;
    let first_name = "majd";
    let last_name = "majd";
    let email = "majd@majd.commmmmmmm";
    let password = "majd123456";
    let password_confirmation = "majd123456";
    await fetch("http://127.0.0.1:8000/api/auth/update", {
      method: "POST",
      headers: { Authorization: bearer, "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      }),
    });
    // const content = await response.json();
    // console.log(content);
    // setRedirect(true);
    alert("asd");
  };
  // if (redirect) {
  //   return <Navigate to="/home/slider" />;
  // }

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
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Info
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
