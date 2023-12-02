import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//importing reduz toolkit
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
