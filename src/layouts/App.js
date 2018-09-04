import React from 'react';
import { Router, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const App = ({ history, app }) => {
  const IndexPage = dynamic({
    app,
    component: () => import(/* webpackChunkName: "home-view" */ '../pages/home')
  });
  const Users = dynamic({
    app,
    models: () => [
      import(/* webpackChunkName: "users-module" */ '../pages/users/model')
    ],
    component: () =>
      import(/* webpackChunkName: "users-view" */ '../pages/users')
  });
  const Error = dynamic({
    app,
    component: () => import(/* webpackChunkName: "error-view" */ '../pages/404')
  });
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/error" component={Error} />
        </div>
      </Router>
    </LocaleProvider>
  );
};

export default App;
