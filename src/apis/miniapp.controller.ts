import {
  Controller,
  Autowired,
  Post,
  Get,
  RequestBody,
  PathVariable,
  Request,
  TRequest,
  Response,
  TResponse,
  UseBefore,
  Description,
  IContext,
  Multer
} from "lenneth";
import { ICode } from "../interface";
import { MiniAppClass } from "../services";

@Controller("/query/user")
export class MiniAppController {
  @Autowired()
  miniAppClass: MiniAppClass;

  @Post("/openid")
  @Description("获取openid")
  async addUser(@RequestBody() data: ICode, @Response() response: TResponse) {
    response.body = await this.miniAppClass.getUserOpenid(data);
  }

  @Post("/upload")
  @Multer()
  async upload(
    @Request() request: TRequest,
    @RequestBody() data: any,
    @Response() response: TResponse,
    ctx: IContext
  ) {
    console.log(ctx);
  }
}
