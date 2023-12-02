import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
// import "./Store";
import store from "./Store";

// store.dispatch({ type: "account/deposit", payload: 5000 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a Car" },
// });
// store.dispatch({
//   type: "customer/createCustomer",
//   payload: {
//     fullName: "Vinayak",
//     nationalID: "fff",
//     createdAt: new Date().toISOString,
//   },
// });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
