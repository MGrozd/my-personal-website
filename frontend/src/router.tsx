import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Root from './routes/root'
import Profile from './routes/profile'
import WorkExperience from './routes/experience'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Home />, loader: homeLoader },
      { index: true, element: <Profile />},
      // {
      //   path: 'profile',
      //   element: <Profile />,
      // },
      {
        path: 'experience',
        element: <WorkExperience />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
