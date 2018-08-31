import React from 'react'
import { Router, Route } from 'dva/router'
import dynamic from 'dva/dynamic'

const App = ({history, app}) => {
  const Users = dynamic({
    app,
    name: 'users',
    models: () => [import(/* webpackChunkName: "users-model" */ '../pages/users/model')],
    component: () => import(/* webpackChunkName: "users-page"  */ '../pages/users')
  })

  const IndexPage = dynamic({
    app,
    component: () => import(/* webpackChunkName: "index-page"  */ '../pages/index')
  })


  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>  
  )
}

export default App