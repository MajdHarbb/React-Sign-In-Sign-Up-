import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme();

export default function ContactComponent() {

  //useState for fetched Id value 
  const [fetched_id, setId] = useState("");

  //get token from local storage
  const bearer_token = localStorage.getItem("access_token");
  console.log(bearer_token);

  var url = "http://127.0.0.1:8000/api/auth/user-profile";
  var bearer = "Bearer " + bearer_token;

  //funcion to get user info id, name, email
  async function getUserInfo() {
    const response = await fetch(url, {
      method: "GET",

      headers: {
        //pass jwt token as header
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    });

    let content = await response.json();

    setId(content.id);//set fetched id
  }

  getUserInfo();

  //setMessage useState: changes message value according to user input
  const [contact_message, setMessage] = useState("");
  
  //parse fetched_id from string to int before appending to request body
  let user_id = parseInt(fetched_id);

  const [redirect, setRedirect] = useState(false);

  // Asynchronous function activated on button click: 
  // Sends a post request that stores the message in the database
  const submit = async (e) => {

    e.preventDefault();
    await fetch("http://127.0.0.1:8000/api/auth/contact", {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        user_id,
        contact_message,
      }),
    });
    
    setRedirect(true);
    //when request is served display "Message Sent"
    document.getElementById("messagesent").style.display="block";
  };
  //end function

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
