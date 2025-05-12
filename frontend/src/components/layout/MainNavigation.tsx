import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Person,
  Work,
  Folder,
  BarChart,
} from "@mui/icons-material";

function MainNavigation() {
  return (
    <Box
      display="flex"
      height="100vh"
      fontFamily="Roboto, sans-serif"
    >
      {/* Sidebar */}
      <Box
        width="25%"
        bgcolor="#f44336"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={4}
      >
        <Typography variant="h4" fontWeight="bold">
          Joel <span style={{ color: "white" }}>Cox</span>
        </Typography>
        <Typography variant="body1">Ui & UX Designer</Typography>
        <Typography variant="body2">JavaScript Engineer</Typography>

        <List sx={{ width: "100%", mt: 4 }}>
          <ListItemButton component={Link} to="/profile">
            <ListItemIcon sx={{ color: "white" }}>
              <Person />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/experience">
            <ListItemIcon sx={{ color: "white" }}>
              <Work />
            </ListItemIcon>
            <ListItemText
              primary="Experience"
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/projects">
            <ListItemIcon sx={{ color: "white" }}>
              <Folder />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItemButton>

          <ListItemButton component={Link} to="/skills">
            <ListItemIcon sx={{ color: "white" }}>
              <BarChart />
            </ListItemIcon>
            <ListItemText
              primary="Skills"
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItemButton>
        </List>
      </Box>

      {/* Placeholder for Main Content */}
      <Box flexGrow={1} bgcolor="#f5f5f5" p={4}>
        <Typography variant="h5">Main Content Goes Here</Typography>
      </Box>
    </Box>
  );
}

export default MainNavigation;
