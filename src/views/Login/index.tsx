import { ChangeEvent, useEffect, useState } from "react";
import { Input, Space, Button, message } from "antd";
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { CaptchaAPI, LoginAPI } from "@/request/api";
import { useNavigate } from "react-router-dom";
import "./login.less";
const View = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    initLoginBg();
    getCaptchaImg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);
  // 获取用户输入账号
  const [userNameVal, setUserNameVal] = useState("qdtest1");
  // 获取用户输入密码
  const [passwordVal, setPasswordVal] = useState("123456");
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
  const [captchaImg, setCaptchaImg] = useState("");
  const getCaptchaImg = async () => {
    const CaptchaAPIRes = await CaptchaAPI();
    console.log(CaptchaAPIRes);
    if (CaptchaAPIRes.code === 200) {
      setCaptchaImg(`data:image/gif;base64,${CaptchaAPIRes.img}`);
      localStorage.setItem("uuid", CaptchaAPIRes.uuid);
    }
  };
  // 登录按钮事件
  const toLogin = async () => {
    console.log(userNameVal, passwordVal, captchaVal);
    if (!userNameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning("请输入完整后再试");
      return;
    }
    const loginAPIRes = await LoginAPI({
      username: userNameVal,
      password: passwordVal,
      code: captchaVal,
      uuid: localStorage.getItem("uuid") as string,
    });
    if (loginAPIRes.code === 200) {
      message.success("登陆成功");
      localStorage.setItem("token", loginAPIRes.token);
      navigateTo("/page1");
      localStorage.removeItem("uuid");
    }
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
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img src={captchaImg} height="38" alt="" />
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
