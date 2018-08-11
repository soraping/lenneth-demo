import {
  Middleware,
  IMiddleware,
  Response,
  TResponse,
  Next,
  TNext,
  IContext
} from "lenneth";

@Middleware()
export class OverResponse implements IMiddleware {
  async use(
    @Response() response: TResponse,
    @Next() next: TNext,
    ctx: IContext
  ) {
    // 执行前面所有的中间件
    await next();
    console.log("ctx");
    let data = await response.body;
    ctx.body = {
      result: "OK",
      data
    };
  }
}
