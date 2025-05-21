// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the profile page component that displays the user's profile information
// license: MIT

import { Box, Typography } from "@mui/material";
import { Email, Phone, Home } from "@mui/icons-material";
import ToggleTextButton from "../components/ToggleTextButton";

export default function Profile() {
  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        background: "linear-gradient(to right, #ffffff, #f0f0f0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Intro box at the top */}
      <Box
        sx={{
          width: "100%",
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">Hi! 👋</Typography>
        <Typography variant="body1">I’d like to introduce myself — my name is Matej.</Typography>
        <Typography variant="body1">I have a very, very fast joke for you. I think it’s the fastest one you’ve ever heard.</Typography>
        <Typography variant="body1">Are you ready? Click the button below! 👇</Typography>
        <ToggleTextButton buttontext="SHOW JOKE" toggletext="It's already finished. 🤣 🤣 🤣 " />
        <Typography variant="body1" mt={2}>It’s brilliant, isn’t it? 😊</Typography>
        <Typography variant="body1" mt={2}>If I could see you right now, I bet I’d see a smile on your face.</Typography>
        <Typography variant="body1" mt={2}>Now, let’s find out how can I help you!</Typography>
      </Box>

      {/* Spacer to push contact box to vertical center */}
      <Box sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {/* Contact info box */}
        <Box textAlign="center">
          <Typography variant="h3" fontWeight="bold" color="gray">
            Matej Grozdanić
          </Typography>

          <Box mt={4}>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Phone sx={{ color: "#f44336", mr: 1 }} />
              <Typography variant="body1">+385 97 6666 884</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Email sx={{ color: "#f44336", mr: 1 }} />
              <Typography variant="body1">matej.grozdanic0@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Home sx={{ color: "#f44336", mr: 1 }} />
              <Typography variant="body1">Đakovo, Croatia</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
