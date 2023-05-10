import { useSelector, useDispatch } from "react-redux";
const View = () => {
  const { num } = useSelector((state: RootState) => ({
    num: state.num,
  }));
  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({ type: "add" });
  };
  return (
    <div className="about">
      <p>这是Page1组件</p>
      <p>{num}</p>
      <button onClick={changeNum}></button>
    </div>
  );
};
export default View;
