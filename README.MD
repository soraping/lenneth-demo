### lenneth-demo

> 说明

在 lenneth 中只做抽象出 apis , middleware, services 这三个模块， 工程目录如下:

![lenneth基本目录](http://ww1.sinaimg.cn/large/e221b779gy1fre66v3lqvj20c80eawez.jpg)

>  第三方中间件

lenneth 已经集成了 koa2, koa-bodyparser, koa-router 这三个基础库，已经基本满足日常开发，如果需要其他的 koa 库，可以自行添加

```javascript
import { LennethApplication, ILenneth, ServerSettings } from "lenneth";
import { logger } from "koa-logger";
import { UserController } from "./src/apis";

@ServerSettings({
  port: 8081,
  imports: {
    apis: UserController
  }
})
class App extends LennethApplication implements ILenneth {
  $onMountingMiddlewares() {
    // 引入logger中间件
    this.use(logger());
  }
}
```

> 使用

```bash
yarn
# or
npm install
```

```bash
yarn build
```
