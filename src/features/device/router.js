import { Device, Details } from './'

export default {
  path: '/',
  name: 'Device', 
  childRoutes: [
    { 
      path: 'Device',
      name: 'Device',
      component: Device,
      isIndex: true
    },{ 
      path: 'Device/:id',
      name: 'Details',
      component: Details
    },
  ],
}