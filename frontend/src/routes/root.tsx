// author: Matej Grozdanić
// date: 2025-05-19
// description: This is root(home) page.
// license: MIT

import { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Root() {
  // Explicitly type the ref as HTMLDivElement or null
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
    >
      {/* Sidebar code omitted for brevity */}
      <Box
        ref={mainContentRef} // This ref points to a div element
        sx={{
          width: '100%',
          minHeight: '100vh',
          fontFamily: 'Roboto, sans-serif',
          background: 'linear-gradient(to right, #ffffff, #f0f0f0)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Outlet />
        </Box>
        {/* Footer */}
      </Box>
    </Box>
  );
}
