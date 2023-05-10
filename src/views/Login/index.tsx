import { ChangeEvent, useEffect, useState } from "react";
import { Input, Space, Button } from "antd";
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import "./login.less";
const View = () => {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);
  // 获取用户输入账号
  const [userNameVal, setUserNameVal] = useState("");
  // 获取用户输入密码
  const [passwordVal, setPasswordVal] = useState("");
  // 获取用户输入验证码
  const [captchaVal, setCaptchaVal] = useState("");
  // Input点击获取值
  const userNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };
  const captchValChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  // 登录按钮事件
  const toLogin = () => {
    console.log(userNameVal, passwordVal, captchaVal);
  };
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      <div className={styles.loginBox + " loginbox"}>
        <div className={styles.title}>
          <h1>React Box</h1>
          <p>Strive Everyday</p>
        </div>
        <div className="form">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Input placeholder="用户们" onChange={userNameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchValChange} />
              <div className="captchaImg">
                <img
                  src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683824400&t=402b5482890ae2358143c5c0090edc6c"
                  height="38"
                  alt=""
                />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block onClick={toLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default View;
