import { LennethApplication, ILenneth, ServerSettings } from "lenneth";
import * as logger from "koa-logger";
import { UserController } from "./src/apis";

@ServerSettings({
  port: 8081,
  imports: {
    "/apis": UserController
  }
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
