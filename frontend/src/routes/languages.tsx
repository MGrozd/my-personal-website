// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the languages page component that displays the user's languages information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { Grade, LanguageRounded } from "@mui/icons-material";
import languagesData from "../data/languages";

const Languages = () => {
    return (
        <Card sx={{ maxWidth: 900, minWidth: 300, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <LanguageRounded sx={{ mr: 1, color: "gold" }} />
                    <Typography variant="h5">Languages</Typography>
                </Box>
                {languagesData.map((language, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">{language.name}</Typography>
                        </Box>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            <Box display="flex" alignItems="center" mb={3}>
                                <Grade sx={{ mr: 1, color: "gold" }} />
                                <Typography variant="body2">{language.level}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default Languages;