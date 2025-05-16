// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the user's experience data which is not stored into database, but it could be in the future
// license: MIT

const workExperienceData = [
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

export default workExperienceData;