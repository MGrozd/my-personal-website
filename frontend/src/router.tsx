import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
// import Home, { loader as homeLoader } from './routes/home'
import Login from './routes/login'
import Profile from './routes/profile'
import Register from './routes/register'
import Root from './routes/root'
import SSOLogin, { loader as ssoLoader } from './routes/sso.login'
// import User from './routes/user'
import Users, { loader as usersLoader } from './routes/users'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Home />, loader: homeLoader },
      { index: true, element: <Profile />},
      {
        path: 'sso-login-callback',
        element: <SSOLogin />,
        loader: ssoLoader,
      },
      // {
      //   path: 'profile',
      //   element: <Profile />,
      // },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      // {
      //   path: 'user',
      //   element: <User />,
      // },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
