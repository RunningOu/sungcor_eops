import { Rmon } from './'

export default {
  path: '/',
  name: 'Rmon', 
  childRoutes: [
    { 
      path: 'Rmon',
      name: 'Rmon',
      component: Rmon,
      isIndex: true
    },
  ],
}