export default {
  state: {
    num: 20,
  },
  action: {
    add(newState: number, action: { type: string }) {
      newState.num++;
    },
    add1(newState: number, action: { type: string; val: number }) {
      newState.num += action.val;
    },
  },
  add: "add",
  add1: "add1",
};