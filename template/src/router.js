import React from 'react';
import { applyRouterMiddleware, Router, Route } from 'dva/router';
import { useScroll } from 'react-router-scroll';

import App from '@/app/App';

function RouterConfig({ history }) {
  return (
    <Router history={history} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}></Route>
    </Router>
  );
}

export default RouterConfig;
