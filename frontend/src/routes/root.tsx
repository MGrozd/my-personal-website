import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import ProfileCard from '../components/ProfileCard';
import LeftMenuBar from '../components/LeftMenuBar';
import Footer from '../components/Footer';

export default function Root() {
  const mainContentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        sx={{
          position: { xs: 'relative', sm: 'fixed' },
          top: { xs: 'auto', sm: 0 },
          left: { xs: 'auto', sm: 0 },
          height: { xs: 'auto', sm: '100vh' },
          width: { xs: '100%', sm: '35vh' },
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: { xs: 'left', sm: 'center' },
          borderRight: { sm: '1px solid #ccc' },
          borderBottom: { xs: '1px solid #ccc', sm: 'none' },
          bgcolor: 'white',
        }}
      >
        <ProfileCard />
        <LeftMenuBar />
      </Box>

      <Box
        ref={mainContentRef}
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
        <Footer />
      </Box>
    </Box>
  );
}
