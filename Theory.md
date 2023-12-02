# 1] What is `Redux`?

- A state management library for JavaScript applications, often used with React.
- Centralizes the application state in a single store.
- State changes are managed through `actions`, which are plain JavaScript objects describing the change.

Here's a simple breakdown of how React-Redux works:

### Store

- Central place where application state is stored.

- Example:

  <pre>
  
  ```javascript
   
  import { createStore, combineReducers } from "redux";
  import accountreducer from "./features/accounts/accountSlice";
  import { customerReducer } from "./features/customers/customerSlice";
  
    const rootReducer = combineReducers({
    account: accountreducer, // all the states related to account stored in this.
    customer: customerReducer, //all the states related to Customer stored in this.
    });
    const store = createStore(rootReducer);
    export default store;  
    
    ```
  
  </pre>

Here

#### createStore

        - Fuction provided by redux to create a Redux store.

#### combineReducers

        - utility function provided by redux to combine multiple reducers into a single reducer function.

Important keys in React-redux

    `store.getState()`
            - Retrieves the current state of the Redux store.
    `store.dispatch(action)`
            - Dispatches an action to the Redux store. - The general structure of an action is
    `{ type: 'ACTION_TYPE', payload: /* optional data */ }`
            - The `payload` property is used to carry additional information about the action.
    `useSelector`
            - It is a hook provided by the React-Redux library.
            - Which is used to select data from the Redux `store`
              state in a functional component.
            - It is commonly used with functional components to access
              specific parts of the Redux `store` state.
            - Takes a selector function as an argument.
            - Example:
                In the above code we have exported `store` which contains `account` and `customer` as a state objects.
                We can use these states in any components using the `useSelector`

                    `const fullName= useSelector((store) => store.customer.fullName);`

Note: to connect react with redux we need to install `react-redux` package.

#### `useDispatch()`

        ` Need to understand this
        function BalanceDisplay({ balance }) {
        return <div className="balance">{formatCurrency(balance)}</div>;
        }
        function mapStateToProps(state) {
        return {
        balance: state.account.balance,
        };
        }
        export default connect(mapStateToProps)(BalanceDisplay);`


        What is REDUX MIDDLEWARE? Redux Thunks

        to use redux thunk we need to install `npm i redux-thunk`

### applyMiddleware

### How to install and use Redux dev tools

                - install Redux DevTools extension from chrome.
                -  enter the below command in terminal
                    npm i redux-devtools-extension

#### How to import in store file

        - import {composeWithDevTools} from "redux-devtools-extension"
        - const store = createStore(
                        rootReducer,
                        composeWithDevTools(applyMiddleware(thunk))
                        );

#### Redux Toolkit (Modern way to right redux)

      - modern way of writing redux code
      - best practice to use it
      - less code and less boilerplate code.

      Gives a 3 big things
      - Can able to mutate the states inside reducer [can be converted to immutable logic behind the scenes by "Immer" library]
      - action creators are automaticall created.
      - Automatic setup of the thunk middleware and devTools

      How to instal it?
      in terminal
        npm i @reduxjs/toolkit

## createSlice
