// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the skills page component that displays the user's skills information
// license: MIT

import { Card, CardContent, Typography, Divider, Box, Button } from "@mui/material";
import { BarChartRounded, FileDownloadRounded, Grade } from "@mui/icons-material";
import skillsData from "../data/skills";

const Skills = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <BarChartRounded sx={{ mr: 1, color: "green" }} />
                    <Typography variant="h5">Skills</Typography>
                </Box>
                {skillsData.map((skill, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                            <Typography variant="h6">{skill.name}</Typography>
                            <Typography variant="subtitle2" color="text.secondary">{skill.experience}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Typography variant="subtitle2">{skill.category}</Typography>
                        </Box>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            <li key="description">
                                <Typography variant="body2">{skill.description}</Typography>
                            </li>

                            <Box display="flex" alignItems="center" mb={3}>
                                <Grade sx={{ mr: 1, color: "gold" }} />
                                <Typography variant="body2">{skill.level}</Typography>
                            </Box>
                            {skill.references?.map((ref, indexRef) => (
                                <Box key={indexRef} display="flex" alignItems="center" mb={3}>
                                    <Button
                                    variant="contained"
                                    component="a"
                                    href={ref.path}
                                    download
                                    sx={{ mr: 1 }}
                                    >
                                    <FileDownloadRounded sx={{ mr: 1, color: "gold" }} />
                                    </Button>
                                    <Typography variant="body2">Reference</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default Skills;