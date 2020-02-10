import { Device } from './'

export default {
  path: '/',
  name: 'Device', 
  childRoutes: [
    { 
      path: 'Device',
      name: 'Device',
      component: Device,
      isIndex: true
    },
  ],
}