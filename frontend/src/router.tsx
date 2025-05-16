import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Root from './routes/root'
import Profile from './routes/profile'
import WorkExperience from './routes/experience'
import Projects from './routes/projects'
import Skills from './routes/skills'
import Presence from './routes/presence'
import Languages from './routes/languages'
import Educations from './routes/educations'
import Companies from './routes/companies'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Home />, loader: homeLoader },
      { index: true, element: <Profile />},
      {
        path: 'experience',
        element: <WorkExperience />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'presence',
        element: <Presence />,
      },
      {
        path: 'languages',
        element: <Languages />,
      },
      {
        path: 'educations',
        element: <Educations />,
      },
      {
        path: 'companies',
        element: <Companies />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
