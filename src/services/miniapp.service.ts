import * as requestPromise from "request-promise";
import { ICode } from "../interface";
const APPID = "";
const SECRET = "";
export class MiniAppClass {
  async getUserOpenid(data: ICode) {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${
      data.code
    }&grant_type=authorization_code`;

    let openIdData = await requestPromise({
      url
    });
    return JSON.parse(openIdData);
  }
}
