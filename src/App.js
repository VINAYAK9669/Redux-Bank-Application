import { useSelector } from "react-redux";
import AccountOperations from "./features/accounts/AccountOperations";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>
        🏦 The React-Redux Bank ⚛️
      </h1>

      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
