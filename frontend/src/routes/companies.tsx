// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the companies page component that displays the user's companies information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { Person, BusinessRounded } from "@mui/icons-material";
import companiesData from "../data/companies";

const Companies = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <BusinessRounded sx={{ mr: 1, color: "black" }} />
                    <Typography variant="h5">Companies</Typography>
                </Box>
                {companiesData.map((company, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                            <Typography variant="h6">{company.name}</Typography>
                            <Typography variant="subtitle2" color="text.secondary">{company.date}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <BusinessRounded sx={{ mr: 1, color: "black" }} />
                            <Typography variant="subtitle2" color="text.secondary">{company.type}</Typography>
                        </Box>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            <li key="description">
                                <Typography variant="body2">{company.description}</Typography>
                            </li>

                            <Box display="flex" alignItems="center" mb={3}>
                                <Person sx={{ mr: 1, color: "gold" }} />
                                <Typography variant="body2">{company.role}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default Companies;