// author: Matej Grozdanić
// date: 2025-05-15
// description: This is the projects page component that displays the user's projects information
// license: MIT

import { Card, CardContent, Typography, Divider, Box, Link } from "@mui/material";
import { Web, LinkRounded, GitHub, Build } from "@mui/icons-material";
import projectsData from "../data/projects";


const Projects = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <Web sx={{ mr: 1, color: "green" }} />
                    <Typography variant="h5">Projects</Typography>
                </Box>
                {projectsData.map((project, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                            <Typography variant="h6">{project.name}</Typography>
                            <Typography variant="subtitle2" color="text.secondary">{project.start_date}-{project.end_date}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <LinkRounded sx={{ mr: 1, color: "black" }} />
                            <Link href={project.url} variant="subtitle2" color="text.secondary">{project.url}</Link>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <GitHub sx={{ mr: 1, color: "black" }} />
                            <Link href={project.repository} variant="subtitle2" color="text.secondary">{project.repository}</Link>
                        </Box>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            <li key="description">
                                <Typography variant="body2">{project.description}</Typography>
                            </li>

                            <Box display="flex" alignItems="center" mb={2}>
                                <Build sx={{ mr: 1, color: "gold" }} />
                                <Typography variant="body2">{project.technologies}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default Projects;