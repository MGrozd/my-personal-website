// author: Matej Grozdanić
// date: 2025-05-19
// description: This is the Profile Card component of the website.
// license: MIT

import { Box, Avatar, Typography } from '@mui/material'

export default function ProfileCard() {
    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    sm: '35vh',
                },
                aspectRatio: '1 / 1',
                display: 'flex',         // ✅ Use colon, not equal sign
                bgcolor: '#f44336', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 2,                    // Theme-based padding (2 * 8px = 16px)
            }}
        >
            <Avatar
                alt="Profile picture"
                src="/profile.jpg"
                variant="square"
                sx={{
                    width: { xs: '80vw', sm: '20vh' },  // 120px on small screens, 160px on larger
                    height: { xs: '80vw', sm: '20vh' },
                    mb: 1,
                }}
                imgProps={{
                    style: {
                        objectFit: 'contain', // or 'contain' depending on desired appearance
                    },
                }}
            />

            <Typography variant="h4" color="white">
                Matej{' '}
                <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
                    Grozdanić
                </Typography>
            </Typography>

            {/* Right-aligned description */}
            <Box alignSelf="flex-end" textAlign="right" mt={2}>
                <Typography variant="body1" color="black" fontWeight="bold">
                    Python Developer
                </Typography>
                <Typography variant="body2" color="black">
                    Full stack developer
                </Typography>
            </Box>
        </Box>
    )
}