// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the skills page component that displays the user's skills information
// license: MIT

import { Card, CardContent, Typography, Divider, Box, Link } from "@mui/material";
import { PresentToAllRounded, Person, LinkRounded, BusinessRounded, YouTube } from "@mui/icons-material";
import presenceData from "../data/presence";

const Presence = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <PresentToAllRounded sx={{ mr: 1, color: "green" }} />
                    <Typography variant="h5">Presence</Typography>
                </Box>
                {presenceData.map((presence, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">{presence.name}</Typography>
                            <Typography variant="subtitle2" color="text.secondary">{presence.date}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            {presence.type === "Non-profit organization" ? (
                                <BusinessRounded sx={{ mr: 1, color: "black" }} />
                            ) : presence.type === "YouTube" ? (
                                <YouTube sx={{ mr: 1, color: "red" }} />
                            ) : null}
                            <Typography variant="subtitle2" color="text.secondary">{presence.type}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <LinkRounded sx={{ mr: 1, color: "black" }} />
                            <Link href={presence.url} variant="subtitle2">{presence.url}</Link>
                        </Box>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            <li key="description">
                                <Typography variant="body2">{presence.description}</Typography>
                            </li>

                            <Box display="flex" alignItems="center" mb={3}>
                                <Person sx={{ mr: 1, color: "gold" }} />
                                <Typography variant="body2">{presence.role}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default Presence;