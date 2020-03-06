import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

function renderRouteConfig(routes, contextPath) {
  /**
   * 递归创建路由目录
   */
  const children = []
  const renderRoute = (item, routeContextPath) => {
    let newContextPath
    if (/^\//.test(item.path)) {
      newContextPath = item.path
    } else {
      newContextPath = `${routeContextPath}/${item.path}`
    }
    newContextPath = newContextPath.replace(/\/+/g, '/')
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfig(item.childRoutes, newContextPath)
      children.push(<Route key={newContextPath} render={props => <item.component {...props}>{childRoutes}</item.component>} path={newContextPath} />)
    } else if (item.component) {
      children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath))
    }
  }
  routes.forEach(item => renderRoute(item, contextPath))
  return <Switch>{children}</Switch>
}

function App(props) {
  const children = renderRouteConfig(props.routeConfig, '/')
  return (
    <Provider store={props.store}>
      <Router>{children}</Router>
    </Provider>
  );
}

export default App;

