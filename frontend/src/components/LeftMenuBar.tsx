// author: Matej Grozdanić
// date: 2025-05-19
// description: This is the Left Menu Bar component of the website.
// license: MIT

import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Person,
  Restore,
  WebRounded,
  BarChart,
  PresentToAllRounded,
  BookRounded,
  DescriptionRounded,
  BusinessRounded,
  SchoolRounded,
  LanguageRounded,
} from "@mui/icons-material";

function LeftMenuBar() {
  return (
    <Box
      width="35vh"
      bgcolor="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={2}
      sx={{ boxShadow: { sm: '2px 0 5px rgba(0,0,0,0.1)' }, px: 1 }}
    >
      <List sx={{ width: "100%", mt: 0 }}>
        {[
          { to: "/", icon: <Person />, label: "Profile", color: "#f44336" },
          { to: "/experience", icon: <Restore />, label: "Experience", color: "purple" },
          { to: "/projects", icon: <WebRounded />, label: "Projects", color: "green" },
          { to: "/skills", icon: <BarChart />, label: "Skills", color: "blue" },
          { to: "/presence", icon: <PresentToAllRounded />, label: "Presence", color: "darkorange" },
          { to: "/languages", icon: <LanguageRounded />, label: "Languages", color: "gold" },
          { to: "/educations", icon: <SchoolRounded />, label: "Educations", color: "pink" },
          { to: "/companies", icon: <BusinessRounded />, label: "Companies", color: "black" },
          { to: "/articles", icon: <DescriptionRounded />, label: "Articles", color: "magenta" },
          { to: "/hobbies", icon: <BookRounded />, label: "Hobbies", color: "brown" },
        ].map(({ to, icon, label, color }) => (
          <ListItemButton
            key={label}
            component={Link}
            to={to}
            sx={{
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ListItemIcon sx={{ color }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                color: "gray",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default LeftMenuBar;
