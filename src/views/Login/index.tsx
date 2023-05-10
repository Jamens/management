import { useEffect } from "react";
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
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
    </div>
  );
};
export default View;
