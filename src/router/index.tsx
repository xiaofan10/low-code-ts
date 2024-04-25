import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../views/Login'
import Home from '../views/Home'
import Register from '../views/Register'
import MainLayout from '../views/Layout/MainLayout'
import ManageLayout from '../views/Layout/ManageLayout'
import List from '../views/Manage/List'
import QuestionLayout from '../views/Layout/QuestionLayout'
import NotFount from '../views/NotFount'

export const LOGIN_PATH = '/login'
export const HOME_PATH = '/'
export const REGISTER_PATH = '/register'
export const MANAGE_PATH = '/manage'

const routerConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: LOGIN_PATH,
        element: <Login />,
      },
      {
        path: REGISTER_PATH,
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="list" replace />,
          },
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <List />,
          },
          {
            path: 'trash',
            element: <List />,
          },
        ],
      },
      {
        path: '/question',
        element: <QuestionLayout />,
      },
      {
        path: '*',
        element: <NotFount />,
      },
    ],
  },
]

export default createBrowserRouter(routerConfig)
