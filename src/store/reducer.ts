import handleNum from "./NumStatus";
const defaultState = {
  ...handleNum.state,
};
let reducer = (state = defaultState, action: { type: string; val: number }) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case handleNum.add:
      handleNum.action[handleNum.add](newState, action);
      break;
    case handleNum.add1:
      handleNum.action[handleNum.add1](newState, action);
      break;
    default:
      break;
  }
  return newState;
};
export default reducer;
