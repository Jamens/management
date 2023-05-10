import { useEffect } from "react";
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
            <Input placeholder="用户们" />
            <Input.Password placeholder="密码" />
            <div className="captchaBox">
              <Input placeholder="验证码" />
              <div className="captchaImg">
                <img
                  src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683824400&t=402b5482890ae2358143c5c0090edc6c"
                  height="38"
                  alt=""
                />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default View;
