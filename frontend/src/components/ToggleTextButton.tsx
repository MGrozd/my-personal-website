import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface ToggleTextProps {
  buttontext: string;
  toggletext: string;
}

export default function ToggleTextButton({ buttontext, toggletext }: ToggleTextProps) {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(prev => !prev);
  };

  return (
    <Box textAlign="center" mt={2}>
      {!showText && (
      <Button variant="contained" onClick={handleToggle}>
        {buttontext}
      </Button>
      )}

      {showText && (
        <Typography mt={2}>
          {toggletext}
        </Typography>
      )}
    </Box>
  );
}
