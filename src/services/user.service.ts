import { IUserInfo } from "../interface";

export class UserService {
  addUser(userInfo: IUserInfo) {
    return userInfo;
  }

  getUserInfo(id: string) {
    return {
      name: "zhangsan",
      age: 30
    };
  }
}
