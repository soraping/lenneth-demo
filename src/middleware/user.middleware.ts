import { IMiddleware, Middleware, Next, TNext, HeaderParams } from "lenneth";

@Middleware()
export class UserAuth implements IMiddleware {
  async use(@HeaderParams() headers: any, @Next() next: TNext) {
    await next();
  }
}

@Middleware()
export class RuleAuth implements IMiddleware {
  async use(@HeaderParams() headers: any, @Next() next: TNext) {
    await next();
  }
}
