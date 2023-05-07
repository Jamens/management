import Comp1 from "./components/Comp1/index";
import Comp2 from "./components/Comp2/index";
function App() {
  return (
    <>
      <div className="App">
        顶级组件
        <Comp1 />
        <Comp2 />
      </div>
    </>
  );
}

export default App;
