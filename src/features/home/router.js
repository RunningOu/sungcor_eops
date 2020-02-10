import { Home } from './'

export default {
  path: '/',
  name: 'Home', 
  childRoutes: [
    { 
      path: 'Home',
      name: 'Home',
      component: Home,
      isIndex: true,
    },
  ],
}