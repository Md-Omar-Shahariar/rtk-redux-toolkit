const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounter");
const { fetchPosts } = require("./features/post/postSlice");
// subscribe to state changes
// console.log(`initialState ${JSON.stringify(store.getState())}`);
store.subscribe(() => {
  // console.log(store.getState());
});

// disptach actions
store.dispatch(fetchPosts());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterActions.increment(2));

// store.dispatch(dynamicCounterActions.increment(3));

// store.dispatch(dynamicCounterActions.decrement(2));
