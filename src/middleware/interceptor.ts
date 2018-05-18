/**
 * 拦截器
 */
import { IMiddleware, Middleware, HeaderParams, Next, TNext } from "lenneth";

@Middleware()
export class Interceptor implements IMiddleware {
  async use(@HeaderParams() header: any, @Next() next: TNext) {
    console.log("Interceptor", header);
    await next();
  }
}
