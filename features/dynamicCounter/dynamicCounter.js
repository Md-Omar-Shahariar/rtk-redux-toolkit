const { counterActions } = require("../counter/counterSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(counterActions.increment, (state, actions) => {
      state.count++;
    }),
  //   {
  //     ["counter/increment"]: (state, action) => {
  //       state.count++;
  //     },
  //   },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
