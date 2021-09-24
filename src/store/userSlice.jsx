import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const initialState = {
  data: [],
  userInfo: [],
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    handleLogin: (state, action) => {
      if (
        action.payload.Email == state.data.email &&
        action.payload.Password == state.data.password
      ) {
        state.isAuth = true;
        console.log("thanh cong");
        Swal.fire(
          `chao mung ${
            state.data.firstName + " " + state.data.lastName
          }  den voi chung toi`
        );
        test();
      } else {
        state.isAuth = false;
        console.log("that bai");
      }
    },
    setInfoUser: (state, { payload }) => {
      state.data = payload;
    },

    getUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export async function getInfoUser(dispatch, getState) {
  const { data } = await axios.get(
    `https://60f7c1b19cdca00017454fa1.mockapi.io/user`
  );
  dispatch({ type: "user/setInfoUser", payload: data[0] });
}

export function test() {
  console.log("thanh cong va goi function nay");
}

export const { handleLogin } = userSlice.actions;
export default userSlice.reducer;
