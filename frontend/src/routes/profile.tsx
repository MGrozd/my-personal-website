// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the profile page component that displays the user's profile information
// license: MIT

import { Box, Typography } from "@mui/material";
import { Email, Phone, Home } from "@mui/icons-material";

export default function Profile() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        fontFamily: "Roboto, sans-serif",
        background: "linear-gradient(to right, #ffffff, #f0f0f0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="bold" color="gray">
          Matej Grozdanić
        </Typography>

        <Box mt={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <Phone sx={{ color: "#f44336", mr: 1 }} />
            <Typography variant="body1">+385 97 6666 884</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Email sx={{ color: "#f44336", mr: 1 }} />
            <Typography variant="body1">matej.grozdanic0@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Home sx={{ color: "#f44336", mr: 1 }} />
            <Typography variant="body1">Đakovo, Croatia</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
