import { Overview, Details } from './'

export default {
  path: '/alert',
  name: 'alert', 
  childRoutes: [
    { 
      path: 'Overview',
      name: 'Overview',
      component: Overview
    },
    { 
      path: 'Details',
      name: 'Details',
      component: Details
    }
  ],
}