// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the user's skills data which is not stored into database, but it could be in the future
// license: MIT

const skillsData = [
    {
        name: "PYTHON",
        description: "Python is a high-level, interpreted programming language known for its readability and versatility.",
        category: "Programming Language",
        level: "Expert",
        experience: "5 years",
        urls: ["https://www.python.org/"],
        certifications: [
            { name: "PCAP - Certified Associate in Python Programming", date: "2021-09-25", url: "https://pythoninstitute.org/credential-verification" }
        ],
        references: [
            { name: "", relation: "Mentor", contact: "" }
        ],
    },
    {
        name: "UNIT TESTING",
        description: "Unit testing is a software testing technique where individual units of source code are tested to determine if they are fit for use.",
        category: "Testing",
        level: "Proficient",
        experience: "4 years",
        urls: ["https://docs.python.org/3/library/unittest.html", "https://docs.pytest.org/en/6.2.x/"],
    },
    {
        name: "PYQT5 / TKINTER",
        description: "PyQt5 and Tkinter are libraries for creating graphical user interfaces (GUIs) in Python.",
        category: "GUI Framework",
        level: "Proficient",
        experience: "2 years",
        urls: ["https://www.riverbankcomputing.com/software/pyqt/intro", "https://docs.python.org/3/library/tkinter.html"],
    },
    {
        name: "FASTAPI / FLASK",
        description: "FastAPI and Flask are web frameworks for Python, used for building web applications and APIs.",
        category: "Backend Framework",
        level: "Expert",
        experience: "3 years",
        urls: ["https://fastapi.tiangolo.com/", "https://flask.palletsprojects.com/"],
        references: [
            { name: "", relation: "", contact: "" }
        ],
    },
    {
        name: "REACT / MATERIAL UI / BOOTSTRAP",
        description: "React, TypeScript, Material UI, and Bootstrap are libraries and frameworks for building modern web applications.",
        category: "Frontend Framework",
        level: "Proficient",  
        experience: "1 years",
        urls: ["https://reactjs.org/", "https://mui.com/", "https://getbootstrap.com/"],
    },
    {
        name: "HTML / CSS / JS / TS",
        description: "HTML, CSS, JavaScript and TypeScript are the core technologies for building web pages and web applications.",
        category: "Web Development",
        level: "Working Knowledge",
        experience: "3 years",
        urls: ["https://www.w3schools.com/", "https://developer.mozilla.org/en-US/docs/Web"],
    },
    {
        name: "REST API / SOAP API",
        description: "REST (Representational State Transfer) is an architectural style for designing networked applications.",
        category: "Web Development",
        level: "Proficient",
        experience: "3 years",
        urls: ["https://restfulapi.net/"],
    },
    {
        name: "POSTGRESQL / MYSQL / SQLITE",
        description: "PostgreSQL, MySQL, and SQLite are relational database management systems (RDBMS) used for storing and managing data.",
        category: "SQL Database",
        level: "Working Knowledge",
        experience: "4 years",
        urls: ["https://www.postgresql.org/", "https://www.mysql.com/", "https://www.sqlite.org/"],
    },
    {   
        name: "MONGODB / FIREBASE", 
        description: "MongoDB and Firebase are NoSQL databases used for storing and managing data in web applications.",
        category: "NOSQL Database",
        level: "Working Knowledge",  
        experience: "0.5 years",
        urls: ["https://www.mongodb.com/", "https://firebase.google.com/"],
    },
    {
        name: "GIT / GITHUB / GITLAB",
        description: "Git, GitHub, and GitLab are version control systems and platforms for managing code repositories.",
        category: "Version Control",
        level: "Proficient",
        experience: "4 years",
        urls: ["https://git-scm.com/"],
    },
    {
        name: "CI/CD",
        description: "CI/CD (Continuous Integration and Continuous Deployment) is a  set of practices for automating software development processes.",
        category: "DevOps",
        level: "Working Knowledge",
        experience: "0.5 years",
        urls: ["https://www.atlassian.com/continuous-delivery/ci-vs-ci"],
    },
    {
        name: "DOCKER",
        description: "Docker is a platform for developing, shipping, and running applications in containers.",
        category: "Containerization",
        level: "Working Knowledge",
        experience: "2 years",
        urls: ["https://www.docker.com/"],
    },
    {
        name: "PYTHONANYWHERE / HEROKU",
        description: "PythonAnywhere and Heroku are cloud platforms for deploying and hosting web applications.",
        category: "Cloud Hosting",
        level: "Working Knowledge",
        experience: "0.5 years",
        urls: ["https://www.pythonanywhere.com/", "https://www.heroku.com/"],
    },
    {
        name: "ODOO",
        description: "Odoo is an open-source ERP and CRM software that provides a suite of business applications.",
        category: "ERP",
        level: "Proficient",
        experience: "1 years",
        urls: ["https://www.odoo.com/"],
    },
    {
        name: "C++",
        description: "C++ is a general-purpose programming language known for its performance and efficiency.",
        category: "Programming Language",
        level: "Working Knowledge",
        experience: "2 years",
        urls: ["https://isocpp.org/"],
    },
    {
        name: "SFML",   
        description: "SFML (Simple and Fast Multimedia Library) is a multimedia library for C++.",
        category: "Game Development",
        level: "Expert",
        experience: "2 years",
        urls: ["https://www.sfml-dev.org/"],
    },
    {   
        name: "BASH",
        description: "Bash is a Unix shell and command language used for scripting and automating tasks.",
        category: "Scripting",
        level: "Working Knowledge",
        experience: "2 years",
        urls: ["https://www.gnu.org/software/bash/"],
    },
    {
        name: "FREECAD",
        category: "CAD Software",
        description: "FreeCAD is an open-source parametric 3D CAD modeler made primarily to design real-life objects.",
        urls: ["https://www.freecad.org/"],
        level: "Proficient",
        experience: "2 years",
    },
];

export default skillsData;
