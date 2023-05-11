import handleNum from "./index";

let reducer = (
  state = { ...handleNum.state },
  actions: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  // switch (action.type) {
  //   case handleNum.add:
  //     handleNum.action[handleNum.add](newState, action);
  //     break;
  //   case handleNum.add1:
  //     handleNum.action[handleNum.add1](newState, action);
  //     break;
  //   default:
  //     break;
  // }
  for (let key in handleNum.actionName) {
    if (actions.type === handleNum.actionName[key]) {
      handleNum.actions[handleNum.actionName[key]](newState, actions);
      break;
    }
  }
  return newState;
};
export default reducer;
