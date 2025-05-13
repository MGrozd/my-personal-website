import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Profile from './routes/profile'
import Root from './routes/root'

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
    ],
  },
]

export const router = createBrowserRouter(routes)
