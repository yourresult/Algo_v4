import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import JobsListPage from './pages/HomePage';
import JobSinglePost from './pages/JobSinglePage';
import Orders from './pages/Order';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...JobSinglePost,
        path: '/job/:slug'
      },
      {
        ...Orders,
        path: '/orders'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...JobsListPage,
        path: '/jobs'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
