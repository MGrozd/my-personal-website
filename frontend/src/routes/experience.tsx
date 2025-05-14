// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the experience page component that displays the user's work experience information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const workExperience = [
  {
    position: "C++ GAME DEVELOPER",
    company: "Freelancer",
    date: "01/2025 – present",
    details: [
      "Designing and developing game for release on Steam platform"
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD",
  },
  {
    position: "PYTHON DEVELOPER, C++ GAME DEVELOPER",
    company: "ONE CODE, obrti za računalno programiranje, Đakovo",
    date: "12/2022 – 01/2025",
    details: [
      "Designed and developed online game for release on Steam platform",
      "Developed the user permissions mechanism within the FastAPI framework",
      "Implemented automated email messaging and contributed to the development of a script for video animation"
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD",
  },
  {
    position: "PYTHON WEB DEVELOPER",
    company: "Freelancer",
    date: "02/2022 – 12/2022",
    details: [
      "Worked on website for association in Flask with Bootstrap",
      "Worked on website for perfume store in Flask with Bootstrap and PostgreSQL"
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD",
  },
  {
    position: "PYTHON & POSTGRESQL DEVELOPER",
    company: "Inovativna ideja, Zagreb",
    date: "02/2021 – 02/2022",
    details: [
      "Involved in development of business application (ERP) in Odoo framework",
      "Designed and developed JSON REST APIs in Odoo framework"
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD",
  },
  {
    position: "PYTHON DEVELOPER",
    company: "AVL-AST d.o.o., Zagreb",
    date: "10/2019 – 02/2021",
    details: [
      "Worked on the development of tools for the preparation and analysis of data obtained from simulations of physical processes",
      "Worked on the development of tools for system testing software"
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD",
  },
];

const WorkExperience = () => {
  return (
    <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <WorkIcon sx={{ mr: 1 }} />
          <Typography variant="h5">Work Experience</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        {workExperience.map((job, index) => (
          <Box key={index} mb={3}>
            <Box>
                <Typography variant="h6">{job.position}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="text.secondary">{job.date}</Typography>
            </Box>
            <Typography variant="subtitle2" color="text.secondary">
              {job.company}
            </Typography>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>
                  <Typography variant="body2">{detail}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
