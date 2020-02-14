import { 
  Order, 
  Create, 
  Form, 
  SelectDevice,
  Details,
  FormHandle} from './'

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
    },{ 
      path: ':modal',
      name: 'Details',
      component: Details
    },{ 
      path: ':modal/handle',
      name: 'FormHandle',
      component: FormHandle
    }
  ],
}