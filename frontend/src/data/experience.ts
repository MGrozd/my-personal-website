// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the user's experience data which is not stored into database, but it could be in the future
// license: MIT

const workExperienceData = [
  {
    position: "PYTHON DEVELOPER, FULL-STACK DEVELOPER, C++ GAME DEVELOPER",
    company: "Freelancer",
    date: "01/2025 – Present",
    details: [
      "Currently working on an in-house video game developed in C++ using the SFML library, preparing it for release on the Steam platform.",
      "Working on a personal website using the FARMD stack (FastAPI, React, MongoDB, Docker).",
    ],
    achievements: ["Successfully deployed personal website on Google Cloud Platform (GCP) using GitHub Actions."],
    technologies: { 
      language: ["Python", "TypeScript", "JavaScript", "C++"], 
      gui: ["SFML"],
      erp: [],
      backend: ["FastAPI", "REST API"], 
      frontend: ["React"], 
      sql: [], 
      nosql: ["MongoDB"], 
      devops: ["GitHub CI/CD", "Docker"], 
      cloud: ["GCP"],
      monitoring: [],
      architecture: ["MVC", "Microservices"],
      versioning: ["Git", "Jira", "Confluence"],
      testing: ["Pytest", "Unittest"],
    },
  },
  {
    position: "PYTHON DEVELOPER, FULL-STACK DEVELOPER, C++ GAME DEVELOPER",
    company: "ONE CODE, obrt za računalno programiranje, vl. Matej Grozdanić, Đakovo",
    date: "12/2022 – 01/2025",
    details: [
      "Have been working on an in-house video game developed in C++ using the SFML library, preparing it for release on the Steam platform.",
      "Collaborated with multiple clients on diverse projects utilizing Python and FastAPI.",
    ],
    achievements: [
      "Designed and implemented a customized user permissions system using the FastAPI framework.",
      "Developed a Bash script to export data from PostgreSQL in a Docker container to the file system."
    ],
    technologies: { 
      language: ["Python", "JavaScript", "C++"], 
      gui: ["SFML"],
      erp: [],
      backend: ["FastAPI","REST API"], 
      frontend: ["React"], 
      sql: ["PostgreSQL"], 
      nosql: [], 
      devops: ["GitLab CI/CD", "Docker"], 
      cloud: ["AWS"],
      monitoring: [],
      architecture: ["MVC", "Microservices"],
      versioning: ["Git", "Jira", "Confluence"],
      testing: ["Pytest", "Unittest"],
    },
  },
  {
    position: "PYTHON DEVELOPER, FULL-STACK DEVELOPER",
    company: "Freelancer",
    date: "02/2022 – 12/2022",
    details: [
      "Built and currently maintain a website for an association with Flask backend, Bootstrap frontend, and SQLite database.",
      "Developed a website for a perfume store using Flask, Bootstrap, and PostgreSQL."
    ],
    achievements: [
      "Successfully deployed the PIA association's website on PythonAnywhere hosting platform.",
    ],
    technologies: { 
      language: ["Python", "JavaScript"],
      gui: [],
      erp: [], 
      backend: ["Flask"], 
      frontend: ["Bootstrap"], 
      sql: ["PostgreSQL", "SQLite"], 
      nosql: [], 
      devops: ["GitLab CI/CD", "Docker"], 
      cloud: ["PythonAnywhere", "Heroku"],
      monitoring: [],
      architecture: ["MVC"],
      versioning: ["Git"],
      testing: ["Pytest", "Unittest"],
    },
  },
  {
    position: "PYTHON & POSTGRESQL DEVELOPER",
    company: "Infodom d.o.o., Zagreb",
    date: "02/2021 – 02/2022",
    details: [
      "Contributed to the development of a business ERP application built on the Odoo framework.",
      "Led the design and development of JSON REST APIs within the Odoo framework.",
      "Developed an inventory management module within the Odoo framework.",
    ],
    achievements: [
      "Created a Python script that extracts data from a PostgreSQL database and generates reports in Excel format.",
      "Created a barcode generation module for Odoo using Python.",
    ],
    technologies: { 
      language: ["Python", "Bash"], 
      gui: [],
      erp: ["Odoo"],
      backend: ["REST API", "SOAP API"], 
      frontend: [], 
      sql: ["PostgreSQL"], 
      nosql: ["MongoDB"], 
      devops: ["GitHub CI/CD", "Docker"], 
      cloud: [],
      monitoring: [],
      architecture: ["MVC", "Microservices"],
      versioning: ["Github", "Jira", "Confluence"],
      testing: ["Unittest", "Postman", "SoapUI"],
    },
  },
  {
    position: "PYTHON DEVELOPER",
    company: "AVL-AST d.o.o., Zagreb",
    date: "10/2019 – 02/2021",
    details: [
      "Worked on developing tools for preparing and analyzing data obtained from simulations of physical processes.",
      "Worked on developing tools for system testing software."
    ],
    achievements: [
      "Extracted and processed Abaqus binary file data for use in a Python project.",
    ],
    technologies: { 
      language: ["Python", "Bash"], 
      gui: ["PyQt5"],
      erp: [],
      backend: ["FastAPI", "REST API",], 
      frontend: [], 
      sql: ["MySQL"], 
      nosql: [], 
      devops: ["Docker"], 
      cloud: ["Amazon S3"],
      monitoring: [],
      architecture: ["MVC", "Microservices"],
      versioning: ["GitLab"],
      testing: ["Unittest", "Postman"],
    },
  },
];

export default workExperienceData;