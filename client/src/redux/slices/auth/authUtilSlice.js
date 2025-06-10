import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      authInfo: localStorage.getItem("AuthInfo") ? JSON.parse(localStorage.getItem("AuthInfo")) : null,
}

const authUtilSlice = createSlice({
      name: "auth",
      initialState,
      reducers: {
            setCredentials: (state, action) => {
                  state.authInfo = action.payload;
                  localStorage.setItem("AuthInfo", JSON.stringify(action.payload));
            },
            clearCredentials: (state) => {
                state.authInfo = null;
                localStorage.removeItem("AuthInfo");
            }
      }
})

export const {
     setCredentials,
     clearCredentials,
} = authUtilSlice.actions;

export default authUtilSlice.reducer;