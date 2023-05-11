const store = {
  state: {
    arr: [10, 20, 30],
  },
  actions: {
    arrAdd(newState: { arr: number[] }, action: { type: string; val: number }) {
      newState.arr.push(action.val);
    },
  },
  actionName: {
    arrAdd: "arrAdd",
  },
};
let actionName = {};
for (let key in store.actions) {
  actionName[key] = key;
}
export default store;
