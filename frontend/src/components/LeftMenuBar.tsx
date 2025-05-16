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
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={2}
      >
        <List sx={{ width: "100%", mt: 0 }}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon sx={{ color: "#f44336" }}>
              <Person />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/experience">
            <ListItemIcon sx={{ color: "purple" }}>
              <Restore />
            </ListItemIcon>
            <ListItemText
              primary="Experience"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/projects">
            <ListItemIcon sx={{ color: "green" }}>
              <WebRounded />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/skills">
            <ListItemIcon sx={{ color: "blue" }}>
              <BarChart />
            </ListItemIcon>
            <ListItemText
              primary="Skills"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/presence">
            <ListItemIcon sx={{ color: "darkorange" }}>
              <PresentToAllRounded />
            </ListItemIcon>
            <ListItemText
              primary="Presence"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/languages">
            <ListItemIcon sx={{ color: "gold" }}>
              <LanguageRounded />
            </ListItemIcon>
            <ListItemText
              primary="Languages"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/educations">
            <ListItemIcon sx={{ color: "pink" }}>
              <SchoolRounded />
            </ListItemIcon>
            <ListItemText
              primary="Educations"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/companies">
            <ListItemIcon sx={{ color: "black" }}>
              <BusinessRounded />
            </ListItemIcon>
            <ListItemText
              primary="Companies"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton> 

          <ListItemButton component={Link} to="/articles">
            <ListItemIcon sx={{ color: "mangenta" }}>
              <DescriptionRounded />
            </ListItemIcon>
            <ListItemText
              primary="Articles"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/hobbies">
            <ListItemIcon sx={{ color: "brown" }}>
              <BookRounded />
            </ListItemIcon>
            <ListItemText
              primary="Hobbies"
              primaryTypographyProps={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}
            />
          </ListItemButton>
        </List> 
      </Box>
  );
}

export default LeftMenuBar;
