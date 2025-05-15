// author: Matej Grozdanić
// date: 2025-05-15
// description: This is the projects page component that displays the user's projects information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { BarChart, BusinessRounded, GradeRounded, Restore, TaskRounded } from "@mui/icons-material";

const projects = [
    {
        name: "Personal Website",
        description: "Website made to present personal information which is made in FARM stack(FastAPI, React, MongoDB)",
        start_date: "05/2025",
        end_date: "present",
        url: "https://matejgrozdanic.com",
        technologies: "Python, FastAPI, TypeScript, React, ReactRouter, MaterialUI, MongoDB, Github, Docker, Google Cloud",
    },
    {
        name: "PIA Association Website",
        description: "Website for PIA association made in Flask with Bootstrap",
        start_date: "01/2025",
        end_date: "present",
        url: "https://piadjakovo.pythonanywhere.com",
        technologies: "Python, Flask, Bootstrap, GitLab CI/CD, PythonAnywhere",
    },
];

const Projects = () => {
    return (
        <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <BarChart sx={{ mr: 1, color: "green" }} />
                    <Typography variant="h5">Projects</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Projects;