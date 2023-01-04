const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");

// subscribe to state changes
console.log(`initialState ${JSON.stringify(store.getState())}`);
store.subscribe(() => {
  console.log(store.getState());
});

// disptach actions
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
