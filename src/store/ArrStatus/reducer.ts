import handleArr from "./index";

let reducer = (
  state = { ...handleArr.state },
  actions: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  // switch (action.type) {
  //   case handleArr.arrAdd:
  //     handleArr.action[handleArr.arrAdd](newState, action);
  //     break;
  //   default:
  //     break;
  // }
  for (let key in handleArr.actionName) {
    if (handleArr.actionName[key] == actions.type) {
      handleArr.actions[handleArr.actionName[key]](newState, actions);
      break;
    }
  }
  return newState;
};
export default reducer;
