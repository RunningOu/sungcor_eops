import { User, Login } from './'

export default {
  path: '/user',
  name: 'User', 
  childRoutes: [
    { 
      path: 'User',
      name: 'User',
      component: User,
      isIndex: true
    },{
      path: 'Login',
      name: 'Login',
      component: Login,
    }
  ],
}