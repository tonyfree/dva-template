import React from 'react'
import { Router, Route } from 'dva/router'

import IndexPage from '../pages/home'
import Users from '../pages/users'

const App = ({history}) => {
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