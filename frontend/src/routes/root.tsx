// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the root layout component that wraps around all the routes
// license: MIT

import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import LeftMenuBar from '../components/LeftMenuBar'

// It contains the top menu bar and the main content area
// It uses the Outlet component to render the child routes
// The Outlet component is a placeholder for the child routes
// The Box component is used to create a flex container for the top menu bar and the main content area
// The Toolbar component is used to create a space for the top menu bar

export default function Root() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // column on mobile, row on larger screens
        height: '100vh',
      }}
    >
      {/* Sidebar container */}
      <Box
        sx={{
          width: { xs: '100%', sm: '35vh' },
          height: { xs: 'auto', sm: '100vh' },
          display: 'flex',
          flexDirection: 'column', // stack ProfileCard and LeftMenuBar vertically
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderRight: { sm: '1px solid #ccc' },
          borderBottom: { xs: '1px solid #ccc', sm: 'none' },
          bgcolor: 'white', // Optional: give it a red background like before
        }}
      >
        <ProfileCard />
        <LeftMenuBar />
      </Box>

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
