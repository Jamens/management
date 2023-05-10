import { useSelector, useDispatch } from "react-redux";
const View = () => {
  const { num } = useSelector((state: RootState) => ({
    num: state.NumStatus.num,
  }));
  const { arr } = useSelector((state: RootState) => ({
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
  return (
    <div className="about">
      <p>这是Page1组件</p>
      <p>{num}</p>
      <p>数组{arr}</p>
      <button onClick={changeNum}>add</button>
      <button onClick={changeNum1}>add1</button>
      <button onClick={changeArr}>数组</button>
    </div>
  );
};
export default View;
