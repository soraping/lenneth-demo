import { LennethApplication, ILenneth, ServerSettings } from "lenneth";
import * as logger from "koa-logger";
import { UserController, MiniAppController } from "./src/apis";
import { Interceptor, OverResponse } from "./src/middleware";

@ServerSettings({
  port: 8080,
  imports: {
    "/apis": [UserController, MiniAppController]
  },
  response: OverResponse,
  interceptor: Interceptor
})
class App extends LennethApplication implements ILenneth {
  $onMountingMiddlewares() {
    this.use(logger());
  }
}

new App()
  .start()
  .then()
  .catch(e => {
    console.error(e);
  });
