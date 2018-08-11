/**
 * 拦截器
 */
import {
  IMiddleware,
  Middleware,
  HeaderParams,
  Next,
  Request,
  Response,
  TResponse,
  TRequest,
  TNext,
  IContext
} from "lenneth";

@Middleware()
export class Interceptor implements IMiddleware {
  async use(
    @HeaderParams() header: any,
    @Next() next: TNext,
    @Request() request: TRequest,
    @Response() response: TResponse,
    ctx: IContext
  ) {
    console.log(request.ip);
    console.log("Interceptor", header);
    await next();
  }
}
