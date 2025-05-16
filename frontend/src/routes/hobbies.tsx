// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the hobbies page component that displays the user's hobbies information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { BookRounded, Grade } from "@mui/icons-material";
import hobbiesData from "../data/hobbies";

const Hobbies = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <BookRounded sx={{ mr: 1, color: "green" }} />
                    <Typography variant="h5">Hobbies</Typography>
                </Box>
                {hobbiesData.map((hobbies, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                            <Typography variant="h6">{hobbies.name}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Grade sx={{ mr: 1, color: "gold" }} />
                            <Typography variant="subtitle2" color="text.secondary">{hobbies.favorite}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Typography variant="subtitle2">{hobbies.description}</Typography>
                        </Box>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            {hobbies.items.map((item, i) => (
                                <li key={i} >
                                    <Typography variant="body2">{item}</Typography>
                                </li>
                            ))}
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default Hobbies;