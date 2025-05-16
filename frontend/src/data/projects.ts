// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the user's projects data which is not stored into database, but it could be in the future
// license: MIT

const projectsData = [
    {
        name: "PERSONAL WEBSITE",
        description: "Website made to present personal information which is made in FARM stack(FastAPI, React, MongoDB)",
        start_date: "05/2025",
        end_date: "present",
        url: "https://matejgrozdanic.com",
        repository: "https://github.com/MGrozd/my-personal-website",
        technologies: "Python, FastAPI, TypeScript, React, ReactRouter, MaterialUI, MongoDB, Github, Docker, Google Cloud",
    },
    {
        name: "PIA ASSOCIATION WEBSITE",
        description: "Website for PIA association made in Flask with Bootstrap",
        start_date: "01/2025",
        end_date: "present",
        url: "https://piadjakovo.pythonanywhere.com",
        repository: "",
        technologies: "Python, Flask, Bootstrap, GitLab, PythonAnywhere",
    },
];

export default projectsData;