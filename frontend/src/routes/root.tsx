// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the root layout component that wraps around all the routes
// license: MIT

import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import LeftMenuBar from '../components/LeftMenuBar'

// It contains the top menu bar and the main content area
// It uses the Outlet component to render the child routes
// The Outlet component is a placeholder for the child routes
// The Box component is used to create a flex container for the top menu bar and the main content area
// The Toolbar component is used to create a space for the top menu bar

export default function Root() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <TopMenuBar /> */}
      <LeftMenuBar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          paddingBottom: 5,
        }}
      >
        <Toolbar></Toolbar>
        <Outlet />
      </Box>
    </Box>
  )
}
