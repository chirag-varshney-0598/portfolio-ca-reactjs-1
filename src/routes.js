import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import HomeLayout from 'src/layouts/HomeLayout'

export const routes = [
  {
    exact: true,
    path: '/',
    layout: HomeLayout,
    component: lazy(() => import('src/views/pages/Home/LandingPage/Index')),
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/NotFound')),
  },

  {
    exact: true,
    path: '/about',
    layout: HomeLayout,
    component: lazy(() => import('src/views/pages/Static/About')),
  },
  {
    exact: true,
    path: '/services',
    layout: HomeLayout,
    component: lazy(() => import('src/views/pages/Static/Services')),
  },

  {
    component: () => <Redirect to="/404" />,
  },
]
