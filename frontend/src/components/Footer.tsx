// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the footer component of the website. It contains the copyright information and the year.
// license: MIT

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="body2" color="text.secondary" display="flex" justifyContent="center" alignItems="center">
        <CopyrightIcon fontSize="small" sx={{ mr: 0.5 }} />
        {new Date().getFullYear()} Designed and Developed by Matej Grozdanić. All rights reserved.
      </Typography>
    </Box>
  );
}