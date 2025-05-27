// author: Matej Grozdanić
// date: 2025-05-16
// description: This is the user's skills data which is not stored into database, but it could be in the future
// license: MIT

// 1. Familiar (Beginner)
// 🧠 What they can do:
//     - Writes and runs very simple scripts.
//     - Understands basic syntax like print(), variables, loops, and conditionals.
//     - Uses simple data types (strings, numbers, lists, dictionaries).
//     - Often follows along with tutorials or online courses.
// 💡 Example:
//     - Makes a script that asks for your name and greets you.
// 👤 Who understands this:
//     - Someone new to programming or switching from another language. They may be a student, hobbyist, or someone just starting their coding journey.

// 2. Working Knowledge (Basic Use)
// 🧠 What they can do:
//     - Writes small, useful programs or automations.
//     - Organizes code using functions and modules.
//     - Reads and writes files.
//     - Uses built-in libraries like os, random, math.
//     - Can fix basic bugs.
// 💡 Example:
//     - Automates file cleanup in a directory or makes a random password generator.
// 👤 Who understands this:
//     - A casual developer, junior engineer, or self-taught coder using Python to solve everyday problems or work tasks.

// 3. Proficient (Intermediate)
// 🧠 What they can do:
//     - Uses list comprehensions, generators, and exceptions effectively.
//     - Understands and uses Object-Oriented Programming.
//     - Familiar with virtual environments, pip, and popular libraries like requests, pandas.
//     - Writes clean, reusable, and modular code.
// 💡 Example:
//     - Builds a script that pulls data from an API and processes it into a spreadsheet.
// 👤 Who understands this:
//     - A regular Python user—maybe a data analyst, backend developer, or someone writing production-level scripts and tools.

// 4. Expert (Advanced)
// 🧠 What they can do:
//     - Understands advanced features like decorators, context managers, metaclasses.
//     - Knows the difference between multithreading and multiprocessing.
//     - Understands the Python memory model and Global Interpreter Lock (GIL).
//     - Can profile and optimize code performance.
//     - Writes scalable, maintainable production systems.
// 💡 Example:
//     - Builds a highly concurrent system for processing large datasets in real time.
// 👤 Who understands this:
//     - An experienced software engineer, tech lead, or architect working on complex systems or large-scale projects.

// 5. Authority (Core-Level)
// 🧠 What they can do:
//     - Writes tools, libraries, or frameworks used by others.
//     - Contributes to Python open-source projects—or Python itself.
//     - Understands how CPython is built and can read its source code.
//     - Influences the Python community or speaks at major conferences.
// 💡 Example:
//     - Maintains a popular Python package, contributes to the Python Enhancement Proposals (PEPs), or gives talks at PyCon.
// 👤 Who understands this:
//     - A Python core developer, prominent open-source contributor, or influential educator/leader in the Python community.


