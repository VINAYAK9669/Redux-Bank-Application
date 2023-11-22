import { createStore, combineReducers } from "redux";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountreducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a Car" },
// });
console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan",
//   payload: { amount: 1000, purpose: "Buy a Car" },
// });
// const ACCOUNT_DEPOSIT ="account/deposit"

function deposits(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount) {
  return {
    type: "account/requestLoan",
    payload: { amount: 1000, purpose: "Buy a Car" },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposits(500));
store.dispatch(withdraw(100));
store.dispatch(requestLoan(100000));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString },
  };
}
function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

function upateName(fullname) {
  return { type: "account/updateName", payload: fullname };
}

store.dispatch(createCustomer("Vinayak Kittad", "24356546"));

console.log(store.getState());
