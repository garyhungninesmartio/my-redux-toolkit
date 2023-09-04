import { configureStore, createSlice } from "@reduxjs/toolkit";

// Also known as 'slices' of state
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value : 0
  },
  reducers: {
    // immer library allows us to pass a 'mutated' state
    increment: state => state.value += 1,
    decrement: state => state.value -= 1,
    incrementByAmount : (state, action) => state.value += action.payload,
    decrementByAmount : (state, action) => state.value -= action.payload,
  }
})

export const selectCount = (state) => state.count.value;
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default configureStore({
  // The property names here will be the names in the final state e.g. state.count
  reducer: {
    count: counterSlice.reducer, // we specify we want this slice of reducer to handle state.count changes
  }
})