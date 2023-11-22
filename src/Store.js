import { createStore, combineReducers } from "redux";
import accountreducer from "./features/accounts/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
