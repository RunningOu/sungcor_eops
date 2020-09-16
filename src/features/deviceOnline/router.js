import { DeviceShow,ServerIP} from './'

export default {
  path: '/deviceOnline',
  name: 'deviceOnline', 
  childRoutes: [
    { 
      path: 'DeviceShow',
      name: 'DeviceShow',
      component: DeviceShow
     },
    { 
      path: 'ServerIP',
      name: 'ServerIP',
      component: ServerIP
    }
  ],

}