import { Box, Avatar, Typography } from '@mui/material'

export default function ProfileCard() {
    return (
        <Box
            width="35vh"
            height="35vh"
            display="flex"
            bgcolor="#f44336" 
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            border={1}
            p={2}
        >
            <Avatar
                alt="Profile picture"
                src="/profile.jpg"
                variant="square" 
                sx={{
                    width: '20vh',
                    height: '20vh',
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