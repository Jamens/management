// 专门定义请求，响应类型
interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
// 登录请求
interface LoginAPIReq {
  username: string;
  password: string;
  code: number | string;
  uuid: string;
}
// 登陆响应
interface LoginAPIRes {
  msg: string;
  code: number;
  token: string;
}
