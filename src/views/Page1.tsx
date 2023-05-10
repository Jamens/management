import { useSelector, useDispatch } from "react-redux";
const View = () => {
  const { num } = useSelector((state: RootState) => ({
    num: state.num,
  }));
  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({ type: "add" });
  };
  const changeNum1 = () => {
    dispatch({ type: "add1", val: 10 });
  };
  return (
    <div className="about">
      <p>这是Page1组件</p>
      <p>{num}</p>
      <button onClick={changeNum}>add</button>
      <button onClick={changeNum1}>add1</button>
    </div>
  );
};
export default View;
