import handleArr from "./index";

let reducer = (
  state = { ...handleArr.state },
  action: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case handleArr.arrAdd:
      handleArr.action[handleArr.arrAdd](newState, action);
      break;
    default:
      break;
  }
  return newState;
};
export default reducer;
