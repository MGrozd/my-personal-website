// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the articles page component that displays the user's articles information
// license: MIT

import { Card, CardContent, Typography, Divider, Box, Link } from "@mui/material";
import { LinkRounded, GitHub, Build, DescriptionRounded } from "@mui/icons-material";
import articlesData from "../data/articles";


const Articles = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <DescriptionRounded sx={{ mr: 1, color: "magenta" }} />
                    <Typography variant="h5">Articles</Typography>
                </Box>
                {articlesData.map((project, index) => (
                    <Box key={index} mb={3}>
                        <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                            <Typography variant="h6">{project.name}</Typography>
                            <Typography variant="subtitle2" color="text.secondary">{project.date}</Typography>
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

export default Articles;