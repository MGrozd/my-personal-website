// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the profile page component that displays the user's profile information
// license: MIT

import { Box, Typography, Link } from "@mui/material";
import { Person, Email, Phone, Home, GitHub, LinkedIn,} from "@mui/icons-material";
import profileData from "../data/profile";

export default function Profile() {
  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        background: "linear-gradient(to right, #ffffff, #f0f0f0)",
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      {/* Intro box at the top */}
      <Box sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <Person sx={{ mr: 1, color: "red" }} />
        <Typography variant="h5">{profileData.title}</Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          padding: 4,
          margin: "0 auto", // Optional: center the Box itself horizontally if it's a child of a larger container
          textAlign: "justify",
        }}
      >
        <Typography variant="body1">{profileData.professionalSummary}</Typography>
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
            {profileData.fullName}
          </Typography>

          <Box mt={4}>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <GitHub sx={{ color: "#f44336", mr: 1 }} />
              <Link href={profileData.gitHub} variant="body1">{profileData.gitHub}</Link>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <LinkedIn sx={{ color: "#f44336", mr: 1 }} />
              <Link href={profileData.linkedIn} variant="body1">{profileData.linkedIn}</Link>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Phone sx={{ color: "#f44336", mr: 1 }} />
              <Typography variant="body1">
                {profileData.phoneNumbers.map((phoneNumber, i) => (
                  <span key={i}>
                    {phoneNumber}
                    {i < profileData.phoneNumbers.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Email sx={{ color: "#f44336", mr: 1 }} />
              <Typography variant="body1">
                {profileData.emails.map((email, i) => (
                  <span key={i}>
                    {email}
                    {i < profileData.emails.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Home sx={{ color: "#f44336", mr: 1 }} />
              <Typography variant="body1">{profileData.city}, {profileData.state}, {profileData.country}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
