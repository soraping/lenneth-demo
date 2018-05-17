import {
  Controller,
  Autowired,
  Post,
  Get,
  RequestBody,
  PathVariable,
  Response,
  TResponse,
  UseBefore,
  Description
} from "lenneth";
import { UserService } from "../services";
import { IUserInfo } from "../interface";
import { UserAuth, RuleAuth } from "../middleware";

@Controller("/user")
export class UserController {
  @Autowired() userService: UserService;

  @Post("/add")
  @Description("添加会员")
  @UseBefore(UserAuth, RuleAuth)
  async addUser(
    @RequestBody() user: IUserInfo,
    @Response() response: TResponse
  ) {
    response.body = this.userService.addUser(user);
  }

  @Get("/detail/:userId")
  @UseBefore(UserAuth)
  @Description("查询会员")
  async getUser(
    @PathVariable("userId") userId: string,
    @Response() response: TResponse
  ) {
    response.body = this.userService.getUserInfo(userId);
  }
}
