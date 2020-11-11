import { 
  Order, 
  Create, 
  Form, 
  SelectDevice,
  Details,
  FormHandle,
  ProjectSpread,
  ProjectDetail
} from './'
import { SelectView, FormHandleBa } from './bacth'
import gisQpShow from './components/gisQpShow'

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
      path: 'selectView',
      name: 'selectView',
      component: SelectView
    },{ 
      path: 'FormHandleBa',
      name: 'FormHandleBa',
      component: FormHandleBa
    },{ 
      path: 'gisqp',
      name: 'gisqp',
      component: gisQpShow
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
    },
    {
      path: 'ProjectSpread/:type',
      name: 'ProjectSpread',
      component: ProjectSpread
    },
    {
      path: 'ProjectSpread/:type/ProjectDetail',
      name: 'ProjectDetail',
      component: ProjectDetail
    }
  ],
}