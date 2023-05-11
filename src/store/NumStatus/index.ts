const store = {
  state: {
    num: 20,
  },
  actions: {
    add(newState: { num: number }) {
      newState.num++;
    },
    add1(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    },
    add3(newState: { num: number }) {
      newState.num++;
    },
    add4(newState: { num: number }) {
      setTimeout(() => {
        newState.num++;
      });
    },
  },
  // 优化redux-thunk的异步写法
  asyncActions: {
    asyncAdd4(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: "add4" });
      }, 1000);
    },
  },
  actionName: {},
};
let actionName = {};
for (let key in store.actions) {
  actionName[key] = key;
}
store.actionName = actionName;
export default store;
