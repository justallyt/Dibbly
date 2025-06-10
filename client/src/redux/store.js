import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./slices/apiSlice";
import AuthReducer from "./slices/auth/authUtilSlice";

const store = configureStore({
      reducer: {
           auth: AuthReducer,
           [apiSlice.reducerPath]:apiSlice.reducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true
})

setupListeners(store.dispatch);
export default store;