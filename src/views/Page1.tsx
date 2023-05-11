import { useSelector, useDispatch } from "react-redux";
import numStatus from "@/store/NumStatus";
const View = () => {
  const { num, arr } = useSelector((state: RootState) => ({
    num: state.NumStatus.num,
    arr: state.ArrStatus.arr,
  }));

  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({ type: "add" });
  };
  const changeNum1 = () => {
    dispatch({ type: "add1", val: 10 });
  };
  const changeArr = () => {
    dispatch({ type: "arrAdd", val: 10 });
  };
  const awaitNum1 = () => {
    dispatch({ type: "add3", val: 10 });
  };
  const asyncNum = () => {
    // 最开始写法
    // dispatch({ type: "add4", val: 10 });
    dispatch(numStatus.asyncActions.asyncAdd4);
  };
  return (
    <div className="about">
      <p>这是Page1组件</p>
      <p>{num}</p>
      <p>数组{arr}</p>
      <button onClick={changeNum}>add</button>
      <button onClick={changeNum1}>add1</button>
      <button onClick={changeArr}>数组</button>
      <button onClick={awaitNum1}>同步</button>
      <button onClick={asyncNum}>异步</button>
    </div>
  );
};
export default View;
