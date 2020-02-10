import { Order, Create, Form, SelectDevice} from './'

export default {
  path: '/order',
  name: 'Order', 
  childRoutes: [
    { 
      path: 'Order',
      name: 'Order',
      component: Order,
      isIndex: true
    },{ 
      path: 'Create',
      name: 'Create',
      component: Create
    },{
      path: 'Create/Form/:modal',
      name: 'Form',
      component: Form
    },{
      path: 'Create/Form/:modal/SelectDevice',
      name: 'SelectDevice',
      component: SelectDevice
    }
  ],
}