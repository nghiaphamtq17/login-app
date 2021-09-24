import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.data = [...state.data , action.payload]
    },

    deletedCategory: (state, action) => {
      console.log(action);
    },

    setData: (state, { payload }) => {
      state.data = payload
    },
  },
});

export async function getData(dispatch, getState) {
  const { data } = await axios.get(
    `https://60f7c1b19cdca00017454fa1.mockapi.io/category`
  );
  dispatch({ type: "category/setData", payload: data });
}

export const { addCategory, deletedCategory } = categorySlice.actions;
export default categorySlice.reducer;
