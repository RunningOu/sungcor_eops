import { App, PageNotFound } from '../features/common'
import homeRoute from '../features/home/router'
import orderRoute from '../features/order/router'
import deviceRoute from '../features/device/router'
import rmonRoute from '../features/rmon/router'
import userRoute from '../features/user/router'
import alertRoute from '../features/alert/router'
import deviceShowRoute from '../features/deviceOnline/router'

import _ from 'lodash'

const childRoutes = [
  homeRoute,
  orderRoute,
  deviceRoute,
  rmonRoute,
  userRoute,
  alertRoute,
  deviceShowRoute
]

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    ...childRoutes,
    { path: '*', name: '404 Page not found', component: PageNotFound },
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
}]

function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return
  }

  const indexRoute = _.find(route.childRoutes, (child => child.isIndex))
  if (indexRoute) {
    const first = { ...indexRoute }
    first.path = ''
    first.exact = true
    first.autoIndexRoute = true
    route.childRoutes.unshift(first)
  }
  route.childRoutes.forEach(handleIndexRoute)
}

routes.forEach(handleIndexRoute)
export default routes