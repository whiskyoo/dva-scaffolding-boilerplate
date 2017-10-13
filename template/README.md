# dva-scaffolding

一个基于dva的脚手架，dva的基本介绍和api可以参考[官方github](https://github.com/dvajs/dva)

## 项目结构

项目的目录结构仅供参考，可以根据自己的需求进行重新组织

``` shell
├── build
│   └── ...webpack的相关配置文件
├── config
│   └── ...运行脚本时的配置文件
├── mock
│   └── ...mock数据文件
├── src
│   ├── app
│   ├── assets
│       └── ...存放静态资源文件
│   ├── components
│       └── ...公共组件
│   ├── models
│       └── ...dva的model统一放这里管理
│   ├── services
│       └── ...不知道怎么描述
│   ├── utils
│       └── ...一些公用工具类方法统一放这里管理
│   ├── views
│       └── ...视图（业务逻辑）组件
│   ├── main.js ...入口文件
│   ├── router.js ...路由配置
├── static
│   └── ...引用第三方的一些静态资源文件
├── index.html
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
```

## scripts

运行下面脚本之前请确保运行了`npm install` or `cnpm install`安装了开发需要的依赖包

``` shell
  npm start or npm run dev // 启动一个开发环境server
  npm run dev:noproxy // 启动没有代理的开发环境server
  npm run mock // 启动一个带有mock服务的server
  npm run build // build一个生产环境的包
  npm run lint // 运行eslint检查语法
```

## mocke server

自带mock服务，在后端接口还没有完成前，可以根据接口文档编写一些mock数据

### 使用方法

默认mock数据存放在项目根目录的mock文件夹，暂时不支持自定义mock文件夹

mock/example.js

``` js
module.exports = {
  'GET /api/example': function (req, res) {
    res.json({
      "success": true,
      "meta": {
        "code": 200
      },
      "data": {
        "name" : "expample",
        "age": 18
      }
    });
  },
};
```

然后访问`http://localhost:3000/api/example`会返回下面结果

``` json
{
  "success": true,
  "meta": {
    "code": 200
  },
  "data": {
    "name" : "expample",
    "age": 18
  }
}
```

支持http的所有方法，对应把`GET`替换成相应的`method`即可

### mock数据编写

推荐是使用[mockjs](http://mockjs.com/)生成mock数据，使用方法官方有详细的文档和示例。

## proxy setting

支持代理，只需要在`config/index.js`文件配置`proxyTable`字段即可

``` js
{
  ...
  proxyTable: {
    '/api': {
      target: 'http://example.com',
      changeOrigin: true
    }
  }
  ...
}
```

当访问`http://localhost:300/api/user`时，就会代理到`http://example.com/api/user`

详细的配置以及选项可以查看[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)的文档

## CSS Modules

支持 `CSS Modules`，如果需要使用 `CSS Modules`，对应的文件名改成指定的后缀名`.modules.extension`，如下：

- css      -> .modules.css
- postcss  -> .modules.postcss
- less     -> .modules.less
- sass     -> .modules.sass
- scss     -> .modules.sass
- stylus   -> .modules.stylus
- styl     -> .modules.styl

## 参考链接

- [React and redux based, lightweight and elm-style framework](https://github.com/dvajs/dva)
- [Simple CLI for scaffolding Vue.js projects](https://github.com/vuejs/vue-cli)
- [A simple mock middleware for express](https://github.com/LingyuCoder/express-mock-middleware)
