// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the experience page component that displays the user's work experience information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { BusinessRounded, GradeRounded, Restore } from "@mui/icons-material";

const workExperience = [
  {
    position: "C++ GAME DEVELOPER",
    company: "Freelancer",
    date: "01/2025 – present",
    details: [
      "Worked on in house made video game in C++ and SFML library for release on Steam platform",
    ],
    achievements: [],
    technologies: "C++, SFML, GitLab CI/CD",
  },
  {
    position: "PYTHON DEVELOPER, C++ GAME DEVELOPER",
    company: "ONE CODE, obrt za računalno programiranje, Đakovo",
    date: "12/2022 – 01/2025",
    details: [
      "Worked on in house made video game in C++ and SFML library for release on Steam platform",
      "Worked for different clients on various projects in Python and FastAPI",
    ],
    achievements: [
      "Developed customized user permissions mechanism within the FastAPI framework",
      "Wrote a script in Bash for transferring data from PostgreSQL in Docker container to file system"
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
    achievements: [
      "Deployed PIA association's website on pythonanywhere.com",
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD, Jira",
  },
  {
    position: "PYTHON & POSTGRESQL DEVELOPER",
    company: "Infodom d.o.o., Zagreb",
    date: "02/2021 – 02/2022",
    details: [
      "Involved in development of business application (ERP) in Odoo framework",
      "Designed and developed JSON REST APIs in Odoo framework",
      "Developed inventory module in Odoo framework",
    ],
    achievements: [
      "Developed a script in Python for creating reports in Excel format from PostgreSQL database",
      "Developed a script for automatic barcode generation with Python",
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
    achievements: [
      "Extracted data from binary file format(used by Abaqus software) and used it in a project in Python",
    ],
    technologies: "Python, Flask, PostgreSQL, Docker, GitLab CI/CD",
  },
];

const WorkExperience = () => {
  return (
    <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Restore sx={{ mr: 1, color: "purple" }} />
          <Typography variant="h5">Experience</Typography>
        </Box>
        {workExperience.map((job, index) => (
          <Box key={index} mb={3}>
            <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{job.position}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{job.date}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <BusinessRounded sx={{ mr: 1, color: "black" }} />
              <Typography variant="subtitle2" color="text.secondary">{job.company}</Typography>
            </Box>
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
              {job.details.map((detail, i) => (
                <li key={i} >
                  <Typography variant="body2">{detail}</Typography>
                </li>
              ))}

              {job.achievements.map((achievement, i) => (
                <Box key={`achievement-${i}`} component="li" display="flex" alignItems="center" mb={0.5}>
                  <GradeRounded sx={{ mr: 1, color: "gold" }} />
                  <Typography variant="body2">{achievement}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
