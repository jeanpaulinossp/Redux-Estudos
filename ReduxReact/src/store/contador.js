import { createSlice } from "@reduxjs/toolkit";

// Dessa forma sempre muta o estado atual
// const slice = createSlice({
//   name: "contador",
//   initialState: {
//     total: 0,
//   },
//   reducers: {
//     incrementar(state) {
//       state.total++;
//     },
//     reduzir(state) {
//       state.total--;
//     },
//   },
// });

// Dessa forma sempre gera um estado novo
const slice = createSlice({
  name: "contador",
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    reduzir: (state) => state - 1,
  },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;
