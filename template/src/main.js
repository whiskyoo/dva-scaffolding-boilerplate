import dva from 'dva';
import { createLogger } from 'redux-logger';

// 1.初始化
const onAction = [];
// 开发环境启用redux-logger
/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'development') {
  onAction.push(createLogger());
}

const app = dva({
  onAction,
  // 监听全局异常
  // onError: (error, dispatch) => {
  //   // do something in here...
  // }
});

// 2.插件
// app.use({});

// 3.模块
// import exampleModel from '@/model/example';
// app.model(exampleModel);

// 4.路由配置
import router from '@/router';
app.router(router);

// 5.启动app
app.start('#root');
