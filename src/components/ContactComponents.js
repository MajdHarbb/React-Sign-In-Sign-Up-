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

export default function ContactComponent() {
  const [first_name, setId] = useState("");

  const bearer_token = localStorage.getItem("access_token");
  console.log(bearer_token);
  var url = "http://127.0.0.1:8000/api/auth/user-profile";
  var bearer = "Bearer " + bearer_token;
  async function getUserInfo() {
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    });

    let content = await response.json();
    console.log(content);
    setId(content.id);
  }

  getUserInfo();

  const [contact_message, setMessage] = useState("");
  const [user_id1, setUserId] = useState("");
  let user_id = parseInt(first_name);
  const [redirect, setRedirect] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    //const response =
    await fetch("http://127.0.0.1:8000/api/auth/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        contact_message,
      }),
    });
    // const content = await response.json();
    // console.log(content);
    setRedirect(true);
    document.getElementById("messagesent").style.display="block";
  };

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
          <Typography component="h1" variant="h5">
            Send Us A Message
          </Typography>

          <Typography component="h4" id="messagesent" variant="h5">
            Message Sent. Thank You!
          </Typography>

          <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Message Text"
                  type="text"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