const skillsData = [
    {
        name: "PYTHON",
        description: "Python is a high-level, interpreted programming language known for its readability and versatility.",
        category: "Programming Language",
        level: "Expert",
        experience: "5 years",
        urls: ["https://www.python.org/"],
        references: [
            { name: "", relation: "Mentor", contact: "", path: "../../public/Pismo_preporuke_za_Mateja_Grozdanića.pdf" }
        ],
    },
    {
        name: "UNIT TESTING",
        description: "Unit testing is a software testing technique where individual units of source code are tested to determine if they are fit for use.",
        category: "Testing",
        level: "Proficient",
        experience: "4 years",
        urls: ["https://docs.python.org/3/library/unittest.html", "https://docs.pytest.org/en/6.2.x/"],
        references: [],
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
            { name: "", relation: "", contact: "", path: "../../public/Recommendation.pdf" }
        ],
    },
    {
        name: "REACT / MATERIAL UI / BOOTSTRAP",
        description: "React, TypeScript, Material UI, and Bootstrap are libraries and frameworks for building modern web applications.",
        category: "Frontend Framework",
        level: "Proficient",  
        experience: "1 years",
        urls: ["https://reactjs.org/", "https://mui.com/", "https://getbootstrap.com/"],
        references: [],
    },
    {
        name: "HTML / CSS / JS / TS",
        description: "HTML, CSS, JavaScript and TypeScript are the core technologies for building web pages and web applications.",
        category: "Web Development",
        level: "Working Knowledge",
        experience: "3 years",
        urls: ["https://www.w3schools.com/", "https://developer.mozilla.org/en-US/docs/Web"],
        references: [],
    },
    {
        name: "REST API / SOAP API",
        description: "REST (Representational State Transfer) is an architectural style for designing networked applications.",
        category: "Web Development",
        level: "Proficient",
        experience: "3 years",
        urls: ["https://restfulapi.net/"],
        references: [],
    },
    {
        name: "POSTGRESQL / MYSQL / SQLITE",
        description: "PostgreSQL, MySQL, and SQLite are relational database management systems (RDBMS) used for storing and managing data.",
        category: "SQL Database",
        level: "Working Knowledge",
        experience: "4 years",
        urls: ["https://www.postgresql.org/", "https://www.mysql.com/", "https://www.sqlite.org/"],
        references: [],
    },
    {   
        name: "MONGODB / FIREBASE", 
        description: "MongoDB and Firebase are NoSQL databases used for storing and managing data in web applications.",
        category: "NoSQL Database",
        level: "Working Knowledge",  
        experience: "0.5 years",
        urls: ["https://www.mongodb.com/", "https://firebase.google.com/"],
        references: [],
    },
    {
        name: "GIT / GITHUB / GITLAB",
        description: "Git, GitHub, and GitLab are version control systems and platforms for managing code repositories.",
        category: "Version Control",
        level: "Proficient",
        experience: "4 years",
        urls: ["https://git-scm.com/"],
        references: [],
    },
    {
        name: "CI/CD",
        description: "CI/CD (Continuous Integration and Continuous Deployment) is a  set of practices for automating software development processes.",
        category: "DevOps",
        level: "Working Knowledge",
        experience: "0.5 years",
        urls: ["https://www.atlassian.com/continuous-delivery/ci-vs-ci"],
        references: [],
    },
    {
        name: "DOCKER",
        description: "Docker is a platform for developing, shipping, and running applications in containers.",
        category: "Containerization",
        level: "Working Knowledge",
        experience: "2 years",
        urls: ["https://www.docker.com/"],
        references: [],
    },
    {
        name: "PYTHONANYWHERE / HEROKU",
        description: "PythonAnywhere and Heroku are cloud platforms for deploying and hosting web applications.",
        category: "Cloud Hosting",
        level: "Working Knowledge",
        experience: "0.5 years",
        urls: ["https://www.pythonanywhere.com/", "https://www.heroku.com/"],
        references: [],
    },
    {
        name: "ODOO",
        description: "Odoo is an open-source ERP and CRM software that provides a suite of business applications.",
        category: "ERP",
        level: "Proficient",
        experience: "1 years",
        urls: ["https://www.odoo.com/"],
        references: [],
    },
    {
        name: "C++",
        description: "C++ is a general-purpose programming language known for its performance and efficiency.",
        category: "Programming Language",
        level: "Working Knowledge",
        experience: "2 years",
        urls: ["https://isocpp.org/"],
        references: [],
    },
    {
        name: "SFML",   
        description: "SFML (Simple and Fast Multimedia Library) is a multimedia library for C++.",
        category: "Game Development",
        level: "Expert",
        experience: "2 years",
        urls: ["https://www.sfml-dev.org/"],
        references: [],
    },
    {
        name: "BASH",
        description: "Bash is a Unix shell and command language used for scripting and automating tasks.",
        category: "Scripting",
        level: "Working Knowledge",
        experience: "2 years",
        urls: ["https://www.gnu.org/software/bash/"],
        references: [],
    },
    {
        name: "FREECAD",
        category: "CAD Software",
        description: "FreeCAD is an open-source parametric 3D CAD modeler made primarily to design real-life objects.",
        urls: ["https://www.freecad.org/"],
        level: "Proficient",
        experience: "2 years",
        references: [],
    },
];

export default skillsData;
