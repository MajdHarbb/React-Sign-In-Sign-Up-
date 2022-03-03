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





  let test;
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordRepeat] = useState("");
  const [user_idd, setuserid] = useState(0);



  const bearer_token = localStorage.getItem("access_token");
  var bearer = "Bearer " + bearer_token;


  var url = "http://127.0.0.1:8000/api/auth/user-profile";
  async function getUserInfo ()  {
    const response = await fetch(url, {
        method: 'GET',

        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    })
    
    let content = await response.json();
    console.log("asdugjasdjklkasdlkjhasgdjhbkj"+content.id);
    
    setuserid(content.id);
    // setFirstName(content.first_name);
    // setLastName(content.last_name);
    
}

getUserInfo();
    test = user_idd;
    let user_id = test;
    console.log("asdsadasdhjjhhhhhhhhhhhhhhhhhhhhhh"+test);
    const submit = async (e) => {
    e.preventDefault();
    //const response =
    
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
    alert("Updated!");
  };
  // if (redirect) {
  //   return <Navigate to="/home/slider" />;
  // }
  const myfun = () => {
    fetch("http://127.0.0.1:8000/api/auth/update", {
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
    })
    .then(response => response.json())
    .then(data => console.log(data));
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
              Update Info
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
