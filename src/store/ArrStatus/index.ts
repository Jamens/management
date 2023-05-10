export default {
  state: {
    arr: [10, 20, 30],
  },
  action: {
    arrAdd(newState: { arr: number[] }, action: { type: string; val: number }) {
      newState.arr.push(action.val);
    },
  },
  arrAdd: "arrAdd",
};
